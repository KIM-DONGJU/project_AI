<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div id="board_write_bg">
			<p id="board_write_introduce_text">{{$t('boardMain.community')}}</p>
           	<p id="board_write_sub_text">{{$t('boardMain.communitySubText')}}</p>
    	</div>
      <div class="form-group">
        <!--<label for="title">{{$t('boardWriteVue.title')}}</label>-->
        <input type="text" class="title" required v-model="tutorial.title" name="title" placeholder="글 제목"/>
        <textarea id="description" required v-model="tutorial.description" name="description" placeholder="내용"/>
        <button @click="saveTutorial" id="board_write" class="btn btn-success">{{$t('boardWriteVue.write')}}</button>
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
input::-webkit-input-placeholder,textarea::-webkit-input-placeholder { text-align: center; }
input::-webkit-input-placeholder,textarea::-moz-placeholder { text-align: center; }
input::-webkit-input-placeholder,textarea:-ms-input-placeholder { text-align: center; }
input::-webkit-input-placeholder,textarea:-moz-placeholder { text-align: center; }
input::-webkit-input-placeholder,textarea::placeholder { text-align: center; }


.submit-form {
	width:1920px;
	margin: 0 auto;
}

#board_write_bg{
	position: absolute;
	width: 1920px;
	height: 300px;
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

.form-group {
	position: relative;
	top:350px;
	width: 1920px;
	height: 680px;
}

.title{
	position: absolute;
	left:50%;
	transform: translateX(-50%);
	width:840px;
	height: 68px;
	text-align: left;
	font-family: NanumBarunGothic;
	font-size: 21px;
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
	top:80px;
	left:50%;
	transform: translateX(-50%);
	font-family: NanumBarunGothic;
	font-size: 21px;
	padding-top:0.7%;
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

#board_write{
	position: absolute;
	top:630px;
	right:540px;
	width:122px;
	height:45px;
	border-radius: 8px;
	color: rgba(255,255,255,1);
	font-family: NanumBarunGothic;
	border:0;
	background-color: rgba(246,115,149,1);
	filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	overflow: visible;
}
</style>