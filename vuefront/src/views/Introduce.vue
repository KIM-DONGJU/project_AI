<template>
	<div class="introduce">
		<div id="introduce_bg">
			<p id="noti_introduce_text">실내에서 아이들과 함께 즐길 수 있는 트레이닝</p>
			<p id="noti_sub_text">추운 날씨, 더욱이 코로나 19 때문에 마음 편하게 나갈 수 없는 요즘<br>실내에서도 아이들과 함께 마음 편히 놀 수 있는 활동들을 제공합니다.</p>
			<button v-on:click="letsPlay" id="lets-play">게임하기</button>
    	</div>
	</div>
</template>

<script>

export default {
	methods:{
		letsPlay:function(){
			this.$router.push('/play') // 로그인 유도한 후, 로그인 한 경우 게임하기 화면으로 넘어가도록 하면 됨
		},
	}
}
</script>

<style scoped>
#introduce_bg{
	position: absolute;
	width: 1920px;
	height: 1087px;
	left: 0px;
	top: 155px;
	overflow: visible;
	background-image: url("../assets/main_bg.png");
	background-color:rgba(0,0,0,0.5);
}

#introduce_bg::before{
	content: "";
	opacity: 0.5;
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	background-color: #000;
}

#noti_introduce_text{
	filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	left: 459.5px;
	top: 449.5px;
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
	top: 581.5px;
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
	top: 650px;
}
</style>