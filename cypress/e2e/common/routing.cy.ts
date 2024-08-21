import { selectByTestId } from 'cypress/e2e/helpers/selectByTestId';

describe('Routing', () => {
    describe('Unauthorized user', () => {
        it('Should open the main page', () => {
            cy.visit('/');
            cy.getByTestId('MainPage').should('exist');
        });
        it('Profile page should redirect on the main page', () => {
            cy.visit('/profile/1');
            cy.getByTestId('MainPage').should('exist');
        });
        it('Unexisting route should redirect on the main page', () => {
            cy.visit('/sdcsdcsdcsdcsdcsdcsdcsd');
            cy.getByTestId('NotFoundPage').should('exist');
        });
    });

    describe('Authorized user', () => {
        beforeEach(() => {
            cy.login();
        });
        it('Profile page should redirect on the main page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
        it('Profile page should redirect on the main page', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlePage')).should('exist');
        });
    });
});
