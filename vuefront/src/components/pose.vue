<template>
  <div class="pose">
    <P5 v-on ="{setup,draw}" />
  </div>
</template>

<script>
import P5 from "vue-p5";
import ml5 from "ml5";
import EventBus from "../EventBus";
// import * as tf from "@tensorflow/tfjs";

export default {
  name: 'Pose',
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
      modelInfo: undefined,
      model: "/model/Hellomodel.json",
      metadata: "/model/Hellomodel_meta.json",
      weights: "/model/Hellomodel.weights.bin",
      answer: "안녕~",
      count: 0,
      poseLabel: "준비",
      // modelInfo: {
      //   model: "/model/model.json",
      //   metadata: "/model/model_meta.json",
      //   weights: "/model/model.weights.bin"
      // },
      options: {
        inputs: 34,
        outputs: 2,
        task: 'classification',
        // debug: true
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
      this.brain = ml5.neuralNetwork(this.options);
      this.modelInfo = {
        model: this.model,
        metadata: this.metadata,
        weights: this.weights
      }
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
        this.brain.classify(inputs,this.gotResult);
      }else{
        setTimeout(this.classifyPose, 100);
      }
    },
    gotResult(error, results){
      console.log(error);
      if (results[0].confidence > 0.75){
        this.poseLabel = results[0].label;
      }
      if(this.poseLabel == this.answer){
        this.count++;
        if(this.count>40){
          this.nextAction();
          this.count = 0;
        }
      }else{
        this.count = 0;
      }
      this.classifyPose();
    },
    draw(sketch){
      sketch.push()
      sketch.translate(this.video.width,0);
      sketch.scale(-1, 1);
      sketch.image(this.video,0,0);
      // console.log(this.model);

      if(this.pose){
        for (let i=0; i < this.skeleton.length; i++){
          let a = this.skeleton[i][0];
          let b = this.skeleton[i][1];
          sketch.strokeWeight(10);
          sketch.stroke(0);

          sketch.line(a.position.x, a.position.y, b.position.x, b.position.y);
        }

        // for (let i=0; i< this.pose.keypoints.length; i++){
        //   let x = this.pose.keypoints[i].position.x;
        //   let y = this.pose.keypoints[i].position.y;
        //   sketch.fill(0);
        //   sketch.stroke(255);
        //   sketch.ellipse(x, y, 16, 16);
        // }
      }
      sketch.pop();
      
      sketch.fill(255,255,0);
      sketch.noStroke();
      sketch.textSize(50);
      sketch.textAlign(sketch.CENTER,sketch.BOTTOM);
      sketch.text(this.poseLabel, sketch.width/2, 100);
    },
    modelLoaded(){
      console.log("Model Loaded");
    },
    gotPoses(poses){
      if(poses.length>0){
        this.pose = poses[0].pose;
        this.skeleton = poses[0].skeleton;
      }
    },
    nextAction(){
      EventBus.$emit("next", "complete");
    }
  },
  created() {
    EventBus.$on("nextPose",(answer) => {
      if(answer === "left"){
        this.model = "/model/Leftmodel.json";
        this.metadata = "/model/Leftmodel_meta.json";
        this.weights = "/model/Leftmodel.weights.bin";
        this.answer = "잘했어요~";
        this.modelInfo = {
          model: this.model,
          metadata: this.metadata,
          weights: this.weights
        }
        this.brain.load(this.modelInfo, this.brainLoaded)
        this.count = 0;
      }else if(answer === "right"){
        this.model = "/model/Rightmodel.json";
        this.metadata = "/model/Rightmodel_meta.json";
        this.weights = "/model/Rightmodel.weights.bin";
        this.answer = "잘했어요~";
        this.modelInfo = {
          model: this.model,
          metadata: this.metadata,
          weights: this.weights
        }
        this.brain.load(this.modelInfo, this.brainLoaded)
        this.count = 0;
      }
    })
  }
}
</script>