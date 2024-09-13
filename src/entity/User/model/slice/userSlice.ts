import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AUTH_USER_LOCAL_STORAGE } from '@/shared/consts/localStorage';
import { UserScheme, UserStateScheme } from '../types/UserStateScheme';
import { setFeatureFlags } from '@/shared/lib/features';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { JsonSettings } from '../types/jsonSettings';
import { initAuthData } from '../services/initAuthData';

const initialState: UserStateScheme = {
    _inited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<UserScheme>) => {
            state.authData = action.payload;
            setFeatureFlags(action.payload.features);
            localStorage.setItem(AUTH_USER_LOCAL_STORAGE, action.payload.id);
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(AUTH_USER_LOCAL_STORAGE);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                saveJsonSettings.fulfilled,
                (state, { payload }: PayloadAction<JsonSettings>) => {
                    if (state.authData) {
                        state.authData.jsonSettings = payload;
                    }
                },
            )
            .addCase(
                initAuthData.fulfilled,
                (state, { payload }: PayloadAction<UserScheme>) => {
                    state.authData = payload;
                    state._inited = true;
                    setFeatureFlags(payload.features);
                },
            )
            .addCase(initAuthData.rejected, (state) => {
                if (state.authData) {
                    state._inited = true;
                }
            });
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;

export default userSlice.reducer;
