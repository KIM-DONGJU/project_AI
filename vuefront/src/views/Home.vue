<template>
  <div class="home">
    <div class = "text">
      <h3>다음 동작을 보고 따라해주세요</h3>
    </div>
    <div class = "posenet">
    <Pose></Pose>
    </div>
    <div class = "vrmModel">
    <Vrm></Vrm>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Pose from '@/components/pose.vue'
import Vrm from '@/components/vrm.vue'

export default {
  name: 'Home',
  components: {
    Pose,
    Vrm
  }
}
</script>

<style scoped>
  .div {
    width: 100%;
    border: 1px solid #000;
  }
  .posenet {
    border: 1px;
    float: left;
    width: 50%;
    padding: 10px;
    box-sizing: border-box;
  }
  .vrmModel {
    border: 1px;
    float: right;
    width: 50%;
    padding: 10px;
    box-sizing: border-box;
  }


</style>