<template>
  <div class="play">
    <div id="play_title">
    	<p id="play_title_msg">오른쪽 <b>선생님의 동작</b>에 맞춰서 함께 따라해보세요!</p>
		
		<!-- 플레이 영역 -->
		<div id="play_area">
			<button v-on:click="exit_game" id="exit_game">게임종료</button>

			<!-- 유저 영역 -->
			<div id="user_movie">
				<Pose></Pose>
			</div>

			<!-- 선생님 영역 -->
			<div id="teacher_movie">
				<Vrm></Vrm>
			</div>
		</div>
    </div>

	<div id="introduce_footer">
		<p id="developer_contact">T. 010-5197-3175</p><p id="developer_email">E. admin@pp-teacher.io</p>
		<p id="developer_name">원준수 / 김동주 / 김수양 / 유정호 / 유재혁</p>
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
  	methods: {
		exit_game:function(){

			if(confirm("'확인' 버튼을 클릭하면 게임을 중단하고 메인 화면으로 이동합니다.") == true){
				this.$router.push('/')
			}

			else{
				return;
			}
		}
	},
}
</script>

<style scoped>
.play{
	overflow-x: hidden;
}

#play_title{
	position: absolute;
	overflow: visible;
	width: 100%;
	height: 75px;
	left: 0px;
	top: 100px;
  	background-color:#F9688E;
}

#play_title_msg{
	position: absolute;
	width: 490px;
	white-space: nowrap;
    left:710px;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: lighter;
	font-size: 25px;
	color: rgba(255,255,255,1);
}

#play_area{
	background-color:#F1F2EB;
	width:100%;
	position:absolute;
	overflow: visible;
	top:75px;
	height:794px;
}

#user_movie{
  position: absolute;
	overflow: visible;
	width: 550px;
	height: 590px;
	left: 260px;
	top: 50px;
  	background-color:#ffffff;
  	filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
}

#teacher_movie{
	position: absolute;
	overflow: visible;
	width: 550px;
	height: 590px;
	left: 1111px;
	top: 50px;
  	background-color:#ffffff;
  	filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
}

#user_name{
    left: 198.5px;
		top: 525px;
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
		top: 525px;
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


#introduce_footer::before{
	content: "";
	position: absolute;
	height:10.5%;
	top:89.5%;
	left: 0px;
	right: 0px;
	bottom: 0px;
	background-color: #222222;
}

#developer_contact{
  	left: 1%;
	top: 92%;
	position: absolute;
	overflow: visible;
	width: 343px;
	white-space: nowrap;
	line-height: 24px;
	margin-top: -4.5px;
	text-align: left;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: bold;
	font-size: 15px;
	color: rgba(255,255,255,1);
    white-space: pre;
}

#developer_email{
  	left: 11%;
	top: 92%;
	position: absolute;
	overflow: visible;
	width: 343px;
	white-space: nowrap;
	line-height: 24px;
	margin-top: -4.5px;
	text-align: left;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: bold;
	font-size: 15px;
	color: rgba(255,255,255,1);
    white-space: pre;
}

#developer_name{
  	left: 1%;
	top: 96%;
	position: absolute;
    padding-bottom: 1%;
	overflow: visible;
	width: 343px;
	white-space: nowrap;
	line-height: 24px;
	margin-top: -4.5px;
	text-align: left;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: bold;
	font-size: 15px;
	color:#B0B0B0;
}

#exit_game{
	position: absolute;
	border:0;
	overflow: visible;
	top:25px;
	font-style: bold;
	left:885px;
	filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	font-family: NanumBarunGothic;
	background-color:#F9688E;
	color:#fff;
	border-radius: 10px;
	width:150px;
	height:45px;
}
</style>