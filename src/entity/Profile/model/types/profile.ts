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
}

export interface ProfileSchema {
    data?:Profile;
    form?:Profile;
    error?:string;
    isLoading:boolean;
    readonly:boolean;
}
