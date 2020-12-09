<template>
    <div class="select_teacher">
        <button v-on:click="letsPlay" id="lets-play">화면 이동 테스트</button>
    </div>
</template>

<script>
export default {
    methods:{
		letsPlay:function(){
			this.$router.push('/play') // 로그인 유도한 후, 로그인 한 경우 게임하기 화면으로 넘어가도록 하면 됨
		},
	}
}
</script>