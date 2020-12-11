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
		</form>
        <div>
            <button class = 'btn btn-outline-secondary' type = 'button' @click = 'updateTutorial'
            v-if="this.session_id == this.member_id"
            >수정</button>
        </div>
    </div>
</template>

<script>

import TutorialDataService from '../services/BoardDataService'

export default {
    name : 'boardDetail',
    
    data() {
        return {
            id  : this.$route.params.id,
            currentTutorial : null,
            session_id : '',
            member_id : ''
        }
    },

    methods : {
        getTutorial(){
            TutorialDataService.get(this.id)
                .then(response => {
                    this.currentTutorial = response.data;
                    console.log(response.data);
                    this.member_id = response.data.member_id;
                    this.session_id = JSON.parse(sessionStorage.getItem('token')).member_id;
                })
        },
        updateTutorial(){
            this.$router.push({name: 'Update', params : {id: this.$route.params.id}})
        }
    },

    mounted() {
        this.getTutorial(this.$route.params.id);
    }

    
}
</script>