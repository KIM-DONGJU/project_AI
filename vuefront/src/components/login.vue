<template>
  <div class="login">
    <div id="login_bg">
      <div class="square">
        <div class="content">
          <img src="../assets/logo.png" id="login_logo">

          <p id="login_introduce_text">로그인 후 이용하실 수 있습니다.</p>
          <input type="text" id="login_id" placeholder="아이디" v-model="member.member_email"/>
          <input type="password" id="login_pw" placeholder="비밀번호" v-model="member.member_pw"/>
          <input type="number" name='google' class='google' v-model="member.member_google">

          <button v-on:click="memberLogin" id="service-login">로그인</button>
          <input type="checkbox" id="remember_login_info_check">
          <p id="remeber_login_info_text">로그인 정보 기억하기</p>
          <input type="checkbox" id="save_my_id_check">
          <p id="save_my_id">아이디 저장</p>
          <!-- <button v-on:click="findMyIdPw" id="find_id_my_pw">아이디 / 비밀번호 찾기</button> -->

          <!-- 구글 계정 로그인 부분 -->
          <div>
            <GoogleLogin class="google-login-button" :params="params" :onSuccess="onSuccess" :onFailure="onFailure">
              <div id="google-login-text">
                <span>구글 계정으로 로그인하기</span>
              </div>
            </GoogleLogin>
            <img class="google" alt="googleLogin" src="https://web-staging.brandi.co.kr/static/3.50.7/images/google-logo.png">
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="https://apis.google.com/js/platform.js"></script>

<script>
import GoogleLogin from 'vue-google-login'

export default {
	name: 'login',
	data(){
		return {
			params: {
				client_id: "519684726036-tj9fqobp9h04r69vke7hm9b8qgclftem.apps.googleusercontent.com", // 구글 로그인용
			},
			member: {
				member_email: '',
				member_pw: '',
				member_nickname: '',
				member_google: '',
			}
		}
	},

	components:{
		GoogleLogin,
	},

	props: {
		msg: String
	},

	created(){
		document.title = "PinkPenguinTeacher에 오신 것을 환영합니다. - 로그인 및 회원가입"
	},

	methods: {
		onSuccess(googleUser) {
			const googlelogin = googleUser.getBasicProfile();
			this.member.member_email = googlelogin.getEmail();
			this.member.member_google = 1;
			this.member.member_nickname = googlelogin.getName();
			let router = this.$router;
			this.$http.post('/api/login/checklogin', {
				member : this.member
				})
				.then(
					(res) => {  //로그인 성공
						if (res.data.success == true) {
							sessionStorage.setItem('token', JSON.stringify(res.data.user));
							this.$store.commit('getToken')
							console.log(JSON.parse(sessionStorage.getItem('token')).id);
							this.$router.push('/');
						} else {
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
		onFailure(googleUser) {
			console.log("실패");
			Google.googleLoginFailture();
		},
		memberLogin: function(event) {
			this.$http.post('/api/login/checklogin', {
				member: this.member
			})
			.then(
				(res) => {
					if (res.data.success == true) {
						sessionStorage.setItem('token', JSON.stringify(res.data.user));
						this.$store.commit('getToken')
						console.log(JSON.parse(sessionStorage.getItem('token')).id);
						this.$router.push('/');
					} else {
						alert(res.data.message);
					}
				},
				(err) => { // error 를 보여줌
					alert('error');
				}
			)
			.catch(err => {
				alert(err);
			})
		},
		memberJoin:function(){
			this.$router.push('/member_join')
		},
		findIdPw:function(){
			this.$router.push('/play')
		},
	}
}
</script>

<style scoped>
#login_logo{
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
		position: absolute;
		width: 150px;
		height: 165px;
		left: 221px;
		top: 58px;
		overflow: visible;
}

#login_bg{
  position: absolute;
	width: 1920px;
	height: 925px;
	left: 0px;
	top: 155px;
	overflow: visible;
	background-image: url("../assets/login_bg.jpg");
	background-color:rgba(0,0,0,0.5);
}

#login_bg::before{
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
  width: 593px;
  height:796px;
  left:664px;
  border-radius: 10px;
  top:65px;
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

#login_introduce_text{
  left: 129.5px;
		top: 233.9px;
		position: absolute;
		overflow: visible;
		width: 334px;
		white-space: nowrap;
		text-align: left;
		font-family: NanumBarunGothic;
		font-style: normal;
		font-weight: lighter;
		font-size: 26px;
		color: rgba(83,83,83,1);
}

#login_id{
  position: absolute;
	overflow: visible;
	width: 450px;
	height: 65px;
	left: 71px;
	top: 315.2px;
  border-radius: 10px;
  font-family: NanumBarunGothic;
  font-size:18px;
  font-weight: bold;
  text-indent:1em;
  background-color: #F1F2EB;
  border:0;
}

#login_pw{
  	position: absolute;
	overflow: visible;
	width: 450px;
	height: 65px;
	left: 71px;
	top: 404.9px;
	border-radius: 10px;
	font-family: NanumBarunGothic;
	font-size:18px;
	font-weight: bold;
	text-indent:1em;
	background-color: #F1F2EB;
	border:0;
}

#service-login{
  	left: 71px;
	top: 494.6px;
	position: absolute;
	overflow: visible;
	width: 450px;
	height: 65px;
	border:0;
	color:#fff;
	white-space: nowrap;
	text-align: center;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
 	 background-color: #F67395;
}

#remeber_login_info_text{
	left: 96.5px;
	top: 562.3px;
	position: absolute;
	overflow: visible;
	width: 128px;
	white-space: nowrap;
	text-align: left;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: bold;
	font-size: 15px;
	color: rgba(83,83,83,1);
}

#remember_login_info_check{
  	position: absolute;
	overflow: visible;
	width: 13px;
	height: 14px;
	left: 71px;
	top: 576.4px;
}

#save_my_id_check{
	position: absolute;
	overflow: visible;
	width: 13px;
	height: 14px;
	left: 427px;
	top: 576.4px;
}

#save_my_id{
  	left: 451.5px;
	top: 562.3px;
	position: absolute;
	overflow: visible;
	width: 128px;
	white-space: nowrap;
	text-align: left;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: bold;
	font-size: 15px;
	color: rgba(83,83,83,1);
}

#find_id_my_pw{
  	left: 236.5px;
	top: 630.2px;
	position: absolute;
	overflow: visible;
	width: 140px;
	white-space: nowrap;
	text-align: left;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: bold;
	font-size: 13px;
    text-align: center;
    color:#949494;
    border:0;
    background-color:#fff;
	letter-spacing: 0.1px;
}
.google-login-button{
	background-color: #ffffff;
	border-style:none;
	filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	position: absolute;
	overflow: visible;
	width: 450px;
  	border-radius: 10px;
	height: 65px;
	left: 71px;
	top: 674px;
}

#google-login-text{
	white-space: nowrap;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	color: rgba(83,83,83,1);
}

.google{
    position: absolute;
	width: 32px;
	height: 32px;
	left: 84px;
	top: 691px;
	overflow: visible;
}

</style>
