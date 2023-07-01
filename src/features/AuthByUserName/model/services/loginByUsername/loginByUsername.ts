import { createAsyncThunk } from '@reduxjs/toolkit';
import { userActions, UserScheme } from 'entity/User';
import { AUTH_USER_LOCAL_STORAGE } from 'shared/consts/localStorage';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface LoginByUserNameData {
    username: string;
    password:string;
}

export const loginByUsername = createAsyncThunk<UserScheme, LoginByUserNameData, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authdata, thunkAPI) => {
        const { dispatch, extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.post('/login', authdata);
            if (!response.data) {
                throw new Error();
            }
            console.log(response.data);
            localStorage.setItem(AUTH_USER_LOCAL_STORAGE, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            extra.navigate?.('/profile');

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);
