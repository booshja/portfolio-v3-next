/// <reference types='cypress' />

// viewports
import { displayValues } from '../../../src/styles/breakpoints';

describe('Pages Render: Contact Page', () => {
  displayValues.forEach((size) => {
    it(`should render the Contact page on ${size[0]}px x ${size[1]}px and its contents`, () => {
      cy.viewport(size[0], size[1]);

      cy.visit('/contact');
      cy.location('pathname').should((loc) => {
        expect(loc).to.eq('/contact');
      });
      if (size[0] < 768) {
        cy.assertMobilePublicLayout();
      } else if (size[0] >= 768) {
        cy.assertDesktopPublicLayout();
      }
      cy.getBySel('page-container')
        .should('exist')
        .children()
        .should('have.length', 3);
      cy.getBySel('recaptcha').should('exist').and('not.be.visible');
      cy.getBySel('page-title')
        .should('exist')
        .and('be.visible')
        .and('contain.text', 'contact()');
      cy.getBySel('main-content')
        .should('exist')
        .children()
        .should('have.length', 2);
      cy.getBySel('left-side')
        .should('exist')
        .children()
        .should('have.length', 2);
      cy.getBySel('contact-text')
        .should('exist')
        .and('be.visible')
        .and(
          'contain.text',
          'Have a question, thoughts, or want to work together?',
        );
      // form
      cy.getBySel('contact-form')
        .should('exist')
        .and('be.visible')
        .children()
        .should('have.length', 8);
      // labels
      cy.getBySel('contact-form-label').should('have.length', 3);
      cy.getBySel('contact-form-label').eq(0).should('contain.text', 'Name:');
      cy.getBySel('contact-form-label').eq(1).should('contain.text', 'Email:');
      cy.getBySel('contact-form-label')
        .eq(2)
        .should('contain.text', 'Message:');
      // inputs
      cy.getBySel('contact-form-input').should('have.length', 3);
      cy.getBySel('contact-form-input')
        .eq(0)
        .should('exist')
        .and('be.visible')
        .and('have.attr', 'placeholder', 'Namey McNameson');
      cy.getBySel('contact-form-input')
        .eq(1)
        .should('exist')
        .and('be.visible')
        .and('have.attr', 'placeholder', 'example@email.com');
      cy.getBySel('contact-form-input')
        .eq(2)
        .should('exist')
        .and('be.visible')
        .and('have.attr', 'placeholder', 'I had an idea for you...');
      // error divs
      cy.getBySel('contact-form-error').should('have.length', 0);
      // recaptcha text
      cy.getBySel('recaptcha-text')
        .should('exist')
        .and('be.visible')
        .and(
          'include.text',
          'This site is protected by reCAPTCHA and the Google',
        )
        .and('include.text', 'and')
        .and('include.text', 'apply.');
      cy.getBySel('recaptcha-link').should('have.length', 2);
      cy.getBySel('recaptcha-link')
        .eq(0)
        .should('exist')
        .and('be.visible')
        .and('have.attr', 'href', 'https://policies.google.com/privacy')
        .and('contain.text', 'Privacy Policy');
      cy.getBySel('recaptcha-link')
        .eq(1)
        .should('exist')
        .and('be.visible')
        .and('have.attr', 'href', 'https://policies.google.com/terms')
        .and('contain.text', 'Terms of Service');
      // submit button
      cy.getBySel('contact-form-button')
        .should('exist')
        .and('be.visible')
        .and('have.attr', 'type', 'submit')
        .and('contain.text', 'Submit');
      // right side
      cy.getBySel('right-side')
        .should('exist')
        .children()
        .should('have.length', 1);
      cy.getBySel('mail-image-container')
        .should('exist')
        .children()
        .should('have.length', 1);
      if (size[0] < 1024) {
        cy.getBySel('mail-image').should('exist').and('not.be.visible');
      } else if (size[0] >= 1024) {
        cy.getBySel('mail-image')
          .should('exist')
          .and('be.visible')
          .and('have.attr', 'alt', 'Wall of blue P.O. Boxes.');
      }
    });
  });
});
