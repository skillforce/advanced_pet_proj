import { Currency } from 'entity/Currency';
import { Country } from 'entity/Country';
import { Profile } from 'entity/Profile';
import { ProfileSchema, ValidateProfileError } from '../types/editableProfileCardSchema';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { profileActions, profileReducer } from './profileSlice';

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
    test('test update profile service pending', () => {
        const state:DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
            error: 'Error!',
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending))
            .toEqual({
                error: undefined,
                validateErrors: undefined,
                isLoading: true,
            });
    });
    test('test update profile service fulfilled', () => {
        const state:DeepPartial<ProfileSchema> = {
            isLoading: true,
            readonly: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
            data: undefined,
            form: undefined,
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(profileMockData, '')))
            .toEqual({
                validateErrors: undefined,
                isLoading: false,
                readonly: true,
                data: profileMockData,
                form: profileMockData,
            });
    });
});
