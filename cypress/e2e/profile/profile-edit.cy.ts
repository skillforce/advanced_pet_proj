let profileId = '';

describe('User came to profile page', () => {
    beforeEach(() => {
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('Profile page opened properly', () => {
        cy.getByTestId('ProfileCard.FirstNameInput').should('have.value', 'Denis123');
    });
    it('User edit profile card', () => {
        const newFirstName = 'New';
        const newLastName = 'Name';
        cy.updateProfile(newFirstName, newLastName);
        cy.getByTestId('ProfileCard.FirstNameInput').should('have.value', newFirstName);
        cy.getByTestId('ProfileCard.SurnameInput').should('have.value', newLastName);
    });
});
