
<template>
   <div id="app">
      <div id="nav">
         <!-- 언어 선택 드롭다운 메뉴 -->
         <div class="dropdown">
            <img src="./assets/language.png" class="dropdown">
            <div class="dropdown-content">
                <button @click="$i18n.locale='ko'" id="kor" v-on:click="select_kor=true;select_eng=false;select_jap=false;">한국어</button>
               <button @click="$i18n.locale='en'" id="eng" v-on:click="select_kor=false;select_eng=true;select_jap=false;">English</button>
               <button @click="$i18n.locale='jp'" id="jap" v-on:click="select_kor=false;select_eng=false;select_jap=true;">日本語</button>
              </div>
         </div>

         <!-- 한국어 버전 -->
          <div v-if="select_kor" v-clock>
            <router-link to="/" class="nav_logo"><img src="@/assets/nav_logo.png"/></router-link>
            <div class="kor_intro_div">
               <router-link to="/test" id=menu_intro_kor class="nav"><i class="fas fa-question-circle">{{$t('appVue.intro')}}</i></router-link><div id="zero_divide_kor">|</div>
               <router-link to="/play" id="menu_play_kor" class="nav"><i class="fa fa-gamepad">{{$t('appVue.game')}}</i></router-link><div id="first_divide_kor">|</div>
               <router-link to="/board" id="menu_community_kor" class="nav"><i class="fas fa-comment-dots">{{$t('appVue.community')}}</i></router-link><div id="second_divide_kor">|</div>
               <router-link to="/login" id="menu_login_kor" class="nav" v-if="!$store.state.token"><i class="fas fa-sign-in-alt">{{$t('appVue.login')}}</i><div id="third_divide_kor">|</div></router-link>
               <a id="menu_login_kor" class = 'nav' v-if="$store.state.token" @click="signOut"><i class="fas fa-sign-out-alt">{{$t('appVue.logout')}}</i></a>
               <router-link to="/member_join" id="menu_member_join_kor" class="nav" v-if="!$store.state.token"><i class="fas fa-sign-in-alt">{{$t('appVue.signup')}}</i></router-link>
            </div>
         </div>

         <!-- 영어 버전 -->
          <div v-if="select_eng" v-clock>
            <router-link to="/" class="nav_logo"><img src="@/assets/nav_logo.png"/></router-link>
            <div class="eng_intro_div">
               <router-link to="/test" id=menu_intro_eng class="nav"><i class="fas fa-question-circle">{{$t('appVue.intro')}}</i></router-link><div id="zero_divide_eng">|</div>
               <router-link to="/play" id="menu_play_eng" class="nav"><i class="fa fa-gamepad">{{$t('appVue.game')}}</i></router-link><div id="first_divide_eng">|</div>
               <router-link to="/board" id="menu_community_eng" class="nav"><i class="fas fa-comment-dots">{{$t('appVue.community')}}</i></router-link><div id="second_divide_eng">|</div>
               <router-link to="/login" id="menu_login_eng" class="nav" v-if="!$store.state.token"><i class="fas fa-sign-in-alt">{{$t('appVue.login')}}</i><div id="third_divide_eng">|</div></router-link>
               <a id="menu_login_eng" class = 'nav' v-if="$store.state.token" @click="signOut"><i class="fas fa-sign-out-alt">{{$t('appVue.logout')}}</i></a>
               <router-link to="/member_join" id="menu_member_join_eng" class="nav" v-if="!$store.state.token"><i class="fas fa-sign-in-alt">{{$t('appVue.signup')}}</i></router-link>
            </div>
         </div>

         <!-- 일본어 버전 -->
          <div v-else-if="select_jap" v-clock>
            <router-link to="/" class="nav_logo"><img src="@/assets/nav_logo.png"/></router-link>
            <div class="jap_intro_div">
               <router-link to="/test" id=menu_intro_jap class="nav"><i class="fas fa-question-circle">{{$t('appVue.intro')}}</i></router-link><div id="zero_divide_jap">|</div>
               <router-link to="/play" id="menu_play_jap" class="nav"><i class="fa fa-gamepad">{{$t('appVue.game')}}</i></router-link><div id="first_divide_jap">|</div>
               <router-link to="/board" id="menu_community_jap" class="nav"><i class="fas fa-comment-dots">{{$t('appVue.community')}}</i></router-link><div id="second_divide_jap">|</div>
               <router-link to="/login" id="menu_login_jap" class="nav" v-if="!$store.state.token"><i class="fas fa-sign-in-alt">{{$t('appVue.login')}}</i><div id="third_divide_jap">|</div></router-link>
               <a id="menu_login_jap" class = 'nav' v-if="$store.state.token" @click="signOut"><i class="fas fa-sign-out-alt">{{$t('appVue.logout')}}</i></a>
               <router-link to="/member_join" id="menu_member_join_jap" class="nav" v-if="!$store.state.token"><i class="fas fa-sign-in-alt">{{$t('appVue.signup')}}</i></router-link>
            </div>
         </div>

         <!-- 기본 옵션-->
         <div v-else v-clock>
            <router-link to="/" class="nav_logo"><img src="@/assets/nav_logo.png"/></router-link>
            <div class="kor_intro_div">
               <router-link to="/test" id=menu_intro_kor class="nav"><i class="fas fa-question-circle">{{$t('appVue.intro')}}</i></router-link><div id="zero_divide_kor">|</div>
               <router-link to="/play" id="menu_play_kor" class="nav"><i class="fa fa-gamepad">{{$t('appVue.game')}}</i></router-link><div id="first_divide_kor">|</div>
               <router-link to="/board" id="menu_community_kor" class="nav"><i class="fas fa-comment-dots">{{$t('appVue.community')}}</i></router-link><div id="second_divide_kor">|</div>
               <router-link to="/login" id="menu_login_kor" class="nav" v-if="!$store.state.token"><i class="fas fa-sign-in-alt">{{$t('appVue.login')}}</i><div id="third_divide_kor">|</div></router-link>
               <a id="menu_login_kor" class = 'nav' v-if="$store.state.token" @click="signOut"><i class="fas fa-sign-out-alt">{{$t('appVue.logout')}}</i></a>
               <router-link to="/member_join" id="menu_member_join_kor" class="nav" v-if="!$store.state.token"><i class="fas fa-sign-in-alt">{{$t('appVue.signup')}}</i></router-link>
            </div>
         </div>
       </div>
    <router-view/>
  </div>
