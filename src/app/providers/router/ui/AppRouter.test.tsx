import { screen } from '@testing-library/react';
import AppRouter from './AppRouter';
import {
    getRouteAbout,
    getRouteAdminPanel,
    getRouteProfile,
} from '@/shared/consts/router';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { UserRoles } from '@/entity/User';

describe('app/router', () => {
    test('Page should be rendered', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAbout(),
        });

        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });

    test('Page not found should be rendered', async () => {
        componentRender(<AppRouter />, {
            route: '/wrongRouteAlalala',
        });

        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });

    test('Not authorized user should be redirected on MainPage', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });

    test('access to profile page for authorized user', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialStoreState: {
                user: {
                    _inited: true,
                    // that's mean that user is authorized in system (authData !== undefined)
                    authData: {},
                },
            },
        });

        const page = await screen.findByTestId('ProfilePage');
        expect(page).toBeInTheDocument();
    });

    test("user doesn't have appropriate role to get access to the adminPanel page", async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialStoreState: {
                user: {
                    _inited: true,
                    // that's mean that user doesn't have ADMIN role to get access to admin panel page
                    authData: {
                        roles: [UserRoles.USER],
                    },
                },
            },
        });

        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });
    test('user has appropriate role to get access to the adminPanel page', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialStoreState: {
                user: {
                    _inited: true,
                    // that's mean that user doesn't have ADMIN role to get access to admin panel page
                    authData: {
                        roles: [UserRoles.ADMIN],
                    },
                },
            },
        });

        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});
