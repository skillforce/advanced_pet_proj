import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getUserDataByIdQuery } from '../../api/userApi';
import { UserScheme } from '../types/UserStateScheme';
import { AUTH_USER_LOCAL_STORAGE } from '@/shared/consts/localStorage';

export const initAuthData = createAsyncThunk<
    UserScheme,
    void,
    ThunkConfig<string>
>('user/initAuthData', async (_, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;

    const userId = localStorage.getItem(AUTH_USER_LOCAL_STORAGE);

    if (!userId) {
        return rejectWithValue('no user id!');
    }
    try {
        const response = await dispatch(getUserDataByIdQuery(userId)).unwrap();
        if (!response) {
            return rejectWithValue('no user with such id!');
        }
        return response;
    } catch (error) {
        return rejectWithValue('error');
    }
});
