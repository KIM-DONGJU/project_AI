<template>
  <div class="member_join">
    <!-- <img src="../assets/logo.png" id="logo"> -->
    
    <!-- 회원가입 양식 입력 부분 -->
    <form method="post" id="memberJoinInfo">
          
      <!-- 아이디 텍스트 -->
      <div class="id_text">
		    <span>아이디</span>
	    </div>

      <!-- 아이디 입력하는 부분 -->
      <input type="text" name='userId' class='id' v-model="member.member_email">

      <!-- 비밀번호 텍스트 -->
      <div class="pw_text">
		    <span>비밀번호</span>
	    </div>

      <!-- 비밀번호 입력하는 부분 -->
      <input type="password" name='userPw' class='pw' v-model="member.member_pw">

      <!-- 비밀번호 확인 텍스트 -->
      <div class="pw_check_text">
		    <span>비밀번호 확인</span>
	    </div>

      <!-- 비밀번호 확인 입력(비밀번호 재입력)하는 부분 -->
      <input type="password" name='userPwCheck' class='pw_check' v-model="member.member_pw_re">

      <!-- 닉네임 텍스트 -->
      <div class="nickname_text">
		    <span>닉네임</span>
	    </div>

      <!-- 닉네임 입력하는 부분 -->
      <input type="text" name='userNickName' class='nickname' v-model="member.member_nickname">

      <input type="number" name='google' class='google' v-model="member.member_google">
    </form>

    <!--가입하기 동작 부분-->
    <button v-on:click="memberJoin" id="member-join">가입하기</button>
  </div>
</template>

<script>
export default {
  name: 'join',
  data(){
    return {
      member: {
        member_email: '',
        member_pw: '',
        mmber_pw_re: '',
        member_nickname: '',
        member_google: '',
      }
    }
  },
  props: {
    msg: String
  },
  created(){
    document.title = "PinkPenguinTeacher - 회원가입"
  },
  methods: {
    memberJoin:function(event) {
         this.$http.post('/api/join/signUp', {
            member: this.member
         })
         .then(
            (res) => {
               if (res.data.success == true) {
            alert(res.data.message);
            this.$router.push('/')
               } else {
                  alert(res.data.message);
               }
            },
        (err) => { // error 를 보여줌
               alert('Login failed! please check your id or password');
            }
         )
         .catch(err => {
            alert(err);
         })
      },
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.google {
	display: none;
}

#logo{
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
		position: relative;
		width: 100px;
		height: 109.659px;
    left:910px;
    display:block;
		overflow: visible;
}

.id_text{
  left: 685px;
	top: 233px;
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

.id{
  position: absolute;
	overflow: visible;
	width: 550px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  font-family: NanumBarunGothic;
  color:rgba(83,83,83,1);
  text-indent: 1em;
  border:0;
  background-color: #F1F2EB;
	height: 65px;
	left: 685px;
	top: 266px;
}

.pw_text{
  left: 685px;
	top: 361px;
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

.pw{
  position: absolute;
	overflow: visible;
	width: 550px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  font-family: NanumBarunGothic;
  color:rgba(83,83,83,1);
  text-indent: 1em;
  border:0;
  background-color: #F1F2EB;
	height: 65px;
	left: 685px;
	top: 394px;
}

.pw_check_text{
  left: 685px;
	top: 490px;
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

.pw_check{
  position: absolute;
	overflow: visible;
	width: 550px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  font-family: NanumBarunGothic;
  color:rgba(83,83,83,1);
  text-indent: 1em;
  border:0;
  background-color: #F1F2EB;
	height: 65px;
	left: 685px;
	top: 523px;
}

.nickname_text{
  left: 685px;
	top: 618px;
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

.nickname{
  position: absolute;
	overflow: visible;
	width: 550px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  font-family: NanumBarunGothic;
  color:rgba(83,83,83,1);
  text-indent: 1em;
  border:0;
  background-color: #F1F2EB;
	height: 65px;
	left: 685px;
	top: 651px;
}

#member-join{
  position: absolute;
	overflow: visible;
  background-color:#F67395;
  border:0;
	width: 550px;
	height: 65px;
  left: 685px;
  color:#ffffff;
	top: 746px;
  font-size: 20px;
  font-weight: bold;
}

</style>