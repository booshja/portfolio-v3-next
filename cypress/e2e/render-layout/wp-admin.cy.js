/// <reference types='cypress' />

// viewports
import { displayValues } from '../../../src/styles/breakpoints';

describe('Pages Render: WP-Admin Page', () => {
  displayValues.forEach((size) => {
    it(`should render the WP-Admin page on ${size[0]}px x ${size[1]} and its contents`, () => {
      cy.viewport(size[0], size[1]);
      cy.visit('/');
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
});
