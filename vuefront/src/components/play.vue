<template>
<div class="play">

  <!-- 메인 안내 메시지 -->
  <div id="play-notification">
		<span>선생님과 함께 <b>동작</b>을 따라해보세요!</span>
	</div>

  <!-- 점수 -->
  <div id="score">
			<span>현재 점수 : 30 / 100</span>
	</div>

  <!-- 뒷 배경 -->
  <div class="background" style="text-align:center;">
    <div style="float:left;">
      <img src="../assets/background_movie.png" class="left-movie"/>
    </div>
    <div style="float:left;">
      <img src="../assets/background_movie.png" class="right-movie"/>
    </div>
  </div>

  <!-- 사용자명 -->
  <div class="user_name">
    원준수 어린이
  </div>

  <!-- 선택한 선생님명 -->
  <div class="select_teacher_name">
    원준수 어린이
  </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  props: {
    msg: String
  },
  created(){
      document.title = "PinkPenguinTeacher - With Play!"
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#play-notification{
  left: 45px;
	top: 54.5px;
	position: absolute;
	overflow: visible;
	width: 490px;
	white-space: nowrap;
	text-align: left;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: lighter;
	font-size: 30px;
	color: rgba(0,0,0,1);
	letter-spacing: 1px;
}

.background{
		position: absolute;
		width: 1920px;
		height: 700px;
		left: 0px;
		top: 190px;
    background-color: #F1F2EB
}

.left-movie{
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
  position: relative;
  display:block;
  left:208px;
  top:30px;
	width: 568px;
	height: 648px;
}

.right-movie{
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
  position: relative;
  display:block;
  left:504px;
  top:30px;
	width: 568px;
	height: 648px;
}

.user_name{
  left: 406.5px;
	top: 790.5px;
	position: absolute;
  overflow: visible;
	width: 155px;
	white-space: nowrap;
	text-align: center;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: bold;
	font-size: 25px;
	color: rgba(0,0,0,1);
	letter-spacing: 1px;
}

.select_teacher_name{
  left: 406.5px;
	top: 790.5px;
	position: absolute;
  overflow: visible;
	width: 155px;
	white-space: nowrap;
	text-align: center;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: bold;
	font-size: 25px;
	color: rgba(0,0,0,1);
	letter-spacing: 1px;
}

#score{
  left: 813px;
	top: 54.5px;
	position: absolute;
	overflow: visible;
	width: 296px;
	white-space: nowrap;
	text-align: left;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: lighter;
	font-size: 30px;
	color: rgba(0,0,0,1);
	letter-spacing: 1px;
}

.get-Help{
  left: 93.5px;
	top: 995.5px;
	position: relative;
	overflow: visible;
	width: 179px;
  display:block;
	white-space: nowrap;
	text-align: center;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: lighter;
	font-size: 20px;
	color: rgba(0,0,0,1);
	letter-spacing: 1px;
}

</style>