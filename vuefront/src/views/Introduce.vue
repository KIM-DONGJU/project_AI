<template>
	<div class="introduce">
		<div id="introduce_bg">
			<p id="noti_introduce_text">실내에서 아이들과 함께 즐길 수 있는 트레이닝</p>
			<p id="noti_sub_text">추운 날씨, 더욱이 코로나 19 때문에 마음 편하게 나갈 수 없는 요즘<br>실내에서도 아이들과 함께 마음 편히 놀 수 있는 활동들을 제공합니다.</p>
			<button v-on:click="letsPlay" id="lets-play">게임하기</button>
    	</div>
		<div id="introduce_footer">
			<p id="developer_contact">T. 010-5197-3175</p><p id="developer_email">E. admin@pp-teacher.io</p>
			<p id="developer_name">원준수 / 김동주 / 김수양 / 유정호 / 유재혁</p>
			<a href="#"><button v-on:click="goUp" id="go-up"></button></a>
		</div>
	</div>
</template>

<script>

export default {
	methods:{
		letsPlay:function(){
			this.$router.push('/select_teacher') // 로그인 유도한 후, 로그인 한 경우 게임하기 화면으로 넘어가도록 하면 됨
		}
	}
}
</script>


<style scoped>
#introduce_bg{
	position: absolute;
	width: 100%;
	height: 110%;
	left: 0px;
	top: 100px;
	background-repeat: no-repeat;
	overflow: visible;
	background-image: url("../assets/main_bg.png");
	background-color:rgba(0,0,0,0.5);
}

#introduce_bg::before{
	content: "";
	opacity: 0.5;
	position: absolute;
	top: 0px;
	height:100%;
	left: 0px;
	right: 0px;
	bottom: 0px;
	background-color: #000;
}

#introduce_footer::before{
	content: "";
	position: absolute;
	height:10.7%;
	top:120.3%;
	left: 0px;
	right: 0px;
	bottom: 0px;
	background-color: #222222;
}

#noti_introduce_text{
	filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	left: 459.5px;
	top: 394.5px;
	position: absolute;
	overflow: visible;
	width: 1002px;
	white-space: nowrap;
	text-align: left;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: bold;
	font-size: 54px;
	color: rgba(255,255,255,1);
	letter-spacing: 0.1px;
}

#noti_sub_text{
	filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	left: 670.5px;
	top: 526.5px;
	position: absolute;
	overflow: visible;
	width: 581px;
	white-space: nowrap;
	line-height: 30px;
	margin-top: -4.5px;
	text-align: center;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: lighter;
	font-size: 21px;
	color: rgba(255,255,255,1);
	letter-spacing: 0.1px;
}

#lets-play{
	background-color: rgba(246,115,149,1);
	color:#ffffff;
	font-style: bold;
	position: absolute;
	overflow: visible;
	font-size: 15px;
	width: 150px;
	font-family: NanumBarunGothic;
	border:0;
	filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	border-radius: 10px;
	height: 45px;
	left: 885px;
	top: 595px;
}

#developer_contact{
  	left: 1%;
	top: 123%;
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
	top: 123%;
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
	top: 127%;
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

#go-up{
	background-color:#444444;
	background-image: url("../assets/btn_arrow.png");
	color:#ffffff;
	font-style: bold;
	background-repeat: no-repeat;
	position: absolute;
	overflow: visible;
	background-position: center;
	width: 80px;
	background-size: 20%;
	font-family: NanumBarunGothic;
	border:0;
	filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	height: 80px;
	left: 95%;
	top: 121.6%;
}

</style>