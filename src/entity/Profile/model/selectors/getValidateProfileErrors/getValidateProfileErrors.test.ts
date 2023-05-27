import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileError } from '../../types/profile';
import { getValidateProfileErrors } from './getValidateProfileErrors';

describe('getValidateProfileError.test', () => {
    test('should return profile validate error', () => {
        const profileValidateErrorValue:ValidateProfileError[] = [
            ValidateProfileError.INCORRECT_USER_DATA,
        ];
        const state:DeepPartial<StateSchema> = { profile: { validateErrors: profileValidateErrorValue } };
        expect(getValidateProfileErrors(state as StateSchema)).toEqual(profileValidateErrorValue);
    });
    test('should return undefined', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getValidateProfileErrors(state as StateSchema)).toEqual(undefined);
    });
});
