import axios from 'axios';

const API_FOOD_URL = 'http://localhost:8080';

const APIService = {
    /**
     * 음료 목록을 가져오는 함수 (문제 포함)
     */
    fetchDrinks: function (onSuccess, onError) {
        axios.get(`${API_FOOD_URL}/drinks`)
            .then(
                (response) => {
                    if (onSuccess) onSuccess(response.data);
                })
            .catch(
                (error) => {
                    console.error('문제 발생:', error);
                    if (onError) onError(error);
                });
    },
    /**
     * 스낵 목록을 가져오는 함수
     * @param {Function} onSuccess - 성공 시 실행할 콜백 함수
     * @param {Function} onError - 오류 발생 시 실행할 콜백 함수
     */
    fetchSnacks: function (onSuccess, onError) {

    },


    fetchSnackById: function (id, onSuccess, onError) {

    }
};
export default APIService;
