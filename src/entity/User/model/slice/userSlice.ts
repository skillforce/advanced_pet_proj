import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AUTH_USER_LOCAL_STORAGE } from 'shared/consts/localStorage';
import { UserScheme, UserStateScheme } from '../types/UserStateScheme';

const initialState:UserStateScheme = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action:PayloadAction<UserScheme>) => {
            state.authData = action.payload;
        },
        logout: (state) => {
            localStorage.removeItem(AUTH_USER_LOCAL_STORAGE);
            state.authData = undefined;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(AUTH_USER_LOCAL_STORAGE);
            if (user) {
                console.log('alaka');
                state.authData = JSON.parse(user);
            }
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;

export default userSlice.reducer;
