/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Visit homepage and load all products', () => {
  it('Visit e-commerce home page', () => {
    cy.viewport(1280, 720);
    cy.visit('/');
    cy.contains('Store');
    cy.get('[data-test-py="productListing"]').should('exist');
    cy.scrollTo('bottom', { ensureScrollable: true, duration: 2000 });
    cy.get('[data-test-py="footerBottom"]').should('have.text', 'About');

    // cy.visit(Cypress.env('productListingUrl'));
  });

  it('Visit home page and verify footer is visible on mobile', () => {
    cy.viewport('iphone-x');
    cy.visit('/');
    cy.scrollTo('bottom', { ensureScrollable: true, duration: 2000 });
    cy.get('[data-test-py="footerBottom"]').should('be.visible');

    // cy.visit(Cypress.env('productListingUrl'));
  });
});

export {};
