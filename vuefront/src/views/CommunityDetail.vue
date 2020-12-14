<template>
    <div class="community_detail">
        <div id="community_update_bg">
			<p id="community_update_introduce_text">커뮤니티</p>
			<p id="community_update_sub_text">서비스 후기 및 다양한 육아 꿀팁을 공유해보세요!</p>

			<form>
				<table class="community_info_table">
					<colgroup>
						<col width="15%" />
						<col width="*" />
					</colgroup>
					<tr>
						<td><p id="community_subject">수정할 게시글 제목</p><br><p id="community_writer_info">작성자명 / 작성시간</p></td>
					</tr>
				</table>

				<table class="community_content_table">
					<colgroup>
						<col width="15%" />
						<col width="*" />
					</colgroup>
					<tr>
						<td><p id="community_contents">수정할 게시글 내용</p></td>
					</tr>
				</table>
			</form>
		
    	</div>
		<button v-on:click="contents_modified" id="contents_modified">수정</button>
		<button v-on:click="contents_deleted" id="contents_deleted">삭제</button>
        <div id="community_update_footer">
			<p id="developer_contact">T. 010-5197-3175</p><p id="developer_email">E. admin@pp-teacher.io</p>
			<p id="developer_name">원준수 / 김동주 / 김수양 / 유정호 / 유재혁</p>
			<a href="#"><button v-on:click="goUp" id="go-up"></button></a>
		</div>
    </div>
</template>

<style scoped>
#community_update_bg{
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

#community_update_bg::before{
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

#community_update_introduce_text{
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

#community_update_sub_text{
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

#community_update_subject{
    position: absolute;
	overflow: visible;
	width: 838px;
	height: 68px;
    font-family: NanumBarunGothic;
    font-size: 21px;
    left:30%;
	top: 45%;
    opacity: 0.45;
	fill: rgba(255,255,255,1);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
    text-indent:0.5em;
}

#community_update_contents{
    position: absolute;
	overflow: visible;
	width: 840px;
	height: 540px;
    font-family: NanumBarunGothic;
    font-size: 21px;
    left:30%;
    padding-top:0.7%;
	top: 54%;
    opacity: 0.45;
	fill: rgba(255,255,255,1);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
    resize: none;
	shape-rendering: auto;
    text-indent:0.5em;
}

#community_update_footer::before{
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

#contents_update{
    left:68%;
    top:113%;
    width:122px;
    height:45px;
    border-radius: 8px;
    color: rgba(255,255,255,1);
    font-family: NanumBarunGothic;
    border:0;
    background-color: rgba(246,115,149,1);
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
    position: absolute;
	overflow: visible;
}

.community_info_table{
	position: absolute;
	overflow: visible;
	border:solid 2px #BEBEBE;
	top:110%;
	left:25%;
	height:35%;
	width:50%;
}

.community_content_table{
	position: absolute;
	overflow: visible;
	border:solid 2px #BEBEBE;
	top:150%;
	left:25%;
	height:175%;
	width:50%;
}

#contents_modified{
    left:61.5%;
    top:113%;
    width:122px;
    height:45px;
    border-radius: 8px;
    color: rgba(255,255,255,1);
    font-family: NanumBarunGothic;
    border:0;
    background-color: rgba(246,115,149,1);
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
    position: absolute;
	overflow: visible;
}

#contents_deleted{
	left:68.5%;
    top:113%;
    width:122px;
    height:45px;
    border-radius: 8px;
    color: rgba(255,255,255,1);
    font-family: NanumBarunGothic;
    border:0;
    background-color: rgba(246,115,149,1);
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
    position: absolute;
	overflow: visible;
}

#community_subject{
	left: 1%;
	top: 15%;
	position: absolute;
	overflow: visible;
	width: 307px;
	white-space: nowrap;
	line-height: 57px;
	margin-top: -8.5px;
	text-align: center;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: lighter;
	font-size: 40px;
	color: rgba(0,0,0,1);
	letter-spacing: 0.1px;
}

#community_writer_info{
	left: 1.2%;
	top: 71px;
	position: absolute;
	overflow: visible;
	width: 179px;
	white-space: nowrap;
	line-height: 31px;
	margin-top: -4.5px;
	text-align: center;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: lighter;
	font-size: 22px;
	color: rgba(168,168,168,1);
	letter-spacing: 0.1px;
}

#community_contents{
	left: 1.2%;
	top:4%;
	position: absolute;
	overflow: visible;
	width: 179px;
	white-space: nowrap;
	line-height: 31px;
	margin-top: -4.5px;
	text-align: center;
	font-family: NanumBarunGothic;
	font-style: normal;
	font-weight: lighter;
	font-size: 22px;
	color: rgba(168,168,168,1);
	letter-spacing: 0.1px;
}
</style>