</template>

<script src="https://apis.google.com/js/platform.js"></script>

<script>
import GoogleLogin from 'vue-google-login'
import Login from '@/components/login.vue'
import MemberJoin from '@/components/member_join.vue'
import store from './store'

export default {
  name: 'App',
  data() {
    return {

      // client_id is the only required property but you can add several more params, full list down bellow on the Auth api section
      params: {
        client_id: "519684726036-tj9fqobp9h04r69vke7hm9b8qgclftem.apps.googleusercontent.com",

        // 다국어 지원을 위한 변수
        select_kor:false,
        select_eng:false,
        select_jap:false
     },
      userInfo: [],
     // only needed if you want to render the button with the google ui
     isLoading: true,
    }
  },
//   created() {
//      const response = this.$http.get('/api/login/login', {
//         headers : {
//            Authorization: 'dj test ' + localStorage.getItem('token')
//         }
//      });

//      console.log(response);
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
   }
}
</script>

<style>
#kor{
   width:100px;
   border:0;
   padding:10px;
}

#eng{
   width:100px;
   border:0;
   padding:10px;
}

#jap{
   width:100px;
   border:0;
   padding:10px;
}

.dropdown{
   background-color: #ffffff;
   position: absolute;
   cursor: pointer;
    display: inline-block;
   width:42px;
   height:42px;
   left:93%;
   top:2.7%;
}

.dropdown-content {
    display: none;
     position: absolute;
     background-color: #f1f1f1;
     min-width: 100px;
     box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
     z-index: 12;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

[class*='nav_logo']{
   filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
   position: absolute;
   width: 66px;
   height: 72px;
   left:1.5%;
   top:2.8%;
   overflow: visible;
}

[class*='nav']{
   margin:px auto;
   text-align: center;
}

.kor_intro_div {
   position: absolute;
   float: left;
   left:600px;
   top:43px;
}

#menu_intro_kor{
   position: relative;
   float: left;
   overflow: visible;
   white-space: nowrap;
   text-align: left;
   font-family: NanumBarunGothic;
   font-style: normal;
   font-weight: lighter;
   font-size: 20px;
   color: rgba(0,0,0,1);
   letter-spacing: 0.1px;
   margin-right: 80px;
}

#zero_divide_kor{
   position: relative;
   float: left;
   overflow: visible;
   white-space: nowrap;
   font-family: NanumBarunGothic;
   font-style: normal;
   font-weight: lighter;
   font-size: 18px;
   color: rgba(0,0,0,1);
   letter-spacing: 0.1px;
   margin-right: 80px;
   bottom:7px;
}

#menu_play_kor{
   position: relative;
   overflow: visible;
   float: left;
   white-space: nowrap;
   text-align: left;
   font-family: NanumBarunGothic;
   font-style: normal;
   font-weight: lighter;
   font-size: 20px;
   color: rgba(0,0,0,1);
   letter-spacing: 0.1px;
   margin-right: 80px;
}

