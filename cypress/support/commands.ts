import { loginCypress } from 'cypress/support/commands/login';

Cypress.Commands.add('login', loginCypress);

declare global {
  namespace Cypress {
    interface Chainable {
      login(email?: string, password?: string): Chainable<void>
    }
  }
}

export {};
