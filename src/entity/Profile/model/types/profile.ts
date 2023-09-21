import { Currency } from 'entity/Currency';
import { Country } from 'entity/Country';

export interface Profile{
    currency?: Currency,
    country?: Country,
    firstName?: string,
    lastName?: string,
    city?: string,
    age?: number,
    userName?: string,
    avatar?: string,
    id?:string
}
export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    INCORRECT_AGE = 'INCORRECT_AGE',
    NO_DATA='NO_DATA',
    SERVER_ERROR='SERVER_ERROR'
}

export interface ProfileSchema {
    data?:Profile;
    form?:Profile;
    error?:string;
    isLoading:boolean;
    readonly:boolean;
    validateErrors?:ValidateProfileError[];
}
