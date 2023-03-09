import { CounterScheme } from 'entity/Counter';
import { UserStateScheme } from 'entity/User';
import { LoginSchema } from 'features/AuthByUserName';

export interface StateSchema {
    counter:CounterScheme;
    user: UserStateScheme;
    loginForm:LoginSchema
}
