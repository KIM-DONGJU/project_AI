<template>
   <div class="play">
      <!-- 선생님 선택 -->
      <div class="choice_area" v-if="!this.check">
         <h1>어떤 선생님을 따라할까요?</h1>
         <div class="char1" v-show="this.page===1">
            <div class="teacher1">
               <img src="@/assets/teacher1.png" />
               <div class = "t1_content" @click="teacher(1)" @mouseover="mouseOver">
                  <div class = "t1_text">이름 민수<br> 출신 대한민국<br> 활발한 성격을 가지고 있으며 가수를 꿈꾸고 있다. </div>
               </div>
            </div>
            <div class="teacher2">
               <img src="@/assets/teacher2.png" />
               <div class = "t2_content" @click="teacher(2)" @mouseover="mouseOver">
                  <div class = "t2_text">이름 소피아<br> 출신 몽골<br> 온화한 마음의 소유자</div>
               </div>
            </div>
            <div class="teacher3">
               <img src="@/assets/teacher3.png" />
               <div class = "t3_content" @click="teacher(3)" @mouseover="mouseOver">
                  <div class = "t3_text">이름 윙<br> 출신 요정족<br> 지구인들과 친해지고 싶어서 먼 길을 날아왔음</div>
               </div>
            </div>
            <div class="teacher4">
               <img src="@/assets/teacher4.png" />
               <div class = "t4_content" @click="teacher(4)" @mouseover="mouseOver">
                  <div class = "t4_text">이름 : 나나 <br> 출신 : 영국 <br> 아직 한국어에 서툴지만, <br>친화력이 좋고 밝고 활기찬 <br>성격으로 주변 사람들을 <br>끌어모은다.</div>
               </div>
            </div>
         </div>
         <div class="char2" v-show="this.page===2">
            <div class="teacher5">
               <img src="@/assets/teacher5.png"  />
               <div class = "t5_content" @click="teacher(5)" @mouseover="mouseOver">
                  <div class = "t5_text">이름 크리스탈 킴<br> 출신 미국<br>매우 밝은 성격으로 누구든 <br> 호감을 가지게 되는 성격을<br>가지고 있다.</div>
               </div>
            </div>
            <div class="teacher6">
               <img src="@/assets/teacher6.png"  />
               <div class = "t6_content" @click="teacher(6)" @mouseover="mouseOver">
                  <div class = "t6_text">이름 유은우<br> 출신 대한민국<br>완벽함을 추구하고 의외로 <br> 여린 마음을 가지고 있다.</div>
               </div>
            </div>
            <div class="teacher7">
               <img src="@/assets/teacher7.png"  />
               <div class = "t7_content" @click="teacher(7)" @mouseover="mouseOver">
                  <div class = "t7_text" >이름 파이리<br> 출신 태초마을<br>따뜻한 마음을 가지고 있고 <br>열정이 넘친다.</div>
               </div>
            </div>
            <div class="teacher8">
               <img src="@/assets/teacher8.png"  />
               <div class = "t8_content" @click="teacher(8)" @mouseover="mouseOver">
                  <div class = "t8_text">이름 모디 킴<br> 출신 중국 <br> 얽매이는 걸 싫어하고 <br>자유롭게 뛰어노는 활발한 <br>성격을 가지고 있다.</div>
               </div>
            </div>
         </div>
         <img class="right_arrow" src = "@/assets/right-arrow.png" @click="up" v-show="this.page===1">
         <img class="left_arrow" src = "@/assets/left-arrow.png" @click="down" v-show="this.page===2">
      </div>
      <!-- 플레이 영역 -->
      <div class="play_area" v-if="this.check">
         <!-- 유저 영역 -->
         <div class="user_movie">
            <Pose></Pose>
         </div>

         <!-- 선생님 영역 -->
         <div class="teacher_movie">
            <Vrm :selectedModel = "this.selectedModel"></Vrm>
         </div>
      </div>
    </div>
</template>

<script>
import Pose from '@/components/pose.vue'
import Vrm from '@/components/vrm.vue'

export default {
   name: 'Play',
    components : {
       Pose,
      Vrm
   },
   data(){
      return{
         check: false,
         selectedModel: undefined,
         audio:undefined,
         page : 1
      }
   },
     methods: {
        up(){
           this.page++;
        },
        down(){
           this.page--;
        },
        teacher(number){
           this.selectedModel = "./vrmmodel/teacher"+ number + ".vrm";
           this.check = this.check ? false : true;
        },
        mouseOver(){
           this.audio.play();
        }
   },
   created(){
      this.audio = new Audio();
      this.audio.src = "/audio/effect.mp3";
   }
}
</script>

<style scoped>

img{
   height: 100%;
   cursor: pointer;
}

