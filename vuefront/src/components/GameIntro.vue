<template>
    <div>

        <div class = 'intro'>
        <img src="../assets/1.png" alt="" v-show="this.page===1">
        <img src="../assets/2.png" alt="" v-show="this.page===2">
        <img src="../assets/3.png" alt="" v-show="this.page===3">
        <img src="../assets/4.png" alt="" v-show="this.page===4">
        </div>

        <div class = 'left' v-show = 'this.page != 1'><i class="material-icons" style="font-size:48px;color:#333131;cursor: pointer;" @click = 'down'>keyboard_arrow_left</i></div>
        <div class = 'right' v-show = 'this.page != 4'><i class="material-icons" style="font-size:48px;color:#333131;cursor: pointer;" @click = 'up'>keyboard_arrow_right</i></div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            page : 1
        }
    },
    methods: {
        up(){
            this.page++
        },
        down(){
            this.page--;
        }
    }
    
}
</script>

<style>
    html {
        width : 1920px !important;
    }

    .intro img {
        position: absolute;
        width: 1400px;
        height : auto;
        top : 50%;
        left : 50%;
        transform: translate(-50%,-50%);
        z-index: -1;
    }
    
    .left {
        position: absolute;
        left : 100px;
        top : 50%;
        transform: translateY(-50%);
    }

    .right {
        position: absolute;
        right : 100px;
        top : 50%;
        transform: translateY(-50%);
    }

    
</style>