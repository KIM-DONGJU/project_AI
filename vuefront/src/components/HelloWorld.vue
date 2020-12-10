<template>
  <div class="hello">
    <P5 v-on ="{setup,draw}" />
  </div>
</template>

<script>
import P5 from "vue-p5";
import ml5 from "ml5";
// import * as tf from "@tensorflow/tfjs";

export default {
  name: 'HelloWorld',
  components: {
    P5
  },
  data(){
    return {
      video: undefined,
      poseNet: undefined,
      pose: undefined,
      skeleton: undefined,
      brain: undefined,
      modelInfo: {
        model: "./model/model.json",
        metadata: "./model_meta.json",
        weights: "./model.weights.bin"
      },
      options: {
        inputs: 34,
        outputs: 3,
        task: 'classification',
        debug: true
      }
    };
  },
  methods: {
    setup(sketch){
      sketch.createCanvas(500,500);
      sketch.background(50);

      this.video = sketch.createCapture(sketch.VIDEO);
      this.video.hide();
      this.poseNet = ml5.poseNet(this.video, this.modelLoaded);
      this.poseNet.on('pose', this.gotPoses);
      // this.model = tf.loadLayersModel('file://static/model.json');
      this.brain = ml5.neuralNetwork(this.options);
      this.brain.load(this.modelInfo, this.brainLoaded);
    },
    brainLoaded(){
      console.log("pose classification ready!");
      this.classifyPose();
    },
    classifyPose(){
      if(this.pose) {
        let inputs = [];
        for (let i =0; i<this.pose.keypoints.length; i++){
          let x = this.pose.keypoints[i].position.x;
          let y = this.pose.keypoints[i].position.y;
          inputs.push(x);
          inputs.push(y);
        }
        this.brain.classify(inputs, this.gotResult);
      }
    },
    gotResult(error, results){
      console.log(error);
      console.log(results);
      this.classifyPose();
    },
    draw(sketch){
      sketch.translate(this.video.width,0);
      sketch.scale(-1, 1);
      sketch.image(this.video,0,0);
      // console.log(this.model);

      if(this.pose){
        let eyeR = this.pose.rightEye;
        let eyeL = this.pose.leftEye;
        let d = sketch.dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y);
        
        sketch.fill(255,0,0);
        sketch.ellipse(this.pose.nose.x, this.pose.nose.y, d);
        sketch.fill(0,0,255);
        sketch.ellipse(this.pose.rightWrist.x, this.pose.rightWrist.y, 32);
        sketch.ellipse(this.pose.leftWrist.x, this.pose.leftWrist.y, 32);

        for (let i=0; i< this.pose.keypoints.length; i++){
          let x = this.pose.keypoints[i].position.x;
          let y = this.pose.keypoints[i].position.y;
          sketch.fill(0,255,0);
          sketch.ellipse(x, y, 16, 16);
        }

        for (let i=0; i < this.skeleton.length; i++){
          let a = this.skeleton[i][0];
          let b = this.skeleton[i][1];
          sketch.strokeWeight(2);
          sketch.stroke(255);
          sketch.line(a.position.x, a.position.y, b.position.x, b.position.y);
        }
      }
    },
    modelLoaded(){
      console.log("Model Loaded");
    },
    gotPoses(poses){
      if(poses.length>0){
        this.pose = poses[0].pose;
        this.skeleton = poses[0].skeleton;
      }
    }
  },
}
</script>