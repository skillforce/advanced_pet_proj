import { createSlice } from '@reduxjs/toolkit';
import { UserStateScheme } from '../types/UserStateScheme';

const initialState:UserStateScheme = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;

export default userSlice.reducer;
