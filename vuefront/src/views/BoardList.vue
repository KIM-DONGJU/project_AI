<template>
    <div class="board_list">
        <div id="board_list_bg">
			<p id="board_list_introduce_text">커뮤니티</p>
			<p id="board_list_sub_text">서비스 후기 및 다양한 육아 꿀팁을 공유해보세요!</p>
    	</div>

        <div>
        <input type="text" id="enter_search_contents"/>
        <button v-on:click="search_contents" id="search_contents">검색</button>

        <table class="board_list_table">
            <thead>
                <tr>
                    <th scope="col">제목</th>
                    <th scope="col">작성자</th>
                    <th scope="col">작성일</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>테스트1</td>
                    <td>테스트2</td>
                    <td>테스트3</td>
                </tr>
            </tbody>
        </table>

        <button v-on:click="write_contents" id="write_contents">글쓰기</button>
        </div>

        <div id="board_list_footer">
			<p id="developer_contact">T. 010-5197-3175</p><p id="developer_email">E. admin@pp-teacher.io</p>
			<p id="developer_name">원준수 / 김동주 / 김수양 / 유정호 / 유재혁</p>
			<a href="#"><button v-on:click="goUp" id="go-up"></button></a>
		</div>
    </div>
</template>

<script>
export default {
    methods: {
        write_contents:function(){
            this.$router.push('/board_write')
        }
    },
}
</script>
<style scoped>
#board_list_bg{
	position: absolute;
	width: 100%;
	height: 31%;
	left: 0px;
	top: 100px;
	background-repeat: no-repeat;
	overflow: visible;
	background-image: url("../assets/community_bg.png");
	background-color:rgba(0,0,0,0.5);
}

#board_list_bg::before{
	content: "";
	opacity: 0.5;
	position: absolute;
	top: 0px;
	height:100%;
	left: 0px;
	right: 0px;
	bottom: 0px;
	background-color: #000;
}

#board_list_introduce_text{
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	left: 863.5px;
	top: 16%;
	position: absolute;
	overflow: visible;
	width: 195px;
	white-space: nowrap;
	text-align: left;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: bold;
	font-size: 54px;
	color: rgba(255,255,255,1);
	letter-spacing: 0.1px;
}

#board_list_sub_text{
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	left: 751.5px;
	top: 52%;
	position: absolute;
	overflow: visible;
	width: 419px;
	white-space: nowrap;
	line-height: 30px;
	text-align: center;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: lighter;
	font-size: 21px;
	color: rgba(255,255,255,1);
	letter-spacing: 0.1px;
}

#enter_search_contents{
    position: absolute;
	overflow: visible;
	width: 355px;
	height: 45px;
    fill: rgba(255,255,255,1);
	left: 70%;
    font-family: NanumBarunGothic;
    font-size:18px;
    text-indent:1em;
	top: 432px;
    color: rgba(0,0,0,1);
}

#search_contents{
    fill: rgba(241,242,235,1);
	shape-rendering: auto;
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	position: absolute;
	overflow: visible;
    background-color: #8E8E8E;
    color: rgba(255,255,255,1);
    font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: normal;
    font-size:18px;
    border:0;
	width: 100px;
	height:50px;
	left: 89.7%;
	top: 432px;
}

#write_contents{
	position: absolute;
	overflow: visible;
	width: 135px;
    height:50px;
    border:0.1;
    border-color:#707070;
    border-radius: 8px;
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
    background-color: #F1F2EB;
    font-family: NanumBarunGothic;
    font-style: bold;
    font-size: 20px;
	left: 87%;
	top: 112%;
}

#board_list_footer::before{
	content: "";
	position: absolute;
	height:10.7%;
	top:120.3%;
	left: 0px;
	right: 0px;
	bottom: 0px;
	background-color: #222222;
}

#developer_contact{
  	left: 1%;
	top: 123%;
	position: absolute;
	overflow: visible;
	width: 343px;
	white-space: nowrap;
	line-height: 24px;
	margin-top: -4.5px;
	text-align: left;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: bold;
	font-size: 15px;
	color: rgba(255,255,255,1);
    white-space: pre;
}

#developer_email{
  	left: 11%;
	top: 123%;
	position: absolute;
	overflow: visible;
	width: 343px;
	white-space: nowrap;
	line-height: 24px;
	margin-top: -4.5px;
	text-align: left;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: bold;
	font-size: 15px;
	color: rgba(255,255,255,1);
    white-space: pre;
}

#developer_name{
  	left: 1%;
	top: 127%;
	position: absolute;
    padding-bottom: 1%;
	overflow: visible;
	width: 343px;
	white-space: nowrap;
	line-height: 24px;
	margin-top: -4.5px;
	text-align: left;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: bold;
	font-size: 15px;
	color:#B0B0B0;
}

#go-up{
	background-color:#444444;
	background-image: url("../assets/btn_arrow.png");
	color:#ffffff;
	font-style: bold;
	background-repeat: no-repeat;
	position: absolute;
	overflow: visible;
	background-position: center;
	width: 80px;
	background-size: 20%;
	font-family: NanumBarunGothic;
	border:0;
	filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
	height: 80px;
	left: 95%;
	top: 121.6%;
}

.board_list_table{
	position: absolute;
	overflow: visible;
	border:solid 2px #BEBEBE;
	font-family: NanumBarunGothic;
	top:51%;
	font-size: 20px;
	left:5%;
	border-left: none;
	border-right:none;
	height:8%;
	width:90%;
	border-collapse: collapse;
}

th{
	border:1px solid black;
	border-left:none;
	border-right:none;
	padding:10px;
}

td{
	padding:10px;
}
</style>