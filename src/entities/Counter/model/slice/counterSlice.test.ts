import { DeepPartial } from '@reduxjs/toolkit';
import { counterReducer, CounterScheme } from 'entities/Counter';
import { counterActions } from 'entities/Counter/model/slice/counterSlice';

describe('counterSlice', () => {
    test('increment action', () => {
        const state:DeepPartial<CounterScheme> = { value: 1 };
        expect(counterReducer(state as CounterScheme, counterActions.increment())).toEqual({ value: 2 });
    });
    test('decrement action', () => {
        const state:DeepPartial<CounterScheme> = { value: 1 };
        expect(counterReducer(state as CounterScheme, counterActions.decrement())).toEqual({ value: 0 });
    });
    test('unexpected action', () => {
        const state:DeepPartial<CounterScheme> = { value: 1 };
        expect(counterReducer(state as CounterScheme, { type: 'undefinedType' })).toEqual({ value: 1 });
    });
    test('with initial state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
    });
});
