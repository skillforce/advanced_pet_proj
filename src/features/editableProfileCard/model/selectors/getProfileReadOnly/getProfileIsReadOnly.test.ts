import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileReadOnly } from './getProfileReadOnly';

describe('getProfileIsReadOnly.test', () => {
    test('should return profile readonly', () => {
        const isReadOnlyDataMock = true;
        const state: DeepPartial<StateSchema> = {
            profile: { readonly: isReadOnlyDataMock },
        };
        expect(getProfileReadOnly(state as StateSchema)).toEqual(
            isReadOnlyDataMock,
        );
    });
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadOnly(state as StateSchema)).toEqual(undefined);
    });
});
