import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginValue } from './getLogin';

describe('get Login', () => {
    test('should return login field', () => {
        const state:DeepPartial<StateSchema> = { loginForm: { login: 'Denis' } };
        const expectedLoginError: string = 'Denis';
        expect(getLoginValue(state as StateSchema)).toBe(expectedLoginError);
    });
    test('should return undefined(error case)', () => {
        const state:DeepPartial<StateSchema> = {};
        const expectedLoginError: string = undefined;
        expect(getLoginValue(state as StateSchema)).toBe(expectedLoginError);
    });
});
