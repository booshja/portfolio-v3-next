/// <reference types='cypress' />

// fixtures
import isData from '../../fixtures/is.json';

describe('Pages Render: "Is" Page', () => {
  it('should render the Desktop Is page and its contents', () => {
    cy.visit('/');
    cy.assertDesktopPublicLayout();
    cy.location('pathname').should((loc) => {
      expect(loc).to.eq('/');
    });
    cy.getBySel('page-container')
      .should('exist')
      .and('be.visible')
      .children()
      .should('have.length', 3);
    cy.getBySel('my-name')
      .should('exist')
      .and('be.visible')
      .and('contain.text', isData.name);
    cy.getBySel('landing-divider').should('exist').and('be.visible');
    cy.getBySel('my-title')
      .should('exist')
      .and('be.visible')
      .and('contain.text', isData.title);
  });
});
