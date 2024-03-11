import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getPassword', () => {
    test('should return password field', () => {
        const state:DeepPartial<StateSchema> = { loginForm: { password: '12345' } };
        const expectedLoginError: string = '12345';
        expect(getLoginPassword(state as StateSchema)).toBe(expectedLoginError);
    });
    test('should return undefined(error case)', () => {
        const state:DeepPartial<StateSchema> = {};
        const expectedLoginError: string|undefined = undefined;
        expect(getLoginPassword(state as StateSchema)).toBe(expectedLoginError);
    });
});
