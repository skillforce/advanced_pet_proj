import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileState } from './getProfileState';
import { ProfileSchema } from '../../types/profile';

describe('getProfileDState.test', () => {
    test('should return profile state full', () => {
        const profileStateDataMock:ProfileSchema = {
            data: {},
            form: {},
            error: '',
            isLoading: false,
            readonly: false,
            validateErrors: [],
        };
        const state:DeepPartial<StateSchema> = { profile: profileStateDataMock };
        expect(getProfileState(state as StateSchema)).toEqual(profileStateDataMock);
    });
    test('should return undefined', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getProfileState(state as StateSchema)).toEqual(undefined);
    });
});