.play{
   padding-top: 40px;
   overflow-x: hidden;
}

.choice_area{
   width:100%;
   padding-top: 25px;
   position:relative;
   overflow: visible;
   height:820px;
   background: linear-gradient( to bottom, #FFDCFF, #FFFFFF);
   font-family: CookieRun-Regular;
}

.play_area{
   width:100%;
   padding-top: 25px;
   position:relative;
   overflow: visible;
   height:820px;
   background: linear-gradient( to bottom, #FFDCFF, #FFFFFF);
}

.user_movie{
   width:50%;
   float: left;
}

.teacher_movie{
   width:50%;
   float: right;
   padding-left:40px;
}

.char1{
   position: relative;
   width: 100%;
   height: 80%;
   /* background-color: white; */
}

.teacher1{
   float: left;
   width: 25%;
   height: 100%;
   background-color:#00ff0000;
   /* background-color: rgba( 255, 255, 255, 0.5 ); */
   display: block;
   overflow: hidden;
}

.t1_content{
   opacity: 0;
     font-size: 40px;
     position: absolute;
     top: 0;
     left: 0;
   color: #293241;
     background-color: rgba(200, 200, 200, 0.5);
     width: 25%;
     height: 100%;
     -webkit-transition: all 400ms ease-out;
     -moz-transition: all 400ms ease-out;
     -o-transition: all 400ms ease-out;
     -ms-transition: all 400ms ease-out;
     transition: all 400ms ease-out;
     text-align: center;
   cursor: pointer;
}

.teacher1 .t1_content:hover {
   opacity: 1;
}

.teacher1 .t1_content .t1_text{
   height: 0;
   opacity: 1;
     transition-delay: 0s;
     transition-duration: 0.4s;
}

.teacher1 .t1_content .t1_text {
    opacity: 1;
     transform: translateY(250px);
     -webkit-transform: translateY(250px);
}

.teacher2{
   float: left;
   width: 25%;
   height: 100%;
   /* background-color: white; */
   background-color:#00ff0000;
   display: block;
   overflow: hidden;
}

.t2_content{
   opacity: 0;
     font-size: 40px;
     position: absolute;
     top: 0;
     left: 25%;
     color: #293241;
     background-color: rgba(200, 200, 200, 0.5);
     width: 25%;
     height: 100%;
     -webkit-transition: all 400ms ease-out;
     -moz-transition: all 400ms ease-out;
     -o-transition: all 400ms ease-out;
     -ms-transition: all 400ms ease-out;
     transition: all 400ms ease-out;
     text-align: center;
   cursor: pointer;
}

.teacher2 .t2_content:hover {
   opacity: 1;
}

.teacher2 .t2_content .t2_text{
   height: 0;
   opacity: 1;
     transition-delay: 0s;
     transition-duration: 0.4s;
}

.teacher2 .t2_content .t2_text {
    opacity: 1;
     transform: translateY(250px);
     -webkit-transform: translateY(250px);
}

.teacher3{
   float: left;
   width: 25%;
   height: 100%;
   /* background-color: white; */
   background-color:#00ff0000;
   display: block;
   overflow: hidden;
}

.t3_content{
   opacity: 0;
     font-size: 40px;
     position: absolute;
     top: 0;
     left: 50%;
     color: #293241;
     background-color: rgba(200, 200, 200, 0.5);
     width: 25%;
     height: 100%;
     -webkit-transition: all 400ms ease-out;
     -moz-transition: all 400ms ease-out;
     -o-transition: all 400ms ease-out;
     -ms-transition: all 400ms ease-out;
     transition: all 400ms ease-out;
     text-align: center;
   cursor: pointer;
}

.teacher3 .t3_content:hover {
   opacity: 1;
}

.teacher3 .t3_content .t3_text{
   height: 0;
   opacity: 1;
     transition-delay: 0s;
     transition-duration: 0.4s;
}

.teacher3 .t3_content .t3_text {
    opacity: 1;
     transform: translateY(250px);
     -webkit-transform: translateY(250px);
}

.teacher4{
   float: left;
   width: 25%;
   height: 100%;
   /* background-color: white; */
   background-color:#00ff0000;
   display: block;
   overflow: hidden;
}

.t4_content{
   opacity: 0;
     font-size: 40px;
     position: absolute;
     top: 0;
     left: 75%;
     color: #293241;
     background-color: rgba(200, 200, 200, 0.5);
     width: 25%;
     height: 100%;
     -webkit-transition: all 400ms ease-out;
     -moz-transition: all 400ms ease-out;
     -o-transition: all 400ms ease-out;
     -ms-transition: all 400ms ease-out;
     transition: all 400ms ease-out;
     text-align: center;
   cursor: pointer;
}

.teacher4 .t4_content:hover {
   opacity: 1;
}

.teacher4 .t4_content .t4_text{
   height: 0;
   opacity: 1;
     transition-delay: 0s;
     transition-duration: 0.4s;
}

.teacher4 .t4_content .t4_text {
    opacity: 1;
     transform: translateY(250px);
     -webkit-transform: translateY(250px);
}

.char2{
   position: relative;
   width: 100%;
   height: 80%;
}

.teacher5{
   float: left;
   width: 25%;
   height: 100%;
   display: block;
   background-color:#00ff0000;
   overflow: hidden;
}

.t5_content{
   opacity: 0;
     font-size: 40px;
     position: absolute;
     top: 0;
     left: 0;
     color: #293241;
     background-color: rgba(200, 200, 200, 0.5);
     width: 25%;
     height: 100%;
     -webkit-transition: all 400ms ease-out;
     -moz-transition: all 400ms ease-out;
     -o-transition: all 400ms ease-out;
     -ms-transition: all 400ms ease-out;
     transition: all 400ms ease-out;
     text-align: center;
   cursor: pointer;
}

.teacher5 .t5_content:hover {
   opacity: 1;
}

.teacher5 .t5_content .t5_text{
   height: 0;
   opacity: 1;
     transition-delay: 0s;
     transition-duration: 0.4s;
}

.teacher5 .t5_content .t5_text {
    opacity: 1;
     transform: translateY(250px);
     -webkit-transform: translateY(250px);
}

.teacher6{
   float: left;
   width: 25%;
   height: 100%;
   background-color:#00ff0000;
   display: block;
   overflow: hidden;
}

.t6_content{
   opacity: 0;
     font-size: 40px;
     position: absolute;
     top: 0;
     left: 25%;
     color: #293241;
     background-color: rgba(200, 200, 200, 0.5);
     width: 25%;
     height: 100%;
     -webkit-transition: all 400ms ease-out;
     -moz-transition: all 400ms ease-out;
     -o-transition: all 400ms ease-out;
     -ms-transition: all 400ms ease-out;
     transition: all 400ms ease-out;
     text-align: center;
   cursor: pointer;
}

.teacher6 .t6_content:hover {
   opacity: 1;
}

.teacher6 .t6_content .t6_text{
   height: 0;
   opacity: 1;
     transition-delay: 0s;
     transition-duration: 0.4s;
}

.teacher6 .t6_content .t6_text {
    opacity: 1;
     transform: translateY(250px);
     -webkit-transform: translateY(250px);
}

.teacher7{
   float: left;
   width: 25%;
   height: 100%;
   background-color:#00ff0000;
   display: block;
   overflow: hidden;
}

.t7_content{
   opacity: 0;
     font-size: 40px;
     position: absolute;
     top: 0;
     left: 50%;
     color: #293241;
     background-color: rgba(200, 200, 200, 0.5);
     width: 25%;
     height: 100%;
     -webkit-transition: all 400ms ease-out;
     -moz-transition: all 400ms ease-out;
     -o-transition: all 400ms ease-out;
     -ms-transition: all 400ms ease-out;
     transition: all 400ms ease-out;
     text-align: center;
   cursor: pointer;
}

.teacher7 .t7_content:hover {
   opacity: 1;
}

.teacher7 .t7_content .t7_text{
   height: 0;
   opacity: 1;
     transition-delay: 0s;
     transition-duration: 0.4s;
}

.teacher7 .t7_content .t7_text {
    opacity: 1;
     transform: translateY(250px);
     -webkit-transform: translateY(250px);
}

.teacher8{
   float: left;
   width: 25%;
   height: 100%;
   background-color:#00ff0000;
   display: block;
   overflow: hidden;
}

.t8_content{
   opacity: 0;
     font-size: 40px;
     position: absolute;
     top: 0;
     left: 75%;
     color: #293241;
     background-color: rgba(200, 200, 200, 0.5);
     width: 25%;
     height: 100%;
     -webkit-transition: all 400ms ease-out;
     -moz-transition: all 400ms ease-out;
     -o-transition: all 400ms ease-out;
     -ms-transition: all 400ms ease-out;
     transition: all 400ms ease-out;
     text-align: center;
   cursor: pointer;
}

.teacher8 .t8_content:hover {
   opacity: 1;
}

.teacher8 .t8_content .t8_text{
   height: 0;
   opacity: 1;
     transition-delay: 0s;
     transition-duration: 0.4s;
}

.teacher8 .t8_content .t8_text {
    opacity: 1;
     transform: translateY(250px);
     -webkit-transform: translateY(250px);
}
.right_arrow{
   padding: 5px;
   height: 60px;
}

.left_arrow {
   padding: 5px;
   height: 60px;
}
</style>