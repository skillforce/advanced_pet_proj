import axios from 'axios';
import { AUTH_USER_LOCAL_STORAGE } from 'shared/consts/localStorage';

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(AUTH_USER_LOCAL_STORAGE),
    },
});
