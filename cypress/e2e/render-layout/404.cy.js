/// <reference types='cypress' />

describe('Pages Render: 404 Page', () => {
  it('should render the Desktop 404 page and its contents', () => {
    cy.visit('/thisisnotaroutethatgoesanywhere', { failOnStatusCode: false });
    cy.assertDesktopPublicLayout();
    cy.getBySel('page-container')
      .should('exist')
      .and('be.visible')
      .children()
      .should('have.length', 2);
    cy.getBySel('page-title')
      .should('exist')
      .and('be.visible')
      .and('contain.text', 'notFound()');
    cy.getBySel('main-content')
      .should('exist')
      .and('be.visible')
      .children()
      .should('have.length', 3);
    // page text
    cy.getBySel('not-found-feedback')
      .should('exist')
      .and('be.visible')
      .and('include.text', "Uh oh, couldn't find that");
    cy.getBySel('not-found-feedback-link-text')
      .should('exist')
      .and('be.visible')
      .and('include.text', 'Click')
      .and('include.text', 'here')
      .and('include.text', 'to go back home.');
    cy.getBySel('not-found-feedback-link')
      .should('exist')
      .and('be.visible')
      .and('contain.text', 'here');
    // image
    cy.getBySel('not-found-image-container')
      .should('exist')
      .children()
      .should('have.length', 1);
    cy.getBySel('not-found-image').should('exist').and('be.visible');
  });
});
