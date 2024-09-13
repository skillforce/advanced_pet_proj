import { createAsyncThunk } from '@reduxjs/toolkit';
import { userActions, UserScheme } from '@/entity/User';
import { ThunkConfig } from '@/app/providers/StoreProvider';

interface LoginByUserNameData {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    UserScheme,
    LoginByUserNameData,
    ThunkConfig<string>
>('login/loginByUsername', async (authdata, thunkAPI) => {
    const { dispatch, extra, rejectWithValue } = thunkAPI;
    try {
        const response = await extra.api.post('/login', authdata);
        if (!response.data) {
            throw new Error();
        }

        dispatch(userActions.setAuthData(response.data));

        return response.data;
    } catch (error) {
        return rejectWithValue('error');
    }
});
