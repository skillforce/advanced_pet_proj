import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userActions, UserScheme } from 'entity/User';
import { AUTH_USER_LOCAL_STORAGE } from 'shared/consts/localStorage';

interface LoginByUserNameData {
    username: string;
    password:string;
}

export const loginByUsername = createAsyncThunk<UserScheme, LoginByUserNameData, { rejectValue : string}>(
    'login/loginByUsername',
    async (authdata, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', authdata);
            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(AUTH_USER_LOCAL_STORAGE, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('error');
        }
    },
);
