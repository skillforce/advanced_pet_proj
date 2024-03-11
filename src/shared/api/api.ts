import axios from 'axios';
import { AUTH_USER_LOCAL_STORAGE } from '@/shared/consts/localStorage';

export const $api = axios.create({
    baseURL: __API__,
});

$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = localStorage.getItem(AUTH_USER_LOCAL_STORAGE) || '';
    }
    return config;
});
