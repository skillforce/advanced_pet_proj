import { UserRoles } from '../consts/consts';
import { FeatureFlag } from '@/shared/types/featureFlag';
import { JsonSettings } from './jsonSettings';

export interface UserScheme {
    username: string;
    avatar?: string;
    id: string;
    roles?: UserRoles[];
    features?: FeatureFlag;
    jsonSettings?: JsonSettings;
}

export interface UserStateScheme {
    authData?: UserScheme;
    _inited?: boolean;
}
