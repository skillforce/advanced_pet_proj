import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line skillforce-fsd-plugin/layer-imports
import { UserRoles } from '@/entity/User';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean
    roles?: UserRoles[]
}
