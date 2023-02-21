import axios from 'axios';

const axiosIns = axios.create({
    baseURL: 'https://cat-fact.herokuapp.com'
});

export default axiosIns;