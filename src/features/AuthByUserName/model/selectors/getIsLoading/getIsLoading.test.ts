import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getIsLoading', () => {
    test('should return isLoading field', () => {
        const state:DeepPartial<StateSchema> = { loginForm: { isLoading: true } };
        const expectedLoginError: boolean = true;
        expect(getLoginIsLoading(state as StateSchema)).toBe(expectedLoginError);
    });
    test('should return undefined(error case)', () => {
        const state:DeepPartial<StateSchema> = {};
        const expectedLoginError: undefined = undefined;
        expect(getLoginIsLoading(state as StateSchema)).toBe(expectedLoginError);
    });
});
