describe('My First Test', function () {
  beforeEach(function () {
    cy.login();
  });
  it('our app runs', function () {
    cy.visit('/dashboard');
    cy.get('[data-cy=filterMenu]').should('be.visible');
  });
});
