import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
    test('should return login error field', () => {
        const state:DeepPartial<StateSchema> = { loginForm: { error: 'TestError' } };
        const expectedLoginError: string = 'TestError';
        expect(getLoginError(state as StateSchema)).toBe(expectedLoginError);
    });
    test('should return undefined(error case)', () => {
        const state:DeepPartial<StateSchema> = {};
        const expectedLoginError: string|undefined = undefined;
        expect(getLoginError(state as StateSchema)).toBe(expectedLoginError);
    });
});
