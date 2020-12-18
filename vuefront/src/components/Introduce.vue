<template>
	<div class="introduce">
		<div id="introduce_bg">

			<!-- 한국어 버전 -->
			<div v-if="this.$i18n.locale ==='ko' " v-cloak>
				<p id="noti_introduce_text_kor">{{$t('introVue.intro1')}}</p>
				<p id="noti_sub_text_first_kor">{{$t('introVue.intro2')}}</p>
				<p id="noti_sub_text_second_kor">{{$t('introVue.intro3')}}</p>
				<button v-on:click="letsPlay" id="lets-play-kor">{{$t('introVue.playgame')}}</button>
			</div>

			<!-- 영어 버전 -->
			<div v-else-if="this.$i18n.locale ==='en'" v-cloak>
				<p id="noti_introduce_text_eng">{{$t('introVue.intro1')}}</p>
				<p id="noti_sub_text_first_eng">{{$t('introVue.intro2')}}</p>
				<p id="noti_sub_text_second_eng">{{$t('introVue.intro3')}}</p>
				<button v-on:click="letsPlay" id="lets-play-eng">{{$t('introVue.playgame')}}</button>
			</div>

			<!-- 일본어 버전 -->
			<div v-else-if="this.$i18n.locale ==='jp'" v-cloak>
				<p id="noti_introduce_text_jap">{{$t('introVue.intro1')}}</p>
				<p id="noti_sub_text_first_jap">{{$t('introVue.intro2')}}</p>
				<p id="noti_sub_text_second_jap">{{$t('introVue.intro3')}}</p>
				<button v-on:click="letsPlay" id="lets-play-jap">{{$t('introVue.playgame')}}</button>
			</div>

			<!-- 기본 버전 -->
			<div v-else v-cloak>
				<p id="noti_introduce_text_eng">{{$t('introVue.intro1')}}</p>
				<p id="noti_sub_text_first_eng">{{$t('introVue.intro2')}}</p>
				<p id="noti_sub_text_second_eng">{{$t('introVue.intro3')}}</p>
				<button v-on:click="letsPlay" id="lets-play-eng">{{$t('introVue.playgame')}}</button>
			</div>
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
	width: 100%;
	height: 110%;
	left: 0px;
	top: 11%;
	background-repeat: no-repeat;
	overflow: visible;
	background-image: url("../assets/main_bg.jpg");
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

#noti_introduce_text_kor{
	filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	left:23%;
	top: 47%;
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

#noti_sub_text_first_kor{
	filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	left: 34.5%;
	top:57%;
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

#noti_sub_text_second_kor{
	filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	left: 34.5%;
	top:60%;
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

#lets-play-kor{
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
	left: 46%;
	top:65%;
}

#noti_introduce_text_eng{
	filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	left:23%;
	top: 47%;
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

#noti_sub_text_first_eng{
	filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	left: 34.5%;
	top:57%;
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

#noti_sub_text_second_eng{
	filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	left: 34.5%;
	top:60%;
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

#lets-play-eng{
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
	left: 46%;
	top:65%;
}

#noti_introduce_text_jap{
	filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	left:23%;
	top: 47%;
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

#noti_sub_text_first_jap{
	filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	left: 34.5%;
	top:57%;
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

#noti_sub_text_second_jap{
	filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	left: 34.5%;
	top:60%;
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

#lets-play-jap{
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
	left: 46%;
	top:65%;
}
</style>