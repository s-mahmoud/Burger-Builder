import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-954cd.firebaseio.com/'
});

export default instance;