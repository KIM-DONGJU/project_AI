import http from '../http-common'

class BoardDataService {
    getAll() {
        return http.get('/board');
    }

    get(id){
        return http.get(`/board/${id}`)
    }

    createMember(){
        return http.get('/')
    }

    createBoard(data){
        return http.post('/board', data)
    }

    update(data){
        return http.put('/board', data)
    }

    deleteBoard(id) {
        return http.delete(`/board/${id}`);
    }

}

export default new BoardDataService();