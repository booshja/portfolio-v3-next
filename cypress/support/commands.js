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

Cypress.Commands.add('assertNavbar', () => {
  // desktop nav
  cy.getBySel('desktop-nav-list').children().should('have.length', 5);
  cy.getBySel('nav-link-latest')
    .should('be.visible')
    .and('contain.text', 'Latest');
  cy.getBySel('nav-link-all')
    .should('be.visible')
    .and('contain.text', 'All Posts');
  cy.getBySel('nav-link-contact')
    .should('be.visible')
    .and('contain.text', 'Contact');
  cy.getBySel('nav-link-portfolio')
    .should('be.visible')
    .and('contain.text', 'Portfolio');
  cy.getBySel('dark-toggle').should('be.visible');
});
