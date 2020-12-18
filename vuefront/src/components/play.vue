<template>
	<div class="play">
		<!-- 선생님 선택 -->
		<div class="choice_area" v-if="!this.check">
			<h1>어떤 선생님을 따라할까요?</h1>
			<div class="char1" v-if="this.page===1">
				<div class="teacher1">
					<img src="@/assets/teacher1.jpg" @click="teacher(1)" />
				</div>
				<div class="teacher2">
					<img src="@/assets/teacher2.jpg" @click="teacher(2)" />
				</div>
				<div class="teacher3">
					<img src="@/assets/teacher3.jpg" @click="teacher(3)" />
				</div>
				<div class="teacher4">
					<img src="@/assets/teacher4.jpg" @click="teacher(4)" />
				</div>
			</div>
			<div class="char2" v-if="this.page===2">
				<div class="teacher5">
					<img src="@/assets/teacher5.jpg" @click="teacher(5)" />
				</div>
				<div class="teacher6">
					<img src="@/assets/teacher6.jpg" @click="teacher(6)" />
				</div>
				<div class="teacher7">
					<img src="@/assets/teacher7.jpg" @click="teacher(7)" />
				</div>
				<div class="teacher8">
					<img src="@/assets/teacher8.jpg" @click="teacher(8)" />
				</div>
			</div>
			<button @click="down" v-if="this.page===2">ㅓㅓ</button>
			<button @click="up" v-if="this.page===1">ㅏㅏ</button>
		</div>
		<!-- 플레이 영역 -->
		<div class="play_area" v-if="this.check">
			<!-- 유저 영역 -->
			<div class="user_movie">
				<Pose></Pose>
			</div>

			<!-- 선생님 영역 -->
			<div class="teacher_movie">
				<Vrm :selectedModel = "this.selectedModel"></Vrm>
			</div>
		</div>
    </div>
</template>

<script>
import Pose from '@/components/pose.vue'
import Vrm from '@/components/vrm.vue'

export default {
	name: 'Play',
    components : {
	    Pose,
		Vrm
	},
	data(){
		return{
			check: false,
			selectedModel: undefined,
			page : 1
		}
	},
  	methods: {
		  up(){
			  this.page++;
		  },
		  down(){
			  this.page--;
		  },
		  teacher(number){
			  this.selectedModel = "./vrmmodel/teacher"+ number + ".vrm";
			  this.check = this.check ? false : true;
		  },
	},
}
</script>

<style scoped>
img{
	height: 100%;
}

.play{
	padding-top: 40px;
	overflow-x: hidden;
}

.choice_area{
	width:100%;
	padding-top: 25px;
	position:relative;
	overflow: visible;
	height:820px;
	background-color: #fc94af;
}

.play_area{
	width:100%;
	padding-top: 25px;
	position:relative;
	overflow: visible;
	height:820px;
	background-color: #fc94af;
}

.user_movie{
	width:50%;
	float: left;
}

.teacher_movie{
	width:50%;
	float: right;
	padding-left:40px;
}

.char1{
	position: relative;
	width: 100%;
	height: 80%;
	background-color: white;
}

.teacher1{
	float: left;
	width: 25%;
	height: 100%;
	background-color: white;
}
.teacher2{
	float: left;
	width: 25%;
	height: 100%;
	background-color:white;
}


.teacher3{
	float: left;
	width: 25%;
	height: 100%;
	background-color:white;
}
.teacher4{
	float: left;
	width: 25%;
	height: 100%;
	background-color:white;
}

.char2{
	position: relative;
	width: 100%;
	height: 80%;
	background-color: white;
}

.teacher5{
	float: left;
	width: 25%;
	height: 100%;
	background-color: white;
}
.teacher6{
	float: left;
	width: 25%;
	height: 100%;
	background-color: white;
}
.teacher7{
	float: left;
	width: 25%;
	height: 100%;
	background-color: white;
}
.teacher8{
	float: left;
	width: 25%;
	height: 100%;
	background-color:white;
}
</style>