/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Visit homepage and load all products', () => {
  it('Visit e-commerce home page', () => {
    cy.visit('/');
    cy.contains('Store');
    cy.get('div.productListWrapper').should('exist');
    cy.scrollTo('bottom', { ensureScrollable: true, duration: 2000 });
    // cy.get('[data-test-py="footerBottom"]').should('exist');

    // cy.visit(Cypress.env('productListingUrl'));
  });
});

export {};
