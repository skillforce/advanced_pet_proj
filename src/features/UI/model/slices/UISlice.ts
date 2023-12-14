import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UISchema } from '../../model/types/UISchema';

const initialState:UISchema = {
    scroll: {},
};

export const UISlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }:PayloadAction<{path:string, position:number}>) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { actions: uiActions } = UISlice;
export const { reducer: uiReducer } = UISlice;

export default UISlice.reducer;
