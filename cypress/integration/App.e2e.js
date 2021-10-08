describe('App E2E', () => {
  it('헤더가 있어야 한다', () => {
    cy.visit('http://localhost:3000');

    cy.get('.site-page-header').should('have.text', '퀴즈This is a quiz test');
    cy.get('.ant-btn').should('have.text', 'START');

    cy.contains('START').click();
    cy.server();
    cy.route({
      method: 'GET',
      url: 'https://opentdb.com/api.php?amount=10',
    }).as('apiCheck');
  });
});
