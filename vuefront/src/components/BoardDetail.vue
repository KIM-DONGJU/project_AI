<template>
    <div>
        <form>
            <table class="table">
                <colgroup>
                    <col width="15%" />
                    <col width="*" />
                </colgroup>
                <tr>
                    <th>제목</th>
                    <td>{{currentTutorial.board_title}}</td>
                </tr>
                <tr>
                    <th>작성자</th>
                    <td>{{currentTutorial.member.member_nickname}}</td>
                </tr>
                <tr>
                    <th>내용</th>
                    <td>{{currentTutorial.board_content}}</td>
                </tr>
            </table>
            <button v-on:click="boardDelete" id="delete" v-if="this.session_id == this.member_id">삭제</button>
        </form>
    </div>
</template>

<script>

import TutorialDataService from '../services/BoardDataService'

export default {
    name : 'boardDetail',
    
    data() {
        return {
            id  : this.$route.params.id,
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
            TutorialDataService.get(this.$route.params.id)
                .then(response => {
                    this.currentTutorial = response.data;
                    this.member_id = response.data.member_id;
                    this.session_id = JSON.parse(sessionStorage.getItem('token')).id;
                })
        },
        boardDelete() {
            TutorialDataService.deleteBoard(this.id)
			.then(
				(res) => {
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
        // this.message = '';
        this.getTutorial(this.$route.params.id);
    },
}
</script>