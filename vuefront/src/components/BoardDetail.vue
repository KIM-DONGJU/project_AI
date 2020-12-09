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
            message : ''
        }
    },

    methods : {
        getTutorial(){
            // alert(this.id)
            TutorialDataService.get(this.id)
                .then(response => {
                    this.currentTutorial = response.data;
                    console.log(response.data);
                })
        }
    },

    mounted() {
        this.message = '';
        this.getTutorial(this.$route.params.id);
    }

    
}
</script>