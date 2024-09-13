import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { JsonSettings } from '../types/jsonSettings';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';
import { getJsonSettings } from '../selectors/jsonSettings';
import { setJsonSettingsMutation } from '../../api/userApi';

export const saveJsonSettings = createAsyncThunk<
    Partial<JsonSettings>,
    JsonSettings,
    ThunkConfig<string>
>('user/saveJsonSettings', async (newJsonSettings, thunkAPI) => {
    const { rejectWithValue, getState, dispatch } = thunkAPI;
    const userData = getUserAuthData(getState());
    const currentSettings = getJsonSettings(getState());
    if (!userData) {
        return rejectWithValue('no auth data!');
    }
    try {
        const response = await dispatch(
            setJsonSettingsMutation({
                jsonSettings: {
                    ...currentSettings,
                    ...newJsonSettings,
                },
                userId: userData.id,
            }),
        ).unwrap();

        if (!response.jsonSettings) {
            return rejectWithValue('No jsonSettings data in API response');
        }
        return response.jsonSettings;
    } catch (error) {
        return rejectWithValue('error');
    }
});
