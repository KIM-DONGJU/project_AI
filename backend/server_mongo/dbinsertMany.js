var Client = require('mongodb').MongoClient;

Client.connect('mongodb://localhost:27017/school', function(error, database){
    if(error) {
        console.log(error);
    } else {
        // 몽고DB 3.0 이상 사용하면 db에 경로(table..?)를 표시해줘야함
        const db = database.db('school');
        // 1. 입력할 documents 를 미리 생성
        var jordan = {name:'Jordan', age:16, gender:'M'};
        var amanda = {name:'Amanda', age:17, gender:'F'};
        var jessica = {name:'Jessica', age:15, gender:'F'};
        var james = {name:'James', age:19, gender:'M'};
        var catherine = {name:'Catherine', age:18, gender:'F'}

        // 2. insertMany( ) 함수에 배열 형태로 입력
        db.collection('student').insertMany([jordan,amanda,jessica,james,catherine]);

        // 근데 얘는 db가 아니라 database(함수에서 선언한 파라미터)를 종료 시키는거임
        database.close();
    }
});