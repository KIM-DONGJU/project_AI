<template>
  <div class="member_join">
      <div id="member_join_bg">
        <div class="square">
          <div class="content">
            <img src="../assets/logo.png" id="member_join_logo">

            <!-- 회원가입 양식 입력 부분 -->
            <form method="post" id="memberJoinInfo">

              <!-- 아이디 입력 부분 -->
              <p id="id_text">{{$t('signUpVue.id')}}</p>
              <input type="text" name='userId' class='id' v-model="member.member_email" :placeholder="$t('signUpVue.id')">

              <!-- 비밀번호 입력 부분 -->
              <p id="pw_text">{{$t('signUpVue.pw')}}</p>
              <input type="password" name='userPw' class='pw' v-model="member.member_pw" :placeholder="$t('signUpVue.pw')">

              <!-- 비밀번호 확인 입력하는 부분 -->
              <p id="pw_text_repeat">{{$t('signUpVue.pwCheck')}}</p>
              <input type="password" name='userPwCheck' class='pw_check' v-model="member.member_pw_re" :placeholder="$t('signUpVue.pwCheck')">

              <!-- 닉네임 입력하는 부분 -->
              <p id="nickname_text">{{$t('signUpVue.nickname')}}</p>
              <input type="text" name='userNickName' class='nickname' v-model="member.member_nickname" :placeholder="$t('signUpVue.nickname')">

              <!--?-->
              <input type="number" name='google' class='google' v-model="member.member_google">
            </form>

            <!--가입하기 동작 부분-->
            <button v-on:click="memberJoin" id="member-join">{{$t('signUpVue.join')}}</button>
          </div>
        </div>
      </div>
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
.member_join{
    overflow-x: hidden;
}
#member_join_bg{
  position: absolute;
   width: 100%;
   height: 925px;
   left: 0px;
   top: 100px;
   overflow: visible;
   background-image: url("../assets/member_join_bg.jpg");
     background-repeat: no-repeat;
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
  left:34.5%;
  border-radius: 10px;
  top:5%;
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
  left:42%;
  top:4%;
   overflow: visible;
}
#id_text{
  left: 5.5%;
   top: 22%;
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
  fill: rgba(241,242,235,1);
   stroke: rgba(241,242,235,1);
   width: 550px;
  position: absolute;
   height: 65px;
   left: 5.5%;
   top:27%;
  font-size:18px;
  font-weight: bold;
  text-indent:1em;
  background-color: #F1F2EB;
  border:0;
  border-radius: 10px;
  font-family: NanumBarunGothic;
}
#pw_text{
  left: 5.5%;
   top: 38%;
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
  fill: rgba(241,242,235,1);
   stroke: rgba(241,242,235,1);
   width: 550px;
  position: absolute;
   height: 65px;
   left: 5.5%;
   top:43%;
  font-size:18px;
  font-weight: bold;
  text-indent:1em;
  background-color: #F1F2EB;
  border:0;
  border-radius: 10px;
  font-family: NanumBarunGothic;
}
#pw_text_repeat{
  left: 5.5%;
   top: 54%;
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
  fill: rgba(241,242,235,1);
   stroke: rgba(241,242,235,1);
   width: 550px;
  position: absolute;
   height: 65px;
   left: 5.5%;
   top:59%;
  font-size:18px;
  font-weight: bold;
  text-indent:1em;
  background-color: #F1F2EB;
  border:0;
  border-radius: 10px;
  font-family: NanumBarunGothic;
}
#nickname_text{
  left: 5.5%;
   top: 70.5%;
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
  fill: rgba(241,242,235,1);
   stroke: rgba(241,242,235,1);
   width: 550px;
  position: absolute;
   height: 65px;
   left: 5.5%;
   top: 75.5%;
  font-size:18px;
  font-weight: bold;
  text-indent:1em;
  background-color: #F1F2EB;
  border:0;
  border-radius: 10px;
  font-family: NanumBarunGothic;
}
#member-join{
  position: absolute;
   overflow: visible;
   width: 550px;
   height: 65px;
   left: 5.5%;
   top: 87%;
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
</style>