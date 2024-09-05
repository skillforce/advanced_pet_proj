import { StateSchema } from '@/app/providers/StoreProvider';
import { LoginSchema } from '../../types/loginSchema';
import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
    test('should return all login scheme fields', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                login: 'Denis',
                isLoading: false,
                error: 'TestError',
                password: '12345',
            },
        };
        const expectedLoginError: LoginSchema = {
            login: 'Denis',
            isLoading: false,
            error: 'TestError',
            password: '12345',
        };
        expect(getLoginState(state as StateSchema)).toEqual(expectedLoginError);
    });
    test('should return undefined(error case)', () => {
        const state: DeepPartial<StateSchema> = {};
        const expectedLoginError: string | undefined = undefined;
        expect(getLoginState(state as StateSchema)).toBe(expectedLoginError);
    });
});
