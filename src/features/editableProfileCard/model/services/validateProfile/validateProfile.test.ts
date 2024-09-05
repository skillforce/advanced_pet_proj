import { Currency } from '@/entity/Currency';
import { Country } from '@/entity/Country';
import { Profile } from '@/entity/Profile';
import { ValidateProfileError } from '../../consts/consts';
import { validateProfile } from './validateProfile';

const profileDataMockCorrect: Profile = {
    currency: Currency.USD,
    country: Country.Ukraine,
    firstName: 'Denis',
    lastName: 'Tatarinov',
    city: 'Mogilev',
    age: 26,
    userName: 'sarcasm1613',
    avatar: '',
};

describe('validateProfile.test', () => {
    test('test validateProfile success', () => {
        const result = validateProfile(profileDataMockCorrect);

        expect(result).toEqual([]);
    });
    test('test validateProfile without firstName and lastName', () => {
        const result = validateProfile({
            ...profileDataMockCorrect,
            firstName: '',
            lastName: '',
        });
        const errorArr: ValidateProfileError[] = [
            ValidateProfileError.INCORRECT_USER_DATA,
        ];

        expect(result).toEqual(errorArr);
    });
    test('test validateProfile with incorrect age', () => {
        const result = validateProfile({ ...profileDataMockCorrect, age: NaN });
        const errorArr: ValidateProfileError[] = [
            ValidateProfileError.INCORRECT_AGE,
        ];

        expect(result).toEqual(errorArr);
    });
    test('test validateProfile with incorrect country', () => {
        const result = validateProfile({
            ...profileDataMockCorrect,
            country: undefined,
        });
        const errorArr: ValidateProfileError[] = [
            ValidateProfileError.INCORRECT_COUNTRY,
        ];

        expect(result).toEqual(errorArr);
    });
    test('test validateProfile with all validate errors', () => {
        const result = validateProfile({
            ...profileDataMockCorrect,
            country: undefined,
            firstName: '',
            lastName: '',
            age: NaN,
        });
        const errorArr: ValidateProfileError[] = [
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ];

        expect(result).toEqual(errorArr);
    });
});
