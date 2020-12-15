<template>
    <div>
        <form>
            <table class="table">
                <colgroup>
                    <col width="15%" />
                    <col width="*" />
                </colgroup>
                <tr>
                    <th>{{$t('boardDetailVue.title')}}</th> <!-- 제목 -->
                    <td>{{currentTutorial.board_title}}</td>
                </tr>
                <tr>
                    <th>{{$t('boardDetailVue.author')}}</th><!-- 작성자 -->
                    <td>{{currentTutorial.member.member_nickname}}</td>
                </tr>
                <tr>
                    <th>{{$t('boardDetailVue.content')}}</th><!-- 내용 -->
                    <td>{{currentTutorial.board_content}}</td>
                </tr>
            </table>
      </form>
        <div v-if="this.session_id == this.member_id">
            <button class = 'btn btn-outline-secondary' type = 'button' @click = 'updateTutorial'>{{$t('boardDetailVue.modify')}}</button><!-- 수정 -->
            <button class = 'btn btn-outline-secondary' type = 'button' v-on:click="boardDelete" >{{$t('boardDetailVue.delete')}}</button><!-- 삭제 -->
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