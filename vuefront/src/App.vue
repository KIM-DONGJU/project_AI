<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" id="nav_logo"><img src="@/assets/nav_logo.png"/></router-link>
      <router-link to="/play" id="menu_play">게임하기</router-link><div id="first_divide">|</div>
      <router-link to="/community" id="menu_community">커뮤니티</router-link><div id="second_divide">|</div>
      <router-link to="/login" id="menu_login">로그인</router-link><div id="third_divide">|</div>
      <router-link to="/member_join" id="menu_member_join">회원가입</router-link>
    </div>
    <router-view/>
	<div id="footer">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Footer from './views/Footer'

export default {
  created(){
    document.title = "PinkPenguinTeacher에 오신 것을 환영합니다."
  }, components:{
	  Footer
  }
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

/* #nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
