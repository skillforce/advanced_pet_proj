let currentArticleId = '';

describe('Article list item is opened', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`articles/${article.id}`);
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });
    it('user should see article item', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });
    it('user should recommendation block for article', () => {
        cy.getByTestId('ArticleRecommendationList').should('exist');
    });
    it('if user left a comment it should appear', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('text');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });
    it('if user mark article it should be saved', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(3, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 3);
    });
});
