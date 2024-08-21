describe('Article list is opened', () => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.visit('articles');
        });
    });
    it('Article list should displayed for auth user', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
});
