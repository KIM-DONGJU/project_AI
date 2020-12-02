var Client = require('mongodb').MongoClient;

Client.connect('mongodb://localhost:27017/school', function(error, database){
    if(error) {
        console.log(error);
    } else {
        const db = database.db('school');

        // 1. 쿼리작성
        var query = {'gender':'M'};
        // 2. 읽어올 Field 선택
        // 주의사항 : id값을 제외한 나머지 필드는 값이 같아야함. (0은 제외, 1은 포함이라는 뜻)
        var projection = {'name':1,'age':1,'_id':0};
        // 3. find() 함수에 작성된 query와 projection을 입력
        var cursor = db.collection('student').find(query, projection);
        console.log(cursor[0]);
        cursor.each(function(err,doc){
            if(err){
                console.log(err);
            }else{
                if(doc != null){
                    console.log(doc);
                }
            }
        });
        database.close();
    }
});