import axios from "axios";

const API_FOOD_URL = 'http://localhost:8000/api';

const APIService = {
    /**
     * 음료 목록을 가져오는 함수
     */
    fetchDrinks: function (onSuccess, onError) {
        axios.get(`${API_FOOD_URL}/api/drinks`)
            .then(
                (response) => {
                    console.log('데이터:', response.data);
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
     */
    fetchSnacks: function (onSuccess, onError) {
        axios.get(`${API_FOOD_URL}/api/snacks`)
            .then(
                (response) => {
                    console.log('데이터:', response.data);
                    if (onSuccess) onSuccess(response.data);
                })
            .catch(
                (error) => {
                    console.error('문제 발생:', error);
                    if (onError) onError(error);
                });
    },

    /**
     * 특정 ID의 스낵을 가져오는 함수
     */
    fetchSnackById: function (id, onSuccess, onError) {
        axios.get(`${API_FOOD_URL}/api/snacks/${id}`)
            .then(
                (response) => {
                    console.log('데이터:', response.data);
                    if (onSuccess) onSuccess(response.data);
                })
            .catch(
                (error) => {
                    console.error('문제 발생:', error);
                    if (onError) onError(error);
                });
    }
};

export default APIService;
