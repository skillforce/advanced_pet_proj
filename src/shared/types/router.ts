import { RouteProps } from 'react-router-dom';
import { UserRoles } from '@/entity/User';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean
    roles?: UserRoles[]
}
