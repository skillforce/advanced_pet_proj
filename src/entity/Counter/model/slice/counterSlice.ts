import { PayloadAction } from '@reduxjs/toolkit';
import { CounterScheme } from '../types/CounterScheme';
import { buildSlice } from '@/shared/lib/store';

const initialState:CounterScheme = {
    value: 0,
};

export const counterSlice = buildSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        add: (state, { payload }:PayloadAction<number>) => {
            state.value += payload;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

export const {
    actions: counterActions,
    reducer: counterReducer,
    useActions: useCounterActions,
} = counterSlice;

export default counterSlice.reducer;
