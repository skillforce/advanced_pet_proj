import { AUTH_USER_LOCAL_STORAGE } from '../../../src/shared/consts/localStorage';
import { UserScheme } from '../../../src/entity/User';
import { selectByTestId } from '../../e2e/helpers/selectByTestId';

export function loginCypress(
    email: string = 'testUser',
    password: string = '12345',
) {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        body: {
            username: email,
            password,
        },
    }).then(({ body }) => {
        window.localStorage.setItem(
            AUTH_USER_LOCAL_STORAGE,
            JSON.stringify(body),
        );
        return body;
    });
}
export function getByTestId(testId: string) {
    return cy.get(selectByTestId(testId));
}
declare global {
    namespace Cypress {
        interface Chainable {
            login(email?: string, password?: string): Chainable<UserScheme>;
            getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
        }
    }
}
