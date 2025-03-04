import axios from "axios";

const API_FOOD_URL = 'http://localhost:8080';

const APIService = {

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
