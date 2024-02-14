import { Profile } from 'entity/Profile';
import { ValidateProfileError } from '../../consts/consts';

export const validateProfile = (profile?:Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }
    const {
        lastName, firstName, age, country,
    } = profile;
    const errors:ValidateProfileError[] = [];
    if (!firstName?.trim() || !lastName?.trim()) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }
    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }
    if (!country?.trim()) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }
    return errors;
};
