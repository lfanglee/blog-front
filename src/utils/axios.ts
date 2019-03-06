import axios, { AxiosRequestConfig } from 'axios';
import * as queryString from 'query-string';

const instance = axios.create({
    baseURL: '/api'
});

instance.interceptors.request.use((data: AxiosRequestConfig) => {
    if (['post', 'put', 'delete', 'patch'].includes(data.method)) {
        data.data = queryString.stringify(data.data);
    }
    return data;
}, error => {
    return Promise.reject(error);
});

instance.interceptors.response.use((res) => {
    return res;
}, error => {
    if (!error.response) {
        if (error.message.includes('timeout')) {
            console.log('请求超时');
        }
    }
    return Promise.reject(error);
});

export default instance;