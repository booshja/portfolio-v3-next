/// <reference types="Cypress" />
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// eslint-disable-next-line arrow-body-style
Cypress.Commands.add('getBySel', (selector, ...args) => {
  return cy.get(`[data-test=${selector}]`, ...args);
});

Cypress.Commands.add('assertDesktopNavbar', () => {
  // desktop nav
  cy.getBySel('header-container')
    .should('exist')
    .and('be.visible')
    .children()
    .should('have.length', 4);
  // website logo
  cy.getBySel('name-container')
    .should('exist')
    .and('be.visible')
    .children()
    .should('have.length', 1);
  cy.getBySel('logo-link')
    .should('exist')
    .and('be.visible')
    .and('include.text', 'JacobAndes.');
  // nav
  cy.getBySel('desktop-nav')
    .should('exist')
    .and('be.visible')
    .children()
    .should('have.length', 6);
  // nav links
  cy.getBySel('is-nav-link')
    .should('exist')
    .and('be.visible')
    .and('contain.text', '.is()');
  cy.getBySel('experience-nav-link')
    .should('exist')
    .and('be.visible')
    .and('contain.text', '.experience()');
  cy.getBySel('about-nav-link')
    .should('exist')
    .and('be.visible')
    .and('contain.text', '.about()');
  cy.getBySel('contact-nav-link')
    .should('exist')
    .and('be.visible')
    .and('contain.text', '.contact()');
  cy.getBySel('blog-external-nav-link')
    .should('exist')
    .and('be.visible')
    .and('contain.text', '.blog()');
  // theme toggle
  cy.getBySel('theme-toggle-button').should('exist').and('be.visible');
  cy.getBySel('theme-toggle-icon').should('exist').and('be.visible');
});

Cypress.Commands.add('assertMobileNavbar', () => {
  // mobile nav
  cy.getBySel('header-container')
    .should('exist')
    .and('be.visible')
    .children()
    .should('have.length', 4);
  // closed
  cy.getBySel('mobile-menu-button')
    .should('exist')
    .and('be.visible')
    .children()
    .should('have.length', 1);
  cy.getBySel('mobile-menu-wrapper').should('exist').and('not.be.visible');
  // click open
  cy.getBySel('mobile-menu-button').click();
  cy.getBySel('mobile-menu-button').then(($el) => {
    const expanded = $el.prop('ariaExpanded');
    if (expanded === 'false') {
      cy.wrap($el).click();
    }
  });
  // open
  cy.getBySel('mobile-menu-wrapper')
    .should('exist')
    .children()
    .should('have.length', 4);
  cy.getBySel('closing-button')
    .should('exist')
    .and('be.visible')
    .and('contain.text', 'X');
  // menu links
  cy.getBySel('mobile-logo-link')
    .should('exist')
    .and('be.visible')
    .and('contain.text', 'JacobAndes.dev');
  // menu links - nav
  cy.getBySel('mobile-nav')
    .should('exist')
    .and('be.visible')
    .children()
    .should('have.length', 5);
  cy.getBySel('desktop-nav').should('not.be.visible');
  cy.getBySel('is-mobile-nav-link')
    .should('exist')
    .and('be.visible')
    .and('contain.text', '.is()');
  cy.getBySel('experience-mobile-nav-link')
    .should('exist')
    .and('be.visible')
    .and('contain.text', '.experience()');
  cy.getBySel('about-mobile-nav-link')
    .should('exist')
    .and('be.visible')
    .and('contain.text', '.about()');
  cy.getBySel('contact-mobile-nav-link')
    .should('exist')
    .and('be.visible')
    .and('contain.text', '.contact()');
  cy.getBySel('blog-external-mobile-nav-link')
    .should('exist')
    .and('be.visible')
    .and('contain.text', '.blog()');
  // theme toggle
  cy.getBySel('theme-toggle-button').should('exist').and('be.visible');
  cy.getBySel('theme-toggle-icon').should('exist').and('be.visible');
});

Cypress.Commands.add('assertDesktopSocials', () => {
  cy.getBySel('socials-container')
    .should('exist')
    .and('be.visible')
    .children()
    .should('have.length', 5);
  cy.getBySel('github-socials-link')
    .should('exist')
    .and('be.visible')
    .children()
    .should('have.length', 1);
  cy.getBySel('github-socials-icon').should('exist').and('be.visible');
  cy.getBySel('twitter-socials-link')
    .should('exist')
    .and('be.visible')
    .children()
    .should('have.length', 1);
  cy.getBySel('twitter-socials-icon').should('exist').and('be.visible');
  cy.getBySel('linkedin-socials-link')
    .should('exist')
    .and('be.visible')
    .children()
    .should('have.length', 1);
  cy.getBySel('linkedin-socials-icon').should('exist').and('be.visible');
  cy.getBySel('socials-vertical-accent').should('exist').and('be.visible');
  cy.getBySel('socials-follow-text')
    .should('exist')
    .and('be.visible')
    .and('contain.text', 'Follow Me');
});

Cypress.Commands.add('assertCopyright', () => {
  cy.getBySel('copyright-footer')
    .should('exist')
    .children()
    .should('have.length', 1);
  cy.getBySel('copyright-text')
    .should('exist')
    .and('be.visible')
    .and('include.text', '2020 - Present Jacob Andes. All Rights Reserved.');
});

Cypress.Commands.add('assertDesktopPublicLayout', () => {
  cy.assertDesktopNavbar();
  cy.assertDesktopSocials();
  cy.assertCopyright();
});

Cypress.Commands.add('assertMobilePublicLayout', () => {
  cy.assertMobileNavbar();
  cy.getBySel('socials-container').should('not.be.visible');
  cy.assertCopyright();
});
