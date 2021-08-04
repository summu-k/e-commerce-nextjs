/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Visit Desktop homepage and load all products', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('/');
  });

  it('Visit e-commerce home page', () => {
    cy.contains('Store');
    cy.get('[data-test-py="productListing"]').should('exist');
    cy.scrollTo('bottom', { ensureScrollable: true, duration: 2000 });
    cy.get('[data-test-py="footerBottom"]').should('have.text', 'About');
    // cy.visit(Cypress.env('productListingUrl'));
  });

  it('Visit Category page from Header Nav', () => {
    cy.get('[data-test-py="category"]').click();
    cy.url().should('include', '/category');
    cy.get('[data-test-py="categoryListing"]').first().click();
    cy.get('[data-test-py="categoryProducts"]').first().click();
    cy.url().should('include', '/product');
    cy.go('back');
    cy.go('back');
    cy.url().should('include', '/category');
  });

  it('Add to cart product and verify it in localStorage', () => {
    cy.get('[data-test-py="addToCart"]')
      .first()
      .dblclick()
      .should(() => {
        expect(JSON.parse(localStorage.getItem('cart'))[0].quantity).to.eq(2);
      });
  });
});

describe('Visit Mobile homepage and load all products', () => {
  beforeEach(() => {
    cy.viewport('iphone-x');
    cy.visit('/');
  });
  it('Visit home page and verify footer is visible on mobile', () => {
    cy.scrollTo('bottom', { ensureScrollable: true, duration: 2000 });
    cy.get('[data-test-py="footerBottom"]').should('be.visible');
    // cy.visit(Cypress.env('productListingUrl'));
  });
});

export {};
