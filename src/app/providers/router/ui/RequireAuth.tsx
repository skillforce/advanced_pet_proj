import { useSelector } from 'react-redux';
import { getUserAuthData, getUserRoles } from 'entity/User';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import { UserRoles } from 'entity/User/model/types/UserStateScheme';
import { useMemo } from 'react';

type ProtectedRouteProps = {
    children:JSX.Element
    roles?:UserRoles[]
}

export const ProtectedRoute = ({ children, roles }:ProtectedRouteProps) => {
    const location = useLocation();
    const auth = useSelector(getUserAuthData);
    const currentUserRoles = useSelector(getUserRoles);

    const isWithRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }
        return roles.some((role) => {
            const hasRole = currentUserRoles?.includes(role);
            return hasRole;
        });
    }, [currentUserRoles, roles]);

    if (!auth) {
        return <Navigate to={RoutePaths.main} state={{ from: location }} replace />;
    }
    if (!isWithRequiredRoles) {
        return <Navigate to={RoutePaths.forbidden_page} state={{ from: location }} replace />;
    }

    return children;
};
