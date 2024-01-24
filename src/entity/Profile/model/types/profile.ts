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
