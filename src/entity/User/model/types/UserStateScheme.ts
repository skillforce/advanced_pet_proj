import { UserRoles } from '../consts/consts';

export interface UserScheme {
    username: string;
    avatar?: string;
    id: string;
    roles?: UserRoles[];
}

export interface UserStateScheme {
    authData?: UserScheme;
    _inited?: boolean;
}
