import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AUTH_USER_LOCAL_STORAGE } from '@/shared/consts/localStorage';
import { UserScheme, UserStateScheme } from '../types/UserStateScheme';
import { setFeatureFlags } from '@/shared/lib/features';

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
        },
        logout: (state) => {
            localStorage.removeItem(AUTH_USER_LOCAL_STORAGE);
            state.authData = undefined;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(AUTH_USER_LOCAL_STORAGE);
            state._inited = true;
            if (user) {
                const parsedUser = JSON.parse(user) as UserScheme;
                state.authData = parsedUser;
                setFeatureFlags(parsedUser.features);
            }
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;

export default userSlice.reducer;
