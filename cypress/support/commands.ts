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

// write fixtures intercept example
// Cypress.Commands.overwrite('intercept', () => {
//     const { FIXTURE_MODE } = process.env;
//     const fixtureName = req.METHOD + req.URL + hash(req.body);
//     if (FIXTURE_MODE === 'READ') {
//         readFixture(fixtureName)
//     }
//     if (FIXTURE_MODE === 'WRITE') {
//
//         createFixture(fixtureName, req.body);
//     }
//     if(FIXTURE_MODE === 'API'){
//
//     }
// });

export {};
