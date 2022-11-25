/// <reference types='cypress' />

// fixtures
import isData from '../../fixtures/is.json';
// viewports
import { displayValues } from '../../../src/styles/breakpoints';

describe('Pages Render: "Is" Page', () => {
  displayValues.forEach((size) => {
    it(`should render the Is page on ${size[0]}px x ${size[1]} and its contents`, () => {
      cy.viewport(size[0], size[1]);
      cy.visit('/');
      if (size[0] < 768) {
        cy.assertMobilePublicLayout();
      } else if (size[0] >= 768) {
        cy.assertDesktopPublicLayout();
      }
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
});