#first_divide_kor{
   position: relative;
   overflow: visible;
   white-space: nowrap;
   float: left;
   text-align: left;
   font-family: NanumBarunGothic;
   font-style: normal;
   font-weight: lighter;
   font-size: 18px;
   color: rgba(0,0,0,1);
   letter-spacing: 0.1px;
   margin-right: 80px;
   bottom:7px;
}

#menu_community_kor{
   position: relative;
   overflow: visible;
   float: left;
   white-space: nowrap;
   text-align: left;
   font-family: NanumBarunGothic;
   font-style: normal;
   font-weight: lighter;
   font-size: 20px;
   color: rgba(0,0,0,1);
   letter-spacing: 0.1px;
   margin-right: 80px;
}

#second_divide_kor{
   position: relative;
   overflow: visible;
   white-space: nowrap;
   float: left;
   text-align: left;
   font-family: NanumBarunGothic;
   font-style: normal;
   font-weight: lighter;
   font-size: 18px;
   color: rgba(0,0,0,1);
   letter-spacing: 0.1px;
   margin-right: 80px;
   bottom:7px;
}

#menu_login_kor{
   position: relative;
   overflow: visible;
   white-space: nowrap;
   float: left;
   text-align: left;
   font-family: NanumBarunGothic;
   font-style: normal;
   font-weight: lighter;
   font-size: 20px;
   color: rgba(0,0,0,1);
   letter-spacing: 0.1px;
   margin-right: 80px;
}

#third_divide_kor{
   position: relative;
   overflow: visible;
   white-space: nowrap;
   float: left;
   text-align: left;
   font-family: NanumBarunGothic;
   font-style: normal;
   font-weight: lighter;
   font-size: 18px;
   color: rgba(0,0,0,1);
   letter-spacing: 0.1px;
   margin-left:80px;
   bottom:7px;
}

#menu_member_join_kor{
   position: relative;
   overflow: visible;
   float: left;
   white-space: nowrap;
   text-align: left;
   font-family: NanumBarunGothic;
   font-style: normal;
   font-weight: lighter;
   font-size: 20px;
   color: rgba(0,0,0,1);
   letter-spacing: 0.1px;
   margin-right: 80px;
}

.eng_intro_div {
   position: absolute;
   float: left;
   left:500px;
   top:43px;
}

#menu_intro_eng{
   position: relative;
   float: left;
   overflow: visible;
   white-space: nowrap;
   text-align: left;
   font-family: NanumBarunGothic;
   font-style: normal;
   font-weight: lighter;
   font-size: 20px;
   color: rgba(0,0,0,1);
   letter-spacing: 0.1px;
   margin-right: 80px;
}

#zero_divide_eng{
   position: relative;
   float: left;
   overflow: visible;
   white-space: nowrap;
   font-family: NanumBarunGothic;
   font-style: normal;
   font-weight: lighter;
   font-size: 18px;
   color: rgba(0,0,0,1);
   letter-spacing: 0.1px;
   margin-right: 80px;
   bottom:7px;
}

#menu_play_eng{
   position: relative;
   overflow: visible;
   float: left;
   white-space: nowrap;
   text-align: left;
   font-family: NanumBarunGothic;
   font-style: normal;
   font-weight: lighter;
   font-size: 20px;
   color: rgba(0,0,0,1);
   letter-spacing: 0.1px;
   margin-right: 80px;
}

#first_divide_eng{
   position: relative;
   overflow: visible;
   white-space: nowrap;
   float: left;
   text-align: left;
   font-family: NanumBarunGothic;
   font-style: normal;
   font-weight: lighter;
   font-size: 18px;
   color: rgba(0,0,0,1);
   letter-spacing: 0.1px;
   margin-right: 80px;
   bottom:7px;
}

#menu_community_eng{
   position: relative;
   overflow: visible;
   float: left;
   white-space: nowrap;
   text-align: left;
   font-family: NanumBarunGothic;
   font-style: normal;
   font-weight: lighter;
   font-size: 20px;
   color: rgba(0,0,0,1);
   letter-spacing: 0.1px;
   margin-right: 80px;
}

#second_divide_eng{
   position: relative;
   overflow: visible;
   white-space: nowrap;
   float: left;
   text-align: left;
   font-family: NanumBarunGothic;
   font-style: normal;
   font-weight: lighter;
   font-size: 18px;
   color: rgba(0,0,0,1);
   letter-spacing: 0.1px;
   margin-right: 80px;
   bottom:7px;
}

