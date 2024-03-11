import { StateSchema } from '@/app/providers/StoreProvider';
import { getCounter } from './getCounter';
import { CounterScheme } from '../../types/CounterScheme';

describe('getCounter', () => {
    test('should return counter value', () => {
        const state:DeepPartial<StateSchema> = { counter: { value: 10 } };
        const expectedCounterState:CounterScheme = { value: 10 };
        expect(getCounter(state as StateSchema)).toEqual(expectedCounterState);
    });
});
