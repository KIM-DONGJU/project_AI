<template>
  <div id="container"></div>
</template>
<script>
import * as THREE from 'three'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { VRM, VRMSchema} from "@pixiv/three-vrm"
import EventBus from "../EventBus";

export default {
  name: 'ThreeTest',
  data() {
    const clock = new THREE.Clock();
    return {
      renderer: undefined,
      scene: undefined,
      camera: undefined,
      controls: undefined,
      light: undefined,
      loader: undefined,
      currentVrm: undefined,
      geometry: undefined,
      cubeMaterial: undefined,
      cubeMaterials: undefined,
      cube: undefined,
      stage: 0,
      clock
    }
  },
  methods: {
    init: function() {
      const canvas = document.getElementById("container");
      
      //scene
      this.scene = new THREE.Scene()

      //camera
      this.camera = new THREE.PerspectiveCamera(
        75,
        // window.innerWidth / window.innerHeight,
        750/750, //width/Height
        0.1,
        1000
      )

      // renderer
      this.renderer = new THREE.WebGLRenderer()
      // this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setSize(750, 750);
      this.renderer.setPixelRatio(window.devicePixelRatio);
      // document.body.appendChild(this.renderer.domElement);
      canvas.appendChild(this.renderer.domElement);
      this.renderer.setClearColor( 0xffffff );

      // 초기 카메라 설정
      this.camera.position.z = 1.5
      this.camera.position.y = 1.2

      // camera controls
      this.controls = new OrbitControls( this.camera, this.renderer.domElement);
      this.controls.screenSpacePanning = true;
      this.controls.target.set(0.0,1.0,0.0);
      this.controls.update();

      // light
      this.light = new THREE.DirectionalLight(0xffffff);
      this.light.position.set(1.0,1.0,1.0).normalize();
      this.scene.add(this.light);

      // loader
      this.loader = new GLTFLoader();
      this.loader.crossOrigin = "anonymous"
      this.loader.load(
          "./vrmmodel/teacher1.vrm",
          // "./vrmmodel/4.vrm",
          // "./vrmmodel/example.vrm",
          (gltf) => {

              VRM.from(gltf).then( (vrm) => {
                  console.log(vrm);
                  this.scene.add(vrm.scene);
                  this.currentVrm = vrm;
                  vrm.humanoid.getBoneNode( VRMSchema.HumanoidBoneName.Hips ).rotation.y = Math.PI;
              })
          }
      )

      // skybox
      this.geometry = new THREE.CubeGeometry( 1000, 1000, 1000 );
      this.cubeMaterials = [
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "./images/posx.jpg" ), side: THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "./images/negx.jpg" ), side: THREE.DoubleSide }), 
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "./images/posy.jpg" ), side: THREE.DoubleSide }), 
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "./images/negy.jpg" ), side: THREE.DoubleSide }), 
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "./images/posz.jpg" ), side: THREE.DoubleSide }), 
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load( "./images/negz.jpg" ), side: THREE.DoubleSide }), 
      ];

      this.cubeMaterial = new THREE.MeshFaceMaterial( this.cubeMaterials );
      this.cube = new THREE.Mesh( this.geometry, this.cubeMaterial );
      this.scene.add( this.cube );

      // 좌표 그리기
      // const gridHelper = new THREE.GridHelper(10,10);
      // this.scene.add(gridHelper);
      // const axeHelper = new THREE.AxesHelper(5);
      // this.scene.add(axeHelper);
    
    },
    actionHello() {
      requestAnimationFrame(this.actionHello);
      // tweak bones
      const deltaTime = this.clock.getDelta();
      const s = 0.25 * Math.PI * Math.sin(Math.PI * this.clock.elapsedTime);
      if(this.currentVrm !== undefined && this.stage==0) {
        //face
        this.currentVrm.blendShapeProxy.setValue(VRMSchema.BlendShapePresetName.Joy, 0.5 - 0.5*s);
        
        //body
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Neck).rotation.x = s/4;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftUpperArm).rotation.z = s/4;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftLowerArm).rotation.z = s+30;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftHand).rotation.x = 1;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightUpperArm).rotation.z = 11.2;
        //update vrm
        this.currentVrm.update( deltaTime );

      }else if(this.currentVrm !== undefined && (this.stage===1)){
        // leftAction

        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Neck).rotation.x = s/4;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightUpperArm).rotation.z = 20+s/3;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightHand).rotation.x = 1;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftUpperArm).rotation.z = 20.17;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftLowerArm).rotation.z = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftHand).rotation.x = s;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.UpperChest).rotation.z = s/4;
        //update vrm
        this.currentVrm.update( deltaTime );

      }else if(this.currentVrm !== undefined && this.stage===2){
        // rightAction

        //face
        this.currentVrm.blendShapeProxy.setValue(VRMSchema.BlendShapePresetName.Joy, 0);
        this.currentVrm.blendShapeProxy.setValue(VRMSchema.BlendShapePresetName.A, 0.5 + 0.5*s);
        this.currentVrm.blendShapeProxy.setValue(VRMSchema.BlendShapePresetName.BlinkL, 0.5 - 0.5*s);

        //body
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Neck).rotation.y = s/4;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftUpperArm).rotation.z = 30.2+s/3;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftHand).rotation.x = 1;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightUpperArm).rotation.z = 30.3+s/8;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightHand).rotation.x = s/2;

        //update vrm
        this.currentVrm.update( deltaTime );

      }else if(this.currentVrm !== undefined && (this.stage===3||this.stage===10)){
        // draw circle
        
        // face
        this.currentVrm.blendShapeProxy.setValue(VRMSchema.BlendShapePresetName.BlinkL, 0);
        this.currentVrm.blendShapeProxy.setValue(VRMSchema.BlendShapePresetName.Joy, 0, s);

        //left
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftShoulder).rotation.z = s/12;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftUpperArm).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftUpperArm).rotation.y = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftUpperArm).rotation.z = 30.5;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftLowerArm).rotation.z = 4.8;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftHand).rotation.x = 3.9;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftHand).rotation.z = 0;

        //right
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightShoulder).rotation.y = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightShoulder).rotation.z = -s/12;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightUpperArm).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightUpperArm).rotation.y = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightUpperArm).rotation.z = -30.5;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightLowerArm).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightLowerArm).rotation.z = -4.8;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightHand).rotation.x = 3.9;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightHand).rotation.z = 0;

        //body
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Spine).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Spine).rotation.y = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Spine).rotation.z = s/4;

        //left leg
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftUpperLeg).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftLowerLeg).rotation.x = 0;
        
        //right leg
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightUpperLeg).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightLowerLeg).rotation.x = 0;
        
        //update vrm
        this.currentVrm.update( deltaTime );        
      }else if(this.currentVrm !== undefined && this.stage===4){
        //head

        //face
        this.currentVrm.blendShapeProxy.setValue(VRMSchema.BlendShapePresetName.Joy, 0.5 - 0.5*s);

        //left
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftShoulder).rotation.z = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftUpperArm).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftUpperArm).rotation.y = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftUpperArm).rotation.z = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftLowerArm).rotation.z = 4;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftHand).rotation.x = 3.9;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftHand).rotation.z = 0;

        //right
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightShoulder).rotation.y = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightShoulder).rotation.z = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightUpperArm).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightUpperArm).rotation.y = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightUpperArm).rotation.z = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightLowerArm).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightLowerArm).rotation.z = -4;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightHand).rotation.x = 3.9;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightHand).rotation.z = 0;

        //body
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Spine).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Spine).rotation.y = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Spine).rotation.z = s/4;

        //left leg
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftUpperLeg).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftLowerLeg).rotation.x = 0;
        
        //right leg
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightUpperLeg).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightLowerLeg).rotation.x = 0;

        //update vrm
        this.currentVrm.update( deltaTime );
      }else if(this.currentVrm !== undefined && this.stage===5){
        //shoulder

        //face
        this.currentVrm.blendShapeProxy.setValue(VRMSchema.BlendShapePresetName.Joy, 0.5 - 0.5*s);

        //left
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftShoulder).rotation.z = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftUpperArm).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftUpperArm).rotation.y = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftUpperArm).rotation.z = 0.8+s/4;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftLowerArm).rotation.z = 4;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftHand).rotation.x = 3.9;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftHand).rotation.z = 1.8;

        //right
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightShoulder).rotation.y = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightShoulder).rotation.z = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightUpperArm).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightUpperArm).rotation.y = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightUpperArm).rotation.z = -0.8-s/4;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightLowerArm).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightLowerArm).rotation.z = -4;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightHand).rotation.x = 3.9;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightHand).rotation.z = -1.8;

        //body
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Spine).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Spine).rotation.y = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Spine).rotation.z = s/4;

        //left leg
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftUpperLeg).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftLowerLeg).rotation.x = 0;
        
        //right leg
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightUpperLeg).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightLowerLeg).rotation.x = 0;

        //update vrm
        this.currentVrm.update( deltaTime );
        
      }else if(this.currentVrm !== undefined && (this.stage===6||this.stage===8)){
        //knee

        //face
        this.currentVrm.blendShapeProxy.setValue(VRMSchema.BlendShapePresetName.Joy, 0.5 - 0.5*s);

        //left
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftShoulder).rotation.z = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftUpperArm).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftUpperArm).rotation.y = -1.5;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftUpperArm).rotation.z = 0.5;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftLowerArm).rotation.z = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftHand).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftHand).rotation.z = 0;

        //right
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightShoulder).rotation.y = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightShoulder).rotation.z = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightUpperArm).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightUpperArm).rotation.y = 1.5;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightUpperArm).rotation.z = -0.5;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightLowerArm).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightLowerArm).rotation.z = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightHand).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightHand).rotation.z = 0;

        //body
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Spine).rotation.x = -1.3-s/4;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Spine).rotation.y = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Spine).rotation.z = 0;

        //left leg
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftUpperLeg).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftLowerLeg).rotation.x = 0;
        
        //right leg
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightUpperLeg).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightLowerLeg).rotation.x = 0;

        //update vrm
        this.currentVrm.update( deltaTime );

      }else if(this.currentVrm !== undefined && (this.stage===7||this.stage===9)){
        //foot

        //left
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftShoulder).rotation.z = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftUpperArm).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftUpperArm).rotation.y = -1.5;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftUpperArm).rotation.z = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftLowerArm).rotation.z = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftHand).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftHand).rotation.z = 0;

        //right
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightShoulder).rotation.y = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightShoulder).rotation.z = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightUpperArm).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightUpperArm).rotation.y = 1.5;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightUpperArm).rotation.z = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightLowerArm).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightLowerArm).rotation.z = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightHand).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightHand).rotation.z = 0;

        //body
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Spine).rotation.x = -1.7-s/5;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Spine).rotation.y = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Spine).rotation.z = 0;

        //left leg
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftUpperLeg).rotation.x = 1;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftLowerLeg).rotation.x = -1.5;
        
        //right leg
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightUpperLeg).rotation.x = 1;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightLowerLeg).rotation.x = -1.5;

        //update vrm
        this.currentVrm.update( deltaTime );

      }else if(this.currentVrm !== undefined && this.stage===11){
        //mommyshark

        //face
        this.currentVrm.blendShapeProxy.setValue(VRMSchema.BlendShapePresetName.Joy, 0.5 - 0.5*s);

        //left
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftShoulder).rotation.z = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftUpperArm).rotation.x = -0.1;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftUpperArm).rotation.y = -1.7;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftUpperArm).rotation.z = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftLowerArm).rotation.z = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftHand).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftHand).rotation.z = -0.5+s;

        //right
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightShoulder).rotation.y = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightShoulder).rotation.z = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightUpperArm).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightUpperArm).rotation.y = 1.7;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightUpperArm).rotation.z = -0.2;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightLowerArm).rotation.x = 3;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightLowerArm).rotation.z = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightHand).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightHand).rotation.z = 0.5-s;

        //body
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Spine).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Spine).rotation.y = -0.8+s/4;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Spine).rotation.z = 0;

        //left leg
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftUpperLeg).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftLowerLeg).rotation.x = 0;
        
        //right leg
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightUpperLeg).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightLowerLeg).rotation.x = 0;

        //update vrm
        this.currentVrm.update( deltaTime );
      }else if(this.currentVrm !== undefined && this.stage===12){
        //left
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftShoulder).rotation.z = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftUpperArm).rotation.x = 0.3+s/2;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftUpperArm).rotation.y = -1.7;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftUpperArm).rotation.z = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftLowerArm).rotation.z = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftHand).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftHand).rotation.z = 0;

        //right
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightShoulder).rotation.y = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightShoulder).rotation.z = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightUpperArm).rotation.x = -0.3-s/2;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightUpperArm).rotation.y = 1.7;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightUpperArm).rotation.z = -0.2;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightLowerArm).rotation.x = 3;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightLowerArm).rotation.z = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightHand).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightHand).rotation.z = 0;

        //body
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Spine).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Spine).rotation.y = -0.8+Math.abs(s)/4;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Spine).rotation.z = s/4;

        //left leg
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftUpperLeg).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.LeftLowerLeg).rotation.x = 0;
        
        //right leg
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightUpperLeg).rotation.x = 0;
        this.currentVrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.RightLowerLeg).rotation.x = 0;

        //update vrm
        this.currentVrm.update( deltaTime );
      }
      
      this.renderer.render(this.scene, this.camera)
    },
    nextPose() {
      if(this.stage===0){
        EventBus.$emit("nextPose", "left");
      }else if(this.stage=== 1){
        EventBus.$emit("nextPose", "right");
      }else if(this.stage === 2){
        EventBus.$emit("nextPose", "circle");
      }else if(this.stage === 3){
        EventBus.$emit("nextPose", "head");
      }else if(this.stage === 4){
        EventBus.$emit("nextPose", "shoulder");
      }else if(this.stage === 5 || this.stage === 7){
        EventBus.$emit("nextPose", "knee");
      }else if(this.stage === 6 || this.stage === 8){
        EventBus.$emit("nextPose", "foot");
      }else if(this.stage === 9){
        EventBus.$emit("nextPose", "circle");
      }else if(this.stage === 10){
        EventBus.$emit("nextPose", "mommyShark");
      }else if(this.stage === 11){
        EventBus.$emit("nextPose", "daddyShark");
      }
    }
  },
  mounted() {
    this.init()
    this.actionHello()
  },
  created() {
    EventBus.$on("next",() => {
      this.nextPose();
      this.stage++;
    })
  }
}
</script>