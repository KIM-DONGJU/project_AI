<template>
    <div class="list row">
        <div class="col-md-6">
        <h4>Board List</h4>
        <!-- <div class="table-responsive"> -->
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">제목</th>
                        <th scope="col">작성자</th>
                        <th scope="col">작성일</th>
                    </tr>
                </thead>
                <tbody>
                    <tr :class="{ active: index == currentIndex }" 
                    v-for = '(tutorial, index) in tutorials' :key = 'index' 
                    @click = 'setActiveTutorial(tutorial, index)'
                    >
                        <td>{{tutorial.board_title}}</td>
                        <td>{{tutorial.member.member_nickname}}</td>
                        <td>{{tutorial.updatedAt}}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="col-md-8">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Search by title"
                v-model="title"/>
                <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" @click="searchTitle">
                    Search
                </button>
                </div>
            </div>
        </div>

        <div>
          <button class = 'btn btn-outline-secondary' type = 'button' @click = 'writeBoard'>글쓰기</button>
        </div>
    <!-- </div> reponsive-table div -->
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
      title: ""
    };
  },
  methods: {
    retrieveTutorials() {

    // TutorialDataService.getAll()
    //     .then(response => {
    //       this.tutorials = response.data;
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });

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
      // TutorialDataService.findByTitle(this.title)
      //   .then(response => {
      //     this.tutorials = response.data;
      //     console.log(response.data);
      //   })
      //   .catch(e => {
      //     console.log(e);
      //   });

      this.$http.get(`/api/board/search/${this.title}`)
      // this.$http.get(`/api/board/search?title=${this.title}`)
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
</style>