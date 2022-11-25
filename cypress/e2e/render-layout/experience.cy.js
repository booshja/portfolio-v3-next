/// <reference types='cypress' />

// fixtures
import expData from '../../fixtures/experience.json';
// viewports
import { displayValues } from '../../../src/styles/breakpoints';

describe('Pages Render: Experience Page', () => {
  displayValues.forEach((size) => {
    it(`should render the Experience page on ${size[0]}px x ${size[1]}px and its contents`, () => {
      cy.viewport(size[0], size[1]);
      cy.visit('/');
      cy.visit('/experience');
      cy.location('pathname').should((loc) => {
        expect(loc).to.eq('/experience');
      });
      if (size[0] < 768) {
        cy.assertMobilePublicLayout();
      } else if (size[0] >= 768) {
        cy.assertDesktopPublicLayout();
      }
      cy.getBySel('page-container').should('exist');
      cy.getBySel('page-title')
        .should('exist')
        .and('be.visible')
        .and('contain.text', 'experience()');
      cy.getBySel('main-container')
        .should('exist')
        .children()
        .should('have.length', 1);
      // exp list
      cy.getBySel('exp-list')
        .should('exist')
        .and('be.visible')
        .children()
        .should('have.length', expData.projects.length);
      // exp item
      cy.getBySel('exp-item').should('have.length', expData.projects.length);
      cy.getBySel('exp-item').eq(0).children().should('have.length', 2);
      cy.getBySel('exp-item-left')
        .eq(0)
        .should('exist')
        .and('be.visible')
        .children()
        .should('have.length', 4);
      cy.getBySel('exp-item-name')
        .eq(0)
        .should('exist')
        .and('be.visible')
        .and('contain.text', `${expData.projects[0].name}:`);
      cy.getBySel('exp-item-description')
        .eq(0)
        .should('exist')
        .and('be.visible')
        .and('include.text', expData.projects[0].description);
      cy.getBySel('description-label-span')
        .should('exist')
        .and('be.visible')
        .and('contain.text', 'description: ');
      cy.getBySel('exp-item-thoughts')
        .eq(0)
        .should('exist')
        .and('be.visible')
        .and('include.text', expData.projects[0].thoughts);
      cy.getBySel('thoughts-label-span')
        .should('exist')
        .and('be.visible')
        .and('contain.text', 'thoughts: ');
      // tag list
      cy.getBySel('exp-item-tag-list').eq(0).should('exist');
      cy.getBySel('exp-item-tag-list')
        .eq(0)
        .children()
        .should('have.length', expData.projects[0].tags.length);
      cy.getBySel('exp-item-tag-list')
        .eq(0)
        .children()
        .each(($el, idx) => {
          cy.wrap($el)
            .should('exist')
            .and('be.visible')
            .and('contain.text', expData.projects[0].tags[idx]);
        });
      // right side
      cy.getBySel('exp-item-right')
        .eq(0)
        .should('exist')
        .and('be.visible')
        .children()
        .should('have.length', 1);
      cy.getBySel('exp-card')
        .eq(0)
        .should('exist')
        .and('be.visible')
        .children()
        .should('have.length', 1);
      cy.getBySel('exp-card-inner')
        .eq(0)
        .should('exist')
        .and('be.visible')
        .children()
        .should('have.length', 2);
      cy.getBySel('exp-card-inner-front')
        .eq(0)
        .should('exist')
        .and('be.visible')
        .children()
        .should('have.length', 2);
      cy.getBySel('exp-card-inner-screencap-container')
        .eq(0)
        .should('exist')
        .and('be.visible')
        .children()
        .should('have.length', 1);
      cy.getBySel('exp-card-inner-screencap-image')
        .eq(0)
        .should('exist')
        .and('be.visible')
        .and('have.attr', 'alt', `${expData.projects[0].name} screen capture.`);
      cy.getBySel('exp-card-inner-flip-arrow')
        .eq(0)
        .should('exist')
        .children()
        .should('have.length', 1);
      cy.getBySel('exp-card-inner-flip-icon')
        .eq(0)
        .should('exist')
        .and('be.visible')
        .and('have.attr', 'alt', 'Flip card arrow');
      // exp card back
      cy.getBySel('exp-card-inner-back')
        .eq(0)
        .should('exist')
        .and('not.be.visible')
        .children()
        .should('have.length', 2);
      cy.getBySel('exp-card-inner-github-link')
        .eq(0)
        .should('exist')
        .and('not.be.visible')
        .and('contain.text', 'View on GitHub')
        .and('have.attr', 'href', expData.projects[0].github_url)
        .children()
        .should('have.length', 1);
      cy.getBySel('exp-card-inner-github-link-icon')
        .eq(0)
        .should('exist')
        .and('not.be.visible')
        .and('have.attr', 'alt', 'GitHub Logo');
      cy.getBySel('exp-card-inner-live-link')
        .eq(0)
        .should('exist')
        .and('not.be.visible')
        .and('contain.text', 'View Live Website')
        .and('have.attr', 'href', expData.projects[0].live_url)
        .and('have.attr', 'target', '_blank')
        .and('have.attr', 'rel', 'noopener noreferrer');
      cy.getBySel('exp-card-inner-live-link-icon')
        .eq(0)
        .should('exist')
        .and('not.be.visible')
        .and('have.attr', 'alt', 'Laptop Icon');
    });
  });
});
