import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
    test('should return profile error', () => {
        const profileErrorValue = 'Error!';
        const state:DeepPartial<StateSchema> = { profile: { error: profileErrorValue } };
        expect(getProfileError(state as StateSchema)).toEqual(profileErrorValue);
    });
    test('should return undefined', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
