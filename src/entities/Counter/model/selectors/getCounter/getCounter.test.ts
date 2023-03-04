import { getCounter } from 'entities/Counter/model/selectors/getCounter/getCounter';
import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { CounterScheme } from '../../types/CounterScheme';

describe('getCounter', () => {
    test('should return counter value', () => {
        const state:DeepPartial<StateSchema> = { counter: { value: 10 } };
        const expectedCounterState:CounterScheme = { value: 10 };
        expect(getCounter(state as StateSchema)).toEqual(expectedCounterState);
    });
});
