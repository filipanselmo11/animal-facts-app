import axios from 'axios';

const axiosIns = axios.create({
    baseURL: 'https://dog-facts-api.herokuapp.com/api/v1/resources/dogs',
    // baseURL: 'https://cat-fact.herokuapp.com'
});

export default axiosIns;