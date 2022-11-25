/// <reference types='cypress' />

describe('Pages Render: WP-Admin Page', () => {
  it('should render the Desktop WP-Admin page and its contents', () => {
    cy.visit('/wp-admin');
    cy.location('pathname').should((loc) => {
      expect(loc).to.eq('/wp-admin');
    });
    cy.getBySel('page-container').should('exist');
    cy.getBySel('bugs-image-container').should('exist');
    cy.getBySel('bugs-image')
      .should('exist')
      .and('be.visible')
      .and('have.attr', 'alt', 'Bugs bunny no meme');
    cy.getBySel('not-found-link')
      .should('exist')
      .and('be.visible')
      .and('have.attr', 'href', '/')
      .and('contain.text', 'Go Back');
  });
});
