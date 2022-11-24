/// <reference types='cypress' />

// fixtures
import aboutData from '../../fixtures/about.json';

describe('Pages Render: About Page', () => {
  it('should render the Desktop About page and its contents', () => {
    cy.visit('/about');
    cy.assertDesktopPublicLayout();
    cy.location('pathname').should((loc) => {
      expect(loc).to.eq('/about');
    });
    cy.getBySel('page-container')
      .should('exist')
      .children()
      .should('have.length', 2);
    cy.getBySel('page-title')
      .should('exist')
      .and('be.visible')
      .and('contain.text', 'about()');
    // main content
    cy.getBySel('main-content')
      .should('exist')
      .children()
      .should('have.length', 2);
    // main content - left side
    cy.getBySel('left-side')
      .should('exist')
      .children()
      .should('have.length', 2);
    cy.getBySel('greeting-text')
      .should('exist')
      .and('include.text', "I'm Jacob!")
      .children()
      .should('have.length', 1)
      .and('include.text', 'Hi!');
    cy.getBySel('about-text').should('have.length', 2);
    cy.getBySel('about-text')
      .eq(0)
      .should('exist')
      .and('be.visible')
      .and('contain.text', aboutData.storyText1);
    cy.getBySel('about-text')
      .eq(1)
      .should('exist')
      .and('be.visible')
      .and('contain.text', aboutData.storyText2);
    // main content -> left side -> skills
    cy.getBySel('skills-skill').each(($el, idx) => {
      cy.wrap($el)
        .should('exist')
        .and('be.visible')
        .and('contain.text', aboutData.skills[idx]);
    });
    // main content - right side
    cy.getBySel('right-side')
      .should('exist')
      .children()
      .should('have.length', 1);
    cy.getBySel('me-image').should('exist').and('be.visible');
  });
});
