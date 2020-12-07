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
                    <input type="text" id="member_join_pw" placeholder="비밀번호"/>

                    <!-- 비밀번호 확인 입력하는 부분 -->
                    <p id="pw_text_repeat">비밀번호 확인</p>
                    <input type="text" id="member_join_pw_repeat" placeholder="비밀번호 확인"/>

                    <!-- 닉네임을 입력하는 부분 -->
                    <p id="nickname_text">닉네임</p>
                    <input type="text" id="member_join_nickname_text" placeholder="닉네임"/>

                    <!-- 가입하기 버튼 -->
                    <button v-on:click="memberJoinOK" id="member_join_ok">가입하기</button>
                </div>
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
#member_join_bg{
  position: absolute;
	width: 1920px;
	height: 925px;
	left: 0px;
	top: 145px;
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
</style>