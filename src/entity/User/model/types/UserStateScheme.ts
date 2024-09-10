import { UserRoles } from '../consts/consts';
import { FeatureFlag } from '@/shared/types/featureFlag';

export interface UserScheme {
    username: string;
    avatar?: string;
    id: string;
    roles?: UserRoles[];
    features?: FeatureFlag;
}

export interface UserStateScheme {
    authData?: UserScheme;
    _inited?: boolean;
}
