<template>
  <div class="Play">
    <div id="play_title">
      <p id="play_title_msg">오른쪽 <b>선생님의 동작</b>에 맞춰서 함께 따라해보세요!</p>
    </div>
    
    <div id="play_area">

      <!-- 왼쪽 유저 영상 -->
      <div id="user_movie">
        <p id="user_name">원준수 어린이</p>
      </div>
      
      <!-- 점수 현황-->
      <p id="my_score">현재 점수 : 30 / 100</p>

      <!-- 오른쪽 모델 출력 영상 -->
      <div id="teacher_movie">
        <p id="teacher_name">바비 선생님</p>
      </div>
    </div>

    
  </div>
</template>

<script>

export default {
  name: 'Play',
}
</script>

<style scoped>
#play_title{
  position: absolute;
	overflow: visible;
	width: 1920px;
	height: 100px;
	left: 0px;
	top: 155px;
  background-color:#F9688E;
}

#play_title_msg{
		position: relative;
    top:7px;
		width: 490px;
		white-space: nowrap;
    left:710px;
		font-family: NanumBarunGothic;
		font-style: normal;
		font-weight: lighter;
		font-size: 28px;
		color: rgba(255,255,255,1);
}

#play_area{
  position: absolute;
	overflow: visible;
	width: 1920px;
	height: 725px;
	left: 0px;
	top: 255px;
  background-color:#F1F2EB;
}

#play_area{
  position: absolute;
	overflow: visible;
	width: 1920px;
	height: 725px;
	left: 0px;
	top: 255px;
  background-color:#F1F2EB;
}

#user_movie{
  position: absolute;
	overflow: visible;
	width: 550px;
	height: 630px;
	left: 116px;
	top: 48px;
  background-color:#ffffff;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
}

#teacher_movie{
  position: absolute;
	overflow: visible;
	width: 550px;
	height: 630px;
	left: 1255px;
	top: 48px;
  background-color:#ffffff;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
}

#user_name{
    left: 198.5px;
		top: 555.5px;
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

#teacher_name{
  left:210.5px;
		top: 555.5px;
		position: absolute;
		overflow: visible;
		width: 155px;
		white-space: nowrap;
		font-family: NanumBarunGothic;
		font-style: normal;
		font-weight: bold;
		font-size: 25px;
		color: rgba(0,0,0,1);
		letter-spacing: 1px;
}

#my_score{
    left:843px;
		top: 330.5px;
		position: absolute;
		overflow: visible;
		width: 155px;
		white-space: nowrap;
		font-family: NanumBarunGothic;
		font-style: normal;
		font-weight: lighter;
		font-size: 25px;
		color: rgba(0,0,0,1);
		letter-spacing: 1px;
}

</style>