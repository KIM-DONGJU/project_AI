<template>
    <div class="login">
        <!-- 상단 로고 부분 -->
        <img src="../assets/logo.png" id="logo">

        <!-- 서비스 로그인 안내 텍스트 부분 -->
		<div id="login_text">
			<span>서비스 로그인</span>
		</div>

        <!-- 아이디, 비밀번호 입력 부분 -->
        <form method="post" id="userInfo">
            <input type="text" name='userId' class='id' v-model="member.member_email" placeholder="아이디">
            <input type="password" name='userPw' class='pw' v-model="member.member_pw" placeholder="비밀번호">
			<input type="number" name='google' class='google' v-model="member.member_google">
        </form>

        <!-- 구글 계정 로그인 부분 -->
        <div>
            <GoogleLogin class="google-login-button" :params="params" :onSuccess="onSuccess" :onFailure="onFailure">
                <div id="google-login-text">
                    <span>구글 계정으로 로그인하기</span>
                </div>
            </GoogleLogin>
            <img class="google" alt="googleLogin" src="https://web-staging.brandi.co.kr/static/3.50.7/images/google-logo.png">
        </div>

        <!-- 로그인 정보 기억하기 체크박스 부분 -->
        <input type="checkbox" id="login-remember-checkbox">

        <!-- 로그인 정보 기억하기 글자 부분 -->
        <div id="login-remember-text">
			<span>로그인 정보 기억하기</span>
		</div>

		<!-- 로그인 버튼 -->
        <button v-on:click="memberLogin" id="member-login">→</button>

        <!-- 회원가입 버튼 -->
        <button v-on:click="memberJoin" id="member-join">아이디가 없으세요?</button>

        <!-- 아이디, 비밀번호 찾기 버튼 -->
        <button v-on:click="findIdPw" id="find-id-pw">아이디 / 비밀번호 찾기</button>

        <!-- 버전 텍스트 부분 -->
		<div id="version">
			<span>v0.1</span>
		</div>

        <!-- 옆 배경 -->
        <img src="../assets/background.png" class="background">
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
			this.$http.post('/api/login/checklogin', {
				member : this.member
				})
				.then(
					(res) => {  //로그인 성공
						if (res.data.success == true) {
							alert(res.data.message);
							console.log('test1')
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
						alert(res.data.message);
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

#logo{
    position: absolute;
	width: 100px;
	height: 109.659px;
	left: 40px;
	top: 50px;
	overflow: visible;
}

#login_text{
    left: 40px;
	top: 210px;
	position: absolute;
	overflow: visible;
	width: 168px;
	white-space: nowrap;
	text-align: left;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: normal;
	font-size: 30px;
	color: rgba(0,0,0,1);
}

#login-remember-checkbox{
    position: absolute;
	overflow: visible;
	width: 20px;
	height: 20px;
	left: 40px;
	top: 577px;
}

#login-remember-text{
    left: 80px;
	top: 580px;
	position: absolute;
	overflow: visible;
	width: 154px;
	white-space: nowrap;
	text-align: left;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	color: rgba(83,83,83,1);
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
	left: 40px;
	top: 295px;
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
	left: 40px;
	top: 390px;
}

.google {
	display: none;
}

#member-join{
    left: 40px;
	top: 970px;
	position: absolute;
	overflow: visible;
	width: 162px;
    height: 30px;
	white-space: nowrap;
	text-align: left;
	font-family: NanumBarunGothic;
    background: #FFFFFF;
    border:0;
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	color: rgba(83,83,83,1);
}

#member-login{
    position: absolute;
	overflow: visible;
	width: 150px;
	border-radius: 10px;
	border:0;
	font-size: 20px;
	font-weight:bold;
	height: 150px;
	left: 245px;
	top: 710px;
	background: #F1F2EB;
}


#find-id-pw{
    left: 40px;
	top: 1015px;
	position: absolute;
	overflow: visible;
	width: 168px;
	white-space: nowrap;
	text-align: left;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: bold;
    background: #FFFFFF;
    border:0;
	font-size: 18px;
	color: rgba(83,83,83,1);
}

.google-login-button{
    background-color: #ffffff;
    border-style:none;
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	position: absolute;
	overflow: visible;
	width: 550px;
    border-radius: 10px;
	height: 65px;
	left: 40px;
	top: 485px;
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
	left: 55px;
	top: 502px;
	overflow: visible;
}

#version{
    left: 570px;
	top: 1015px;
	position: absolute;
	overflow: visible;
	width: 37px;
	white-space: nowrap;
	text-align: left;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	color: rgba(83,83,83,1);
}

.background{
    position: absolute;
	width: 1280px;
	height: 1080px;
	left: 640px;
	top: 0px;
	overflow: visible;
}

</style>