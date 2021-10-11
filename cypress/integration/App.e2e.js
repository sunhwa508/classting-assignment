describe('App E2E', () => {
  it('헤더가 있어야 한다', () => {
    cy.visit('/');

    cy.get('.site-page-header').should('have.text', '퀴즈This is a quiz test');
    cy.get('.ant-btn').should('have.text', 'START');

    cy.contains('START').click();
    cy.server();
    cy.route({
      method: 'GET',
      url: 'https://opentdb.com/api.php?amount=10',
    }).as('apiCheck');

    cy.get('.ant-card-body').click({ multiple: true, force: true });

    cy.get('.ant-card-body').click({ multiple: true, force: true });
    cy.get('.ant-btn').should('have.text', '건너뛰기다음문제');

    cy.contains('다음문제').click();
    cy.contains('건너뛰기').click();
    cy.contains('건너뛰기').click();
    cy.contains('건너뛰기').click();
    cy.contains('건너뛰기').click();
    cy.contains('건너뛰기').click();
    cy.contains('건너뛰기').click();
    cy.contains('건너뛰기').click();
    cy.contains('건너뛰기').click();
    cy.contains('건너뛰기').click();

    cy.get('.wrong-note').should('have.text', '오답노트').click();
    cy.get('.anticon-home').click();

    cy.get('.ant-btn-lg').should('have.text', 'RESTART').click();
  });
});
