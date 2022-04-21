import axios from 'axios';

//Axios 객체 생성
const client = axios.create();

//생성된 Axios 객체 외부 공개
export default client;