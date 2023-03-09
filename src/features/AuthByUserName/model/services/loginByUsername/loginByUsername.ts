import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UserScheme } from 'entity/User';
import i18n from 'shared/config/i18n/i18n';

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
            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(i18n.t('Incorrect username or password'));
        }
    },
);
