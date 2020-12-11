<template>
<div>
    <div>
        <div class="form-group">
        <label for="title">제목</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="currentTutorial.board_title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">내용</label>
        <textarea
          class="form-control"
          id="description"
          required
          v-model="currentTutorial.board_content"
          name="description"
        />
      </div>
    </div>
    <button @click="updateTutorial" class="btn btn-success">수정</button>
</div>
</template>

<script>

import TutorialDataService from '../services/BoardDataService'

export default {
    name : 'boardUpdate',
    
    data() {
        return {
            id  : this.$route.params.id,
            currentTutorial : null,
        }
    },

    methods : {
        getTutorial(){
            TutorialDataService.get(this.id)
                .then(response => {
                    this.currentTutorial = response.data;
                    console.log(response.data);
                })
        },
        updateTutorial(){

            var data = {
                board_title: this.currentTutorial.board_title,
                board_content: this.currentTutorial.board_content,
                board_id : this.currentTutorial.id
            };
            TutorialDataService.update(data)
                .then(response=>{
                    this.$router.push({name : 'board'})
                }).catch( (err) => {
                    console.log(err);
                })
        }
    },

    mounted() {
        this.getTutorial(this.$route.params.id);
    }

    
}
</script>