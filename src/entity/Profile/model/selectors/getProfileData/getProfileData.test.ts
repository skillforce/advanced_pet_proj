import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entity/Currency';
import { Country } from 'entity/Country';
import { getProfileData } from './getProfileData';
import { Profile } from '../../types/profile';

describe('getProfileData.test', () => {
    test('should return profile data', () => {
        const profileDataMock:Profile = {
            currency: Currency.USD,
            country: Country.Ukraine,
            firstName: 'Denis',
            lastName: 'Tatarinov',
            city: 'Mogilev',
            age: 26,
            userName: 'sarcasm1613',
            avatar: '',
        };
        const state:DeepPartial<StateSchema> = { profile: { data: profileDataMock } };
        expect(getProfileData(state as StateSchema)).toEqual(profileDataMock);
    });
    test('should return undefined', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
