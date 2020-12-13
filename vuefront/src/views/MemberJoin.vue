<template>
    <div class="member_join">
        <div id="member_join_bg">
            <div class="square">
                <div class="content">
                    <img src="../assets/logo.png" id="member_join_logo">

                    <!-- 아이디 입력하는 부분 -->
                    <p id="id_text">아이디</p>
                    <input type="text" id="member_join_id" placeholder="아이디"/>

                    <!-- 비밀번호 입력하는 부분 -->
                    <p id="pw_text">비밀번호</p>
                    <input type="password" id="member_join_pw" placeholder="비밀번호"/>

                    <!-- 비밀번호 확인 입력하는 부분 -->
                    <p id="pw_text_repeat">비밀번호 확인</p>
                    <input type="password" id="member_join_pw_repeat" placeholder="비밀번호 확인"/>

                    <!-- 닉네임을 입력하는 부분 -->
                    <p id="nickname_text">닉네임</p>
                    <input type="text" id="member_join_nickname_text" placeholder="닉네임"/>

                    <!-- 가입하기 버튼 -->
                    <button v-on:click="memberJoinOK" id="member_join_ok">가입하기</button>
                </div>
            </div>

            <!--Footer 영역 -->
            <div id="introduce_footer">
		        <p id="developer_contact">T. 010-5197-3175</p><p id="developer_email">E. admin@pp-teacher.io</p>
		        <p id="developer_name">원준수 / 김동주 / 김수양 / 유정호 / 유재혁</p>
		        <a href="#"><button v-on:click="goUp" id="go-up"></button></a>
	        </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        memberJoinOK:function(){
            alert('김동주님, 회원가입을 환영합니다!')
            this.$router.push('/')
        }
    },    
}

</script>
<style scoped>
.member_join{
    overflow-x: hidden;
}

#member_join_bg{
  position: absolute;
	width: 1920px;
	height: 925px;
	left: 0px;
	top: 100px;
	overflow: visible;
	background-image: url("../assets/member_join_bg.png");
	background-color:rgba(0,0,0,0.5);
}

#member_join_bg::before{
	content: "";
	opacity: 0.5;
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	background-color: #000;
}

.square {
  position: relative;
  width: 634px;
  height:827px;
  left:643px;
  border-radius: 10px;
  top:49px;
  background-color: #fff;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
}

.square:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

.content {
  position: absolute;
  width: 100%;
  height: 100%;
}

#member_join_logo{
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	position: absolute;
	width: 100px;
	height: 109.66px;
	left: 267px;
	top: 43px;
	overflow: visible;
}

#id_text{
    left: 37px;
	top: 187px;
	position: absolute;
	overflow: visible;
	width: 55px;
	white-space: nowrap;
	text-align: left;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	color: rgba(0,0,0,1);
}

#member_join_id{
    fill: rgba(241,242,235,1);
	stroke: rgba(241,242,235,1);
	width: 550px;
    position: absolute;
	height: 65px;
	left: 37px;
	top: 240px;
    font-size:18px;
  font-weight: bold;
  text-indent:1em;
  background-color: #F1F2EB;
  border:0;
  border-radius: 10px;
  font-family: NanumBarunGothic;
}

#pw_text{
    left: 37px;
	top: 315px;
	position: absolute;
	overflow: visible;
	width: 55px;
	white-space: nowrap;
	text-align: left;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	color: rgba(0,0,0,1);
}

#member_join_pw{
    fill: rgba(241,242,235,1);
	stroke: rgba(241,242,235,1);
	width: 550px;
    position: absolute;
	height: 65px;
	left: 37px;
	top: 368px;
    font-size:18px;
  font-weight: bold;
  text-indent:1em;
  background-color: #F1F2EB;
  border:0;
  border-radius: 10px;
  font-family: NanumBarunGothic;
}

#pw_text_repeat{
    left: 37px;
	top: 444px;
	position: absolute;
	overflow: visible;
	width: 55px;
	white-space: nowrap;
	text-align: left;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	color: rgba(0,0,0,1);
}

#member_join_pw_repeat{
    fill: rgba(241,242,235,1);
	stroke: rgba(241,242,235,1);
	width: 550px;
    position: absolute;
	height: 65px;
	left: 37px;
	top: 497px;
    font-size:18px;
  font-weight: bold;
  text-indent:1em;
  background-color: #F1F2EB;
  border:0;
  border-radius: 10px;
  font-family: NanumBarunGothic;
}

#nickname_text{
    left: 37px;
	top: 572px;
	position: absolute;
	overflow: visible;
	width: 55px;
	white-space: nowrap;
	text-align: left;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	color: rgba(0,0,0,1);
}

#member_join_nickname_text{
    fill: rgba(241,242,235,1);
	stroke: rgba(241,242,235,1);
	width: 550px;
    position: absolute;
	height: 65px;
	left: 37px;
	top: 625px;
    font-size:18px;
  font-weight: bold;
  text-indent:1em;
  background-color: #F1F2EB;
  border:0;
  border-radius: 10px;
  font-family: NanumBarunGothic;
}

#member_join_ok{
    position: absolute;
	overflow: visible;
	width: 550px;
	height: 65px;
	left: 37px;
	top: 720px;
    background-color:#F67395;
    font-weight: bold;
    color:#fff;
	stroke: rgba(249,104,142,1);
    font-family: NanumBarunGothic;
    font-size:18px;
    border:0;
}

#introduce_footer::before{
	content: "";
	position: absolute;
	height:10.5%;
	top:100%;
	left: 0px;
	right: 0px;
	bottom: 0px;
	background-color: #222222;
}

#developer_contact{
  	left: 1%;
	top: 102.5%;
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
	top: 102.5%;
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
	top: 106.5%;
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
	left: 94.5%;
	top: 101%;
}
</style>