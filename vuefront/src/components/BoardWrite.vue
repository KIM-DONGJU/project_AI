<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div id="board_write_bg">
			  <p id="board_write_introduce_text">커뮤니티</p>
			  <p id="board_write_sub_text">서비스 후기 및 다양한 육아 꿀팁을 공유해보세요!</p>
    	</div>
      <div class="form-group">
        <!--<label for="title">{{$t('boardWriteVue.title')}}</label>-->
        <input type="text" class="form-control" id="title" required v-model="tutorial.title" name="title"/>
        <textarea class="form-control" id="description" required v-model="tutorial.description" name="description"/>
        <button @click="saveTutorial" id="board_write" class="btn btn-success">{{$t('boardWriteVue.write')}}</button>
      </div>

      <!--<div class="form-group">
        <label for="description">{{$t('boardWriteVue.content')}}</label>
        <textarea
          class="form-control"
          id="description"
          required
          v-model="tutorial.description"
          name="description"
        />
      </div>-->

      <!--<button @click="saveTutorial" class="btn btn-success">{{$t('boardWriteVue.write')}}</button>-->

      <div id="board_write_footer">
			  <p id="developer_contact">T. 010-5197-3175</p><p id="developer_email">E. admin@pp-teacher.io</p>
			  <p id="developer_name">원준수 / 김동주 / 김수양 / 유정호 / 유재혁</p>
			  <a href="#"><button v-on:click="goUp" id="go-up"></button></a>
		  </div>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>

      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>
</template>

<script>
import TutorialDataService from "../services/BoardDataService";

export default {
  name: "add-tutorial",
  data() {
    return {
      tutorial: {
        id: null,
        title: "",
        description: "",
        published: false
      },
      submitted: false,
      submitted2 : false,
    };
  },
  methods: {
    saveTutorial() {
      var data = {
        board_title: this.tutorial.title,
        board_content: this.tutorial.description,
        member_id : JSON.parse(sessionStorage.getItem('token')).id,
      };

        this.$http.post('api/board',data)
        .then(response => {
          this.tutorial.id = response.data.id;
          this.submitted = true;
          this.$router.push({name : 'board'})
        })
        .catch(e => {
          console.log(e);
        })

    },
    
    newTutorial() {
      this.submitted = false;
      this.tutorial = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}

#board_write_bg{
	position: absolute;
	width: 100%;
	height: 31%;
	left: 0px;
	top: 100px;
	background-repeat: no-repeat;
	overflow: visible;
	background-image: url("../assets/community_bg.png");
	background-color:rgba(0,0,0,0.5);
}

#board_write_bg::before{
	content: "";
	opacity: 0.5;
	position: absolute;
	top: 0px;
	height:100%;
	left: 0px;
	right: 0px;
	bottom: 0px;
	background-color: #000;
}

#board_write_introduce_text{
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	left: 863.5px;
	top: 30%;
	position: absolute;
	overflow: visible;
	width: 195px;
	white-space: nowrap;
	text-align: left;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: bold;
	font-size: 54px;
	color: rgba(255,255,255,1);
	letter-spacing: 0.1px;
}

#board_write_sub_text{
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	left: 751.5px;
	top: 60%;
	position: absolute;
	overflow: visible;
	width: 419px;
	white-space: nowrap;
	line-height: 30px;
	text-align: center;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: lighter;
	font-size: 21px;
	color: rgba(255,255,255,1);
	letter-spacing: 0.1px;
}

#title{
  position: absolute;
	overflow: visible;
	width: 840px;
	height: 68px;
  font-family: NanumBarunGothic;
  font-size: 21px;
  left:30%;
	top: 45%;
  opacity: 0.8;
	fill: rgba(255,255,255,1);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
  text-indent:0.5em;
}

#description{
  position: absolute;
	overflow: visible;
	width: 840px;
	height: 540px;
  font-family: NanumBarunGothic;
  font-size: 21px;
  left:30%;
  padding-top:0.7%;
	top: 54%;
  opacity: 0.8;
	fill: rgba(255,255,255,1);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
  resize: none;
	shape-rendering: auto;
  text-indent:0.5em;
}

#board_write_footer::before{
	content: "";
	position: absolute;
	height:10.7%;
	top:120.3%;
	left: 0px;
	right: 0px;
	bottom: 0px;
	background-color: #222222;
}

#developer_contact{
  left: 1%;
	top: 123%;
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
	top: 123%;
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
	top: 127%;
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
	left: 95%;
	top: 121.6%;
}

#board_write{
  margin-left:17.8%;
  margin-top:43.5%;
  width:122px;
  height:45px;
  border-radius: 8px;
  color: rgba(255,255,255,1);
  font-family: NanumBarunGothic;
  border:0;
  background-color: rgba(246,115,149,1);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
  position: absolute;
	overflow: visible;
}
</style>