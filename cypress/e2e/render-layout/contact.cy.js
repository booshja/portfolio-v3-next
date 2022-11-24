/// <reference types='cypress' />

// fixtures
import contactData from '../../fixtures/contact.json';

describe('Pages Render: Contact Page', () => {
  it('should render the Desktop Contact page and its contents', () => {
    cy.visit('/contact');
    cy.location('pathname').should((loc) => {
      expect(loc).to.eq('/about');
    });
    cy.assertDesktopPublicLayout();
    cy.getBySel('page-container')
      .should('exist')
      .children()
      .should('have.length', 3);
  });
});
