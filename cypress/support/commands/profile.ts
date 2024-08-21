import { AUTH_USER_LOCAL_STORAGE } from '../../../src/shared/consts/localStorage';

export function updateProfile(firstName:string, lastName:string) {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.FirstNameInput').clear().type(firstName);
    cy.getByTestId('ProfileCard.SurnameInput').clear().type(lastName);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
}

export function resetProfile(profileId: string) {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: {
            Authorization: `Bearer ${AUTH_USER_LOCAL_STORAGE}`,
        },
        body: {
            id: '4',
            firstName: 'Denis123',
            lastName: 'Tatarinov234',
            age: 22231,
            currency: 'RUB',
            country: 'Russia',
            city: 'Minsk',
            userName: 'ulbi Tv12',
            avatar: 'https://carnegiemnh.org/wp-content/uploads/2019/08/efcb18c281253ee89c538dd9758aee8836cd1d71.png',
        },
    });
}

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstName:string, lastName:string): Chainable<void>
            resetProfile(profileId: string): Chainable<void>
        }
    }
}
