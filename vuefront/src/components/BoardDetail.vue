<template>
    <div class="board_detail">
        <div id="board_detail_update_bg">
			<p id="board_detail_update_introduce_text">커뮤니티</p>
			<p id="board_detail_update_sub_text">서비스 후기 및 다양한 육아 꿀팁을 공유해보세요!</p>
        
            <form>
                <table class="board_detail_info_table">
                    <colgroup>
                        <col width="15%" />
                        <col width="*" />
                    </colgroup>
                    <tr>
                        <td><p id="board_detail_subject">{{currentTutorial.board_title}}</p><br><p id="board_detail_writer_info">{{currentTutorial.member.member_nickname}}</p></td>
                    </tr>
                </table>

                <table class="board_detail_content_table">
                    <colgroup>
					    <col width="15%" />
					    <col width="*" />
				    </colgroup>
				    <tr>
					    <td><p id="board_detail_contents">{{currentTutorial.board_content}}</p></td>
				    </tr>
                </table>
            </form>

            <div v-if="this.session_id == this.member_id">
                <button class = 'btn btn-outline-secondary' type = 'button' id="board_detail_modified" @click = 'updateTutorial'>{{$t('boardDetailVue.modify')}}</button>
                <button class = 'btn btn-outline-secondary' type = 'button' id="board_detail_deleted" v-on:click="boardDelete" >{{$t('boardDetailVue.delete')}}</button>
            </div>
        </div>
        
        <div id="board_detail_update_footer">
		    <p id="developer_contact">T. 010-5197-3175</p><p id="developer_email">E. admin@pp-teacher.io</p>
			<p id="developer_name">원준수 / 김동주 / 김수양 / 유정호 / 유재혁</p>
		</div>
    </div>
</template>

<script>

import TutorialDataService from '../services/BoardDataService'

export default {
    name : 'boardDetail',
    
    data() {
        return {
            id : this.$route.params.id,
            currentTutorial : {
                board_title:'',
                member: {
                    member_nickname: '',
                },
                board_content:''
            },
            member_id : '',
            session_id : '',
            // message : ''
        }
    },

    methods : {
        getTutorial(){
            this.$http.get(`/api/board/${this.id}`)
                .then(response => {
                    this.currentTutorial = response.data;
                    this.member_id = response.data.member_id;
                    let session = JSON.parse(sessionStorage.getItem('token'));
                    if(session) {
                        this.session_id = JSON.parse(sessionStorage.getItem('token')).id;
                    }
                })
                .catch(err => {
                    alert(err)
                    console.log(response.data)
            })
        },
        updateTutorial(){
            this.$router.push({name: 'Update', params : {id: this.id}})
                    // this.member_id = response.data.member_id;
                    // this.session_id = JSON.parse(sessionStorage.getItem('token')).id;
                },
        boardDelete() {
            this.$http.delete(`/api/board/${this.id}`)
            .then((res) => {
                    if(res.data.success) {
                        this.$router.go(-1)
                        console.log('success')
                    } else {
                        alert('삭제 안됐어')
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
    },
    mounted() {
        this.getTutorial(this.$route.params.id);
    }
}
</script>

<style scoped>
#board_detail_update_bg{
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

#board_detail_update_bg::before{
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

#board_detail_update_introduce_text{
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

#board_detail_update_sub_text{
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

#board_detail_subject{
	left: 1%;
	top: 15%;
	position: absolute;
	overflow: visible;
	width: 307px;
	white-space: nowrap;
	line-height: 57px;
	margin-top: -8.5px;
	text-align: center;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: lighter;
	font-size: 40px;
	color: rgba(0,0,0,1);
	letter-spacing: 0.1px;
}

#board_detail_contents{
	left: 1.2%;
	top:4%;
	position: absolute;
	overflow: visible;
	width: 179px;
	white-space: nowrap;
	line-height: 31px;
	margin-top: -4.5px;
	text-align: center;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: lighter;
	font-size: 22px;
	color: rgba(168,168,168,1);
	letter-spacing: 0.1px;
}

#board_detail_update_footer::before{
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

.board_detail_info_table{
    position: absolute;
	overflow: visible;
	border:solid 2px #BEBEBE;
	top:110%;
	left:25%;
	height:35%;
	width:50%;
}

.board_detail_content_table{
    position: absolute;
	overflow: visible;
	border:solid 2px #BEBEBE;
	top:150%;
	left:25%;
	height:175%;
	width:50%;
}

#board_detail_modified{
    left:61.5%;
    margin-top:52%;
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

#board_detail_deleted{
    left:68.5%;
    margin-top:52%;
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