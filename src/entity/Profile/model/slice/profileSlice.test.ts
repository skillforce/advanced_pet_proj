import { Currency } from 'entity/Currency';
import { Country } from 'entity/Country';
import { profileActions, profileReducer } from '../slice/profileSlice';
import { Profile, ProfileSchema } from '../types/profile';

const profileMockData:Profile = {
    currency: Currency.USD,
    country: Country.Ukraine,
    firstName: 'Deniska',
    lastName: 'Tatarinovec',
    city: 'Mogilev',
    age: 26,
    userName: 'sarcasm1613',
    avatar: '',
};
describe('ProfileSlice test', () => {
    test('set readOnly action', () => {
        const state:DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true)))
            .toEqual({ readonly: true });
    });
    test('cancelEdit action', () => {
        const state:DeepPartial<ProfileSchema> = { data: profileMockData, form: { ...profileMockData, userName: '' } };
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEditing()))
            .toEqual({
                data: profileMockData,
                form: profileMockData,
                validateErrors: undefined,
                readonly: true,
            });
    });
    test('set updateProfile action', () => {
        const state:DeepPartial<ProfileSchema> = { form: profileMockData };
        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile(
            {
                ...profileMockData,
                currency: Currency.BYN,
                age: 12,
            },
        )))
            .toEqual({
                form: {
                    ...profileMockData,
                    currency: Currency.BYN,
                    age: 12,
                },
            });
    });
});
