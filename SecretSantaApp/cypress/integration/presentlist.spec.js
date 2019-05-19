describe('Present list test', function () {
  beforeEach(function () {
    cy.login();
  })
});

it('Gets wishlist from server', () => {
  cy.server();
  cy.route({
    method: 'GET',
    url: '/api/wishlists',
    status: 201,
    response: 'fixture:wishlist.json'
  });
  cy.visit('/login');
  cy.get('[data-cy=login-email]').type('robbe.decorte@student.hogent.be');
  cy.get('[data-cy=login-password]').type('P@ssword1');
  cy.get('[data-cy=login-button').click();
  cy.visit('/dashboard');
  cy.get('[data-cy=filterMenu]').click();
  cy.get('[data-cy=filterInput]').type('mo');
  cy.get('[data-cy=wishlistCard]').should('have.length', 1);
});
