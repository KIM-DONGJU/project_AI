<template>
    <div class="board_update">
        <div id="board_update_bg">
			<p id="board_update_introduce_text">{{$t('boardMain.community')}}</p>
         	<p id="board_update_sub_text">{{$t('boardMain.communitySubText')}}</p>
       </div>
        <div class="update_area">
            <input type="text" class="form-control" id="board_update_subject" required v-model="currentTutorial.board_title" name="title"/>
            <textarea class="form-control" id="description" required v-model="currentTutorial.board_content" name="description"/>
            <button id="board_update" @click="updateTutorial" class="btn btn-success">{{$t('boardUpdateVue.modify')}}</button>
        </div>
   </div>
</template>

<script>

import TutorialDataService from '../services/BoardDataService'

export default {
    name : 'boardUpdate',
    
    data() {
        return {
            id  : this.$route.params.id,
            currentTutorial : {
                board_title:'',
                member: {
                    member_nickname: '',
                },
                board_content:''
            }
        }
    },

    methods : {
        getTutorial(){
             this.$http.get(`/api/board/${this.id}`)
             .then(response => {
                    this.currentTutorial = response.data;
                    console.log(this.currentTutorial);
                })

        },
        updateTutorial(){
            const id = this.currentTutorial.id
            var data = {
                board_title: this.currentTutorial.board_title,
                board_content: this.currentTutorial.board_content,
                board_id : this.currentTutorial.id
            };
            this.$http.put('/api/board', data)
             .then(response => {
                    this.$router.push({name: 'board'})
                })  
        }
    },

    mounted() {
        this.getTutorial(this.$route.params.id);
    }

    
}
</script>

<style scoped>
.board_update {
   position: relative;
   width:1920px;
   margin: 0 auto;
}

.update_area {
   position: relative;
   width:860px;
   height: 700px;
   top:450px;
   margin : 0 auto;

}


#board_update_bg{
   position: absolute;
   width: 1920px;
   height: 300px;
   top: 100px;
   background-repeat: no-repeat;
   overflow: visible;
   background-image: url("../assets/community_bg.png");
   background-color:rgba(0,0,0,0.5);
}

#board_update_bg::before{
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

#board_update_introduce_text{
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

#board_update_sub_text{
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

#board_update_subject{
    position: absolute;
   overflow: visible;
   width: 838px;
   height: 68px;
    font-family: NanumBarunGothic;
    font-size: 21px;
   top: 0;
   left: 50%;
   transform: translateX(-50%);
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
    padding-top:0.7%;
   top: 90px;
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

.btn-success{
   position: absolute;
    width:122px;
    height:45px;
   bottom:0;
   right: 0;
    border-radius: 8px;
    color: rgba(255,255,255,1);
    font-family: NanumBarunGothic;
    border:0;
    background-color: rgba(246,115,149,1);
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
   overflow: visible;
}
</style>