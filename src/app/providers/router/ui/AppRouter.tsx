import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { AppRouteProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { ProtectedRoute } from 'app/providers/router/ui/RequireAuth';

function AppRouter() {
    const routeGenerator = useCallback(({ path, authOnly, element }:AppRouteProps) => {
        let routeElement = (
            <Suspense fallback={<PageLoader />}>
                {element}
            </Suspense>
        );
        if (authOnly) {
            routeElement = (
                <ProtectedRoute>
                    {routeElement}
                </ProtectedRoute>
            );
        }
        return (
            <Route
                key={path}
                path={path}
                element={routeElement}
            />
        );
    }, []);
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map((route) => routeGenerator(route))}
            </Routes>
        </Suspense>
    );
}

export default memo(AppRouter);
