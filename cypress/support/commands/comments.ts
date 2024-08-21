import { UserScheme } from '../../../src/entity/User';

export function addComment(message:string) {
    cy.getByTestId('AddCommentForm.Input').type(message);
    cy.getByTestId('AddCommentForm.Button').click();
}

declare global {
    namespace Cypress {
        interface Chainable {
            addComment(message: string): Chainable<UserScheme>
        }
    }
}
