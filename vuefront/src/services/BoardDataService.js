import http from '../http-common'

class BoardDataService {
    getAll() {
        return http.get('/board');
    }

    get(id){
        // alert(`dataservice${id}`) 뜸.
        return http.get(`/board/${id}`)
    }

    createMember(){
        return http.get('/')
    }

    createBoard(){

    }

    deleteBoard(id) {
        return http.delete(`/board/${id}`);
    }

}

export default new BoardDataService();