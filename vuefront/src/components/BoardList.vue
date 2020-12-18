<template>
  <div class="board_list">
    <div id="board_list_bg">
		<p id="board_list_introduce_text">{{$t('boardMain.community')}}</p>
      	<p id="board_list_sub_text">{{$t('boardMain.communitySubText')}}</p>
    </div>

      <input type="text" class="form-control" id="enter_search_contents" v-model="title"/>
      <button class="btn btn-outline-secondary" type="button" @click="searchTitle" id="search_contents">
        {{$t('boardListVue.search')}}
      </button>

      <table class="board_list_table">
        <thead>
          <tr>
            <th scope="col">{{$t('boardListVue.title')}}</th>
            <th scope="col">{{$t('boardListVue.author')}}</th>
            <th scope="col">{{$t('boardListVue.createdAt')}}</th>
          </tr>
        </thead>
        
        <tbody>
          <tr :class="{ active: index == currentIndex }" 
            v-for = '(tutorial, index) in tutorials' :key = 'index' 
            @click = 'setActiveTutorial(tutorial, index)'>
            <td>{{tutorial.board_title}}</td>
            <td>{{tutorial.member.member_nickname}}</td>
            <td>{{tutorial.updatedAt}}</td>
          </tr> 
        </tbody>
      </table>

	<div v-if='$store.state.token'>
		<button id="writebutton" class='btn btn-outline-secondary' type = 'button' @click = 'writeBoard'>{{$t('boardListVue.write')}}</button><!-- 글쓰기 -->
	</div>
  </div>
</template>

<script>
import TutorialDataService from "../services/BoardDataService";

export default {
  name: "boardList",
  data() {
    return {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      title: "",
      // placeHolder : {{$t('boardListVue.createdAt')}}
    };
  },
  methods: {
    retrieveTutorials() {
    this.$http.get('/api/board')
			.then(response => {
          this.tutorials = response.data;
        })
			.catch(err => {
				alert(err);
      })
    },

    refreshList() {
      this.retrieveTutorials();
      this.currentTutorial = null;
      this.currentIndex = -1;
    },

    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = index;
      this.$router.push({name : 'Detail', params : {id : tutorial.id}})
    },
    
    searchTitle() {
      this.$http.get(`/api/board/?title=${this.title}`)
      .then( response => {
        this.tutorials = response.data
      })
      .catch(err => {
				alert(err);
      })

      },
    detailView() {
        this.$router.push({name : 'Detail', params : {id : this.tutorials.board_id}})
    },

    writeBoard() {
      console.log(typeof JSON.parse(sessionStorage.getItem('token')).member_id);
      this.$router.push({name : 'Write', params : {id : JSON.parse(sessionStorage.getItem('token')).member_id}})
    }
},
  mounted() {
    this.retrieveTutorials();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}

#board_list_bg{
   position: absolute;
   width: 1920px;
   height: 31%;
   left: 0px;
   top: 100px;
   background-repeat: no-repeat;
   overflow: visible;
   background-image: url("../assets/community_bg.png");
   background-color:rgba(0,0,0,0.5);
}

#board_list_bg::before{
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

#board_list_introduce_text{
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

#board_list_sub_text{
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

#enter_search_contents{
     position: relative;
   overflow: visible;
   left: 1352px;
   top:338px;
   width: 19%;
     fill: rgba(255,255,255,1);
     font-family: NanumBarunGothic;
     font-size:18px;
     text-indent:1em;
     color: rgba(0,0,0,1);
}

#search_contents{
   position: relative;
   left:822px;
   top:292px;
   fill: rgba(241,242,235,1);
   shape-rendering: auto;
   filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
   overflow: visible;
   background-color: #8E8E8E;
   color: rgba(255,255,255,1);
   font-family: NanumBarunGothic;
   font-style: normal;
   font-weight: normal;
   font-size:18px;
   border:0;
   width: 100px;
   height:50px;
}

.board_list_table{
   position: relative;
   overflow: visible;
   border:solid 2px #BEBEBE;
   font-family: NanumBarunGothic;
   top: 300px;
   font-size: 20px;
   left:5%;
   border-left: none;
   border-right:none;
   height:8%;
   width:1728px;
   border-collapse: collapse;
}

th{
   border:1px solid black;
   border-left:none;
   border-right:none;
   padding:10px;
}

td{
   padding:10px;
}

#board_list_footer::before{
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

.btn .btn-outline-secondary{
   position: absolute;
   overflow: visible;
   width: 135px;
   height:50px;
   border:0.1;
   border-color:#707070;
   border-radius: 8px;
   filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
   background-color: #F1F2EB;
   font-family: NanumBarunGothic;
   font-style: bold;
   font-size: 20px;
   left: 1670.4px;
   top: 112%;
}

#writebutton{
   position: relative;
   overflow: visible;
   width: 135px;
   height:50px;
   border:0.1;
   border-color:#707070;
   border-radius: 8px;
   filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
   background-color: #F1F2EB;
   font-family: NanumBarunGothic;
   font-style: bold;
   font-size: 20px;
   left:807px;
   top:278px;

}
</style>