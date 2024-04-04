import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from '@/widgets/PageLoader';
import { ProtectedRoute } from '@/app/providers/router/ui/RequireAuth';
import { routeConfig } from '@/app/providers/router/config/routeConfig';
import { AppRouteProps } from '@/shared/types/router';

function AppRouter() {
    const routeGenerator = useCallback(({
        path, authOnly, roles, element,
    }:AppRouteProps) => {
        let routeElement = (
            <Suspense fallback={<PageLoader />}>
                {element}
            </Suspense>
        );
        if (authOnly) {
            routeElement = (
                <ProtectedRoute roles={roles}>
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
