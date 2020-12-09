
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" id="nav_logo"><img src="@/assets/nav_logo.png"/></router-link>
      <router-link to="/play" id="menu_play">게임하기</router-link><div id="first_divide">|</div>
      <router-link to="/community" id="menu_community">커뮤니티</router-link><div id="second_divide">|</div>
      <router-link to="/login" id="menu_login" v-if="!$store.state.token">로그인</router-link><div id="third_divide">|</div>
	  <div id="menu_login" v-if="$store.state.token" @click="signOut">로그아웃</div><div id="third_divide"></div>
      <router-link to="/member_join" id="menu_member_join" v-if="!$store.state.token">회원가입</router-link>
    </div>
    <router-view/>
	<div id="footer">
      <Footer/>
    </div>
  </div>
</template>

<!--
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.g-signin2 {
  position: absolute;
  left:50%;
  transform :translateX(-50%)
}
</style>
-->

<script src="https://apis.google.com/js/platform.js"></script>

<script>
import GoogleLogin from 'vue-google-login'
import Login from '@/components/login.vue'
import MemberJoin from '@/components/member_join.vue'
import store from './store'

// export default {
//   mounted () {
//       // 로그인에 사용할 버튼 id를 입력해주세요
//     gapi.signin2.render("g-signin2", {
//       onsuccess: this.onSignIn, // () 붙이면 안됩니다.
//     });
//   },
//   methods : {
//     onSignIn (googleUser) {
//       // 로그인한 유저 정보를 보여줍니다.
//       console.log(googleUser)
//       console.log("123123")
//     }
//   }
// }

export default {
  name: 'App',
  data() {
    return {
      // client_id is the only required property but you can add several more params, full list down bellow on the Auth api section
      params: {
          client_id: "519684726036-tj9fqobp9h04r69vke7hm9b8qgclftem.apps.googleusercontent.com"
      },
      userInfo: [],
	  // only needed if you want to render the button with the google ui
	  isLoading: true,
    }
  },
//   created() {
// 	  const response = this.$http.get('/api/login/login', {
// 		  headers : {
// 			  Authorization: 'dj test ' + localStorage.getItem('token')
// 		  }
// 	  });

// 	  console.log(response);
//   },
	mounted () {
		this.$store.commit('getToken');
  	},

	components: {
		GoogleLogin,
		Login,
		MemberJoin
	},
	methods: {
		onSuccess(googleUser) {
		console.log(googleUser);

		// This only gets the user information: id, name, imageUrl and email
		console.log(googleUser.getBasicProfile());
		},
		onFailure(googleUser) {
		console.log("실패");

		// This only gets the user information: id, name, imageUrl and email
		},
		signOut () {
      // localStorage.removeItem('token')
			this.$store.commit('delToken');
	    }
	},
}


</script>

<style>
#nav_logo{
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	position: absolute;
	width: 66px;
	height: 72px;
	left: 30px;
	top: 63px;
	overflow: visible;
}

#first_divide{
	left: 1445.5px;
	top: 65.5px;
	position: absolute;
	overflow: visible;
	width: 12px;
	white-space: nowrap;
	text-align: left;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: lighter;
	font-size: 24px;
	color: rgba(0,0,0,1);
	letter-spacing: 0.1px;
}

#second_divide{
	left: 1594.5px;
	top: 65.5px;
	position: absolute;
	overflow: visible;
	width: 12px;
	white-space: nowrap;
	text-align: left;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: lighter;
	font-size: 24px;
	color: rgba(0,0,0,1);
	letter-spacing: 0.1px;
}

#third_divide{
	left: 1722.5px;
	top: 65.5px;
	position: absolute;
	overflow: visible;
	width: 12px;
	white-space: nowrap;
	text-align: left;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: lighter;
	font-size: 24px;
	color: rgba(0,0,0,1);
	letter-spacing: 0.1px;
}

#menu_play{
  left: 1333.5px;
	top: 65.5px;
	position: absolute;
	overflow: visible;
	width: 87px;
	white-space: nowrap;
	text-align: left;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: lighter;
	font-size: 24px;
	color: rgba(0,0,0,1);
	letter-spacing: 0.1px;
}

#menu_community{
  left: 1482.5px;
	top: 65.5px;
	position: absolute;
	overflow: visible;
	width: 87px;
	white-space: nowrap;
	text-align: left;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: lighter;
	font-size: 24px;
	color: rgba(0,0,0,1);
	letter-spacing: 0.1px;
}

#menu_login{
  left: 1631.5px;
	top: 65.5px;
	position: absolute;
	overflow: visible;
	width: 87px;
	white-space: nowrap;
	text-align: left;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: lighter;
	font-size: 24px;
	color: rgba(0,0,0,1);
	letter-spacing: 0.1px;
}

#menu_member_join{
  left: 1759.5px;
	top: 65.5px;
	position: absolute;
	overflow: visible;
	width: 87px;
	white-space: nowrap;
	text-align: left;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: lighter;
	font-size: 24px;
	color: rgba(0,0,0,1);
	letter-spacing: 0.1px;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 100px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#menu_login { 
  font-weight: bold;
  color: #2c3e50;

}

/* #nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
