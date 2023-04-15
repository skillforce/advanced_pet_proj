import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './LoginSlice';

describe('LoginSlice test', () => {
    test('set login field action', () => {
        const state:DeepPartial<LoginSchema> = { login: '' };
        expect(loginReducer(state as LoginSchema, loginActions.setLogin('Denis'))).toEqual({ login: 'Denis' });
    });
    test('set password field', () => {
        const state:DeepPartial<LoginSchema> = { password: '' };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('123'))).toEqual({ password: '123' });
    });
});
