import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entity/User';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';

export const ProtectedRoute = ({ children }:{children:JSX.Element}) => {
    const auth = useSelector(getUserAuthData);

    const location = useLocation();
    if (!auth) {
        return <Navigate to={RoutePaths.main} state={{ from: location }} replace />;
    }

    return children;
};
