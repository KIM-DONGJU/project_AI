<template>
  <div class="play">
      아이디, 비밀번호 찾기
  </div>
</template>

<script>
export default {
  name: 'login',
  props: {
    msg: String
  },
  created(){
      document.title = "PinkPenguinTeacher - With Play!"
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
