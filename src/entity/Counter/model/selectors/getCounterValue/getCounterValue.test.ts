import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    test('should return correct value of counter', () => {
        const state:DeepPartial<StateSchema> = { counter: { value: 10 } };
        const expectedResult:number|undefined = state.counter?.value;
        expect(getCounterValue(state as StateSchema)).toEqual(expectedResult);
    });
});
