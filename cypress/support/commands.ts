import { getByTestId, loginCypress } from './commands/common';
import * as profileCommands from './commands/profile';
import * as articleCommands from './commands/article';
import * as ratingCommands from './commands/rating';
import * as commentsCommands from './commands/comments';

Cypress.Commands.add('login', loginCypress);
Cypress.Commands.add('getByTestId', getByTestId);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(articleCommands);
Cypress.Commands.addAll(commentsCommands);
Cypress.Commands.addAll(ratingCommands);

export {};
