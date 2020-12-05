const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.port || 3000;

let corsOptions = {
    origin: 'http;//localhost:8081'
}

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res) =>{
    res.json({message: "Welcome"});
})

const db = require('./app/models');
const controller = require('./app/controllers/member.controller');

const run = async () => {

    const tut1 = await controller.createMember({
        member_email : 'junghoyou2@gmail.com',
        member_pw : '1234',
        member_nickname: 'fweqws',
        member_google: 1
    });

    await controller.createBoard(tut1.id, {
        board_title : 'this is board_title',
        board_content : 'here is board_content'
    })
};

//db.sequelize.sync();
db.sequelize.sync({force:true}).then(() => { // 개발 환경에서 자동 DB drop 및 재생성 설정 -> force : true
    
    console.log('Drop and re-sync db.');
    run();
});

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
})