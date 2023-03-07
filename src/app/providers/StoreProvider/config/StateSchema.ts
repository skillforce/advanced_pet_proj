import { CounterScheme } from 'entity/Counter';
import { UserStateScheme } from 'entity/User';

export interface StateSchema {
    counter:CounterScheme;
    user: UserStateScheme;
}
