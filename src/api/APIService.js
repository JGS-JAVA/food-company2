import axios from "axios";

const API_FOOD_URL = 'http://localhost:8000';

const APIService = {
    /**
     * 음료 목록을 가져오는 함수
     */
    fetchDrinks: function (setDrinks) {
        axios.get(`${API_FOOD_URL}/drinks`)
            .then(response => setDrinks(response.data))
            .catch(error => console.error('음료 데이터를 불러오는 중 오류 발생:', error));
    },

    /**
     * 스낵 목록을 가져오는 함수
     */
    fetchSnacks: function (setSnacks) {
        axios.get(`${API_FOOD_URL}/snacks`)
            .then(response => setSnacks(response.data))
            .catch(error => console.error('음료 데이터를 불러오는 중 오류 발생:', error));
    },

    /**
     * 특정 ID의 스낵을 가져오는 함수
     */
    fetchSnackById: function (id, onSuccess, onError) {
        axios.get(`${API_FOOD_URL}/snacks/${id}`)
            .then(response => {
                if (onSuccess) onSuccess(response.data);
            })
            .catch(error => {
                console.error(`스낵 ID ${id} 정보를 불러오는 중 오류 발생:`, error);
                if (onError) onError(error);
            });
    }
};

export default APIService;
