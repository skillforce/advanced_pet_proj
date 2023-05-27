import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entity/Currency';
import { Country } from 'entity/Country';
import { getProfileForm } from './getProfileForm';
import { Profile } from '../../types/profile';

describe('getProfileForm.test', () => {
    test('should return profile Form', () => {
        const formDataMock:Profile = {
            currency: Currency.USD,
            country: Country.Ukraine,
            firstName: 'Denis',
            lastName: 'Tatarinov',
            city: 'Mogilev',
            age: 26,
            userName: 'sarcasm1613',
            avatar: '',
        };
        const state:DeepPartial<StateSchema> = { profile: { form: formDataMock } };
        expect(getProfileForm(state as StateSchema)).toEqual(formDataMock);
    });
    test('should return undefined', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
