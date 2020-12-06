
<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    -->
    <router-view/>
    <!--
    <GoogleLogin class="google-login-button" :params="params" :onSuccess="onSuccess" :onFailure="onFailure">
      <img alt="googleLogin" src="https://web-staging.brandi.co.kr/static/3.50.7/images/google-logo.png">
      <span>Google</span>
      <span>계정으로 계속하기</span>
    </GoogleLogin> -->
    <!-- <GoogleLogin :params="params" b:logoutButton=true>Logout</GoogleLogin> -->
    <!-- <div id="g-signin2" class="g-signin2" data-onsuccess="onSignIn"></div> -->
    <!-- <Login /> -->
    <!-- <MemberJoin /> -->
    <!-- <ul>
      <li v-for="user in Userinfo" :key="user">{{user.member_email}}
      </li>
    </ul> -->
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
      Userinfo: [],
      // only needed if you want to render the button with the google ui
    }
  },
  created() {
    this.fetchUserinfo();
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
    fetchUserinfo() {
      this.$http.get('http://localhost:3000/show-all-data/apis').then(ret => {
        if (ret.status != 200) {
          return []
        }
        this.Userinfo = ret.data;
        console.log(typeof(ret.data));
      })
    }
  },
}


</script>


<!--
<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>
import login from '@/components/login.vue'

export default {
  name: 'App',
  components: {
    login
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->

