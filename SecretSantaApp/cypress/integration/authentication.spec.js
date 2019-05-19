describe('Login Page', () => {
  beforeEach(() => {});

  it('logintest', () => {
    cy.login();
  });

  it('login page', () => {
    cy.visit('/login');
    cy.get('[data-cy=login-email]').type('robbe.decorte@student.hogent.be');
    cy.get('[data-cy=login-password]').type('P@ssword1');
    cy.get('[data-cy=login-button').click();
    // at last one recipe should be visible (i.e. we should have been forwarded to the recipe page)
    cy.get('[data-cy=wishlist-title]').should('be.visible');
  });
});
