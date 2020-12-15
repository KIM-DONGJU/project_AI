<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">{{$t('boardWriteVue.title')}}</label><!-- 제목 -->
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="tutorial.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">{{$t('boardWriteVue.content')}}</label><!-- 내용 -->
        <textarea
          class="form-control"
          id="description"
          required
          v-model="tutorial.description"
          name="description"
        />
      </div>

      <button @click="saveTutorial" class="btn btn-success">{{$t('boardWriteVue.write')}}</button><!-- 작성 -->
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
</style>