#menu_login_eng{
   position: relative;
   overflow: visible;
   white-space: nowrap;
   float: left;
   text-align: left;
   font-family: NanumBarunGothic;
   font-style: normal;
   font-weight: lighter;
   font-size: 20px;
   color: rgba(0,0,0,1);
   letter-spacing: 0.1px;
   margin-right: 80px;
}

#third_divide_eng{
   position: relative;
   overflow: visible;
   white-space: nowrap;
   float: left;
   text-align: left;
   font-family: NanumBarunGothic;
   font-style: normal;
   font-weight: lighter;
   font-size: 18px;
   color: rgba(0,0,0,1);
   letter-spacing: 0.1px;
   margin-left:80px;
   bottom:7px;
}

#menu_member_join_eng{
   position: relative;
   overflow: visible;
   float: left;
   white-space: nowrap;
   text-align: left;
   font-family: NanumBarunGothic;
   font-style: normal;
   font-weight: lighter;
   font-size: 20px;
   color: rgba(0,0,0,1);
   letter-spacing: 0.1px;
   margin-right: 80px;
}

.jap_intro_div {
   position: absolute;
   float: left;
   left:380px;
   top:43px;
}

#menu_intro_jap{
   position: relative;
   float: left;
   overflow: visible;
   white-space: nowrap;
   text-align: left;
   font-family: NanumBarunGothic;
   font-style: normal;
   font-weight: lighter;
   font-size: 20px;
   color: rgba(0,0,0,1);
   letter-spacing: 0.1px;
   margin-right: 80px;
}

#zero_divide_jap{
   position: relative;
   float: left;
   overflow: visible;
   white-space: nowrap;
   font-family: NanumBarunGothic;
   font-style: normal;
   font-weight: lighter;
   font-size: 18px;
   color: rgba(0,0,0,1);
   letter-spacing: 0.1px;
   margin-right: 80px;
   bottom:7px;
}

#menu_play_jap{
   position: relative;
   overflow: visible;
   float: left;
   white-space: nowrap;
   text-align: left;
   font-family: NanumBarunGothic;
   font-style: normal;
   font-weight: lighter;
   font-size: 20px;
   color: rgba(0,0,0,1);
   letter-spacing: 0.1px;
   margin-right: 80px;
}

#first_divide_jap{
   position: relative;
   overflow: visible;
   white-space: nowrap;
   float: left;
   text-align: left;
   font-family: NanumBarunGothic;
   font-style: normal;
   font-weight: lighter;
   font-size: 18px;
   color: rgba(0,0,0,1);
   letter-spacing: 0.1px;
   margin-right: 80px;
   bottom:7px;
}

#menu_community_jap{
   position: relative;
   overflow: visible;
   float: left;
   white-space: nowrap;
   text-align: left;
   font-family: NanumBarunGothic;
   font-style: normal;
   font-weight: lighter;
   font-size: 20px;
   color: rgba(0,0,0,1);
   letter-spacing: 0.1px;
   margin-right: 80px;
}

#second_divide_jap{
   position: relative;
   overflow: visible;
   white-space: nowrap;
   float: left;
   text-align: left;
   font-family: NanumBarunGothic;
   font-style: normal;
   font-weight: lighter;
   font-size: 18px;
   color: rgba(0,0,0,1);
   letter-spacing: 0.1px;
   margin-right: 80px;
   bottom:7px;
}

#menu_login_jap{
   position: relative;
   overflow: visible;
   white-space: nowrap;
   float: left;
   text-align: left;
   font-family: NanumBarunGothic;
   font-style: normal;
   font-weight: lighter;
   font-size: 20px;
   color: rgba(0,0,0,1);
   letter-spacing: 0.1px;
   margin-right: 80px;
}

#third_divide_jap{
   position: relative;
   overflow: visible;
   white-space: nowrap;
   float: left;
   text-align: left;
   font-family: NanumBarunGothic;
   font-style: normal;
   font-weight: lighter;
   font-size: 18px;
   color: rgba(0,0,0,1);
   letter-spacing: 0.1px;
   margin-left:80px;
   bottom:7px;
}

#menu_member_join_jap{
   position: relative;
   overflow: visible;
   float: left;
   white-space: nowrap;
   text-align: left;
   font-family: NanumBarunGothic;
   font-style: normal;
   font-weight: lighter;
   font-size: 20px;
   color: rgba(0,0,0,1);
   letter-spacing: 0.1px;
   margin-right: 80px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif, CookieRun-Regular;
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

#menu_login { 
  font-weight: bold;
  color: #2c3e50;
}

@font-face {
    font-family: 'CookieRun-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/CookieRun-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

/* #nav a.router-link-exact-active {
  color: #42b983;
} */
</style>