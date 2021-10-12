describe('App E2E', () => {
  it('classting quiz E2E test', () => {
    cy.visit('/');

    cy.get('.ant-btn').should('have.text', '수락하기 🎮');

    cy.contains('수락하기 🎮').click();
    cy.server();
    cy.route({
      method: 'GET',
      url: 'https://opentdb.com/api.php?amount=10',
    }).as('apiCheck');

    cy.get('.ant-card-body').click({ multiple: true, force: true });

    cy.get('.ant-card-body').click({ multiple: true, force: true });
    cy.get('.ant-btn').should('have.text', '건너뛰기다음문제');

    cy.contains('다음문제').click();
    cy.get('.ant-card-body').click({ multiple: true, force: true });
    cy.contains('OK').click();
    cy.contains('다음문제').click();
    cy.get('.ant-card-body').click({ multiple: true, force: true });
    cy.contains('OK').click();
    cy.contains('다음문제').click();
    cy.get('.ant-card-body').click({ multiple: true, force: true });
    cy.contains('OK').click();
    cy.contains('건너뛰기').click();

    cy.contains('건너뛰기').click();
    cy.contains('건너뛰기').click();
    cy.contains('건너뛰기').click();
    cy.contains('건너뛰기').click();
    cy.contains('건너뛰기').click();
    cy.contains('건너뛰기').click();

    cy.get('.wrong-note').should('have.text', '오답노트').click();
    cy.get('.anticon-home').click();

    cy.get('.ant-btn-lg').contains('퀴즈가 쉽게 풀어지나? 재도전!').click();

    return false;
  });
});
