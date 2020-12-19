<template>
    <div class="award">
        <div>
            <div class="jb-box">
                <video muted autoplay loop>
                    <source src="../assets/fireworks.mp4" type="video/mp4">
                    <strong>Your browser does not support the video tag.</strong>
                </video>
            </div>

            <div class="square">
                <div class="content">
                    <img src="../assets/trophy.png" class="trophy">
                    <p class="congration_title">잘했어요!</p>
                    <p class="congration_first">정확하게 모든 동작들을 완료하여 보상이 주어집니다!</p>
                    <p class="congration_second">부모님에게 이 화면을 보여주세요!</p>
                    <button v-on:click="exitGame" class="exit-game">게임종료</button>
                </div>
            </div>
            <div class = 'bg_color'></div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        exitGame:function(){
            alert('게임을 종료하고, 메인화면으로 돌아갑니다!')
            this.$router.push('/')
        }
    },
}
</script>
<style scoped>
body{ 
    padding: 0px; 
    margin: 0px; 
    overflow-x: hidden;
    overflow-y:auto;
}

.jb-box {
    width: 1920px; 
    height: 909px; 
    padding-top : 40px; 
    overflow: hidden;
    margin: 0px auto; 
    position: relative; 
}

.award{
    width:1920px;
}

video { 
    width: 100%; 
}

.award{
    width:1920px;
}

.bg_color {
   position : absolute;
   top : 100px;   
   width : 1920px;
   height : 869px;
   background-color: black;
   z-index: 1;
   opacity: 0.88;
}

.square {
  position: absolute;
  overflow: hidden;
  width: 696px;
  height:559px;
  left:612px;
  top:261px;
  z-index: 2;
  background-color: #fff;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
}

.square::after {
  content: "";
  display: block;
   z-index: 2;
}

.content {
  position: absolute;
  width: 100%;
  height: 100%;
   z-index: 2;
}

.trophy{
    position:relative;
    width:228px;
    height:228px;
    top:67px;
}

.congration_title{
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
   left: 245px;
   top: 85px;;
   position: relative;
   overflow: visible;
   width: 223px;
   white-space: nowrap;
   text-align: left;
   font-family: NanumBarunGothic;
   font-style: normal;
   font-weight: bold;
   font-size: 41px;
   color: rgba(0,0,0,1);
   letter-spacing: 1px;
}

.congration_first{
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
   left: 97px;
   top: 75px;
   position: relative;
   overflow: visible;
   width: 503px;
   white-space: nowrap;
   line-height: 26px;
   margin-top: -2.5px;
   text-align: center;
   font-family: NanumBarunGothic;
   font-style: normal;
   font-weight: lighter;
   font-size: 21px;
   color: rgba(0,0,0,1);
   letter-spacing: 1px;
}

.congration_second{
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
   left: 97px;
   top: 70px;
   position: relative;
   overflow: visible;
   width: 503px;
   white-space: nowrap;
   line-height: 26px;
   margin-top: -2.5px;
   text-align: center;
   font-family: NanumBarunGothic;
   font-style: normal;
   font-weight: lighter;
   font-size: 21px;
   color: rgba(0,0,0,1);
   letter-spacing: 1px;
}

.exit-game{
    background-color: rgba(246,115,149,1);
   color:#ffffff;
   font-style: bold;
   position: relative;
   overflow: visible;
   font-size: 15px;
   width: 150px;
   font-family: NanumBarunGothic;
   border:0;
   filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
   border-radius: 10px;
   height: 45px;
   top:70px;
}
</style>