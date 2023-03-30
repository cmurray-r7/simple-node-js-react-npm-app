/// <reference types="cypress" />

describe('Loading', () => {

  it('Loads on a Salesforce Case View', () => {
    cy.loadCase('5008F00000302jSQAQ')
    cy.get('[data-cy="fab-button"]').should('be.visible');
    cy.get('[data-cy="utility-bar-command-palette-button"]').should('be.visible');
  });
  
  it('Loads on a Salesforce Case List', () => {
    cy.loadCaseList();
    cy.get('[data-cy="fab-button"]').should('be.visible');
    cy.get('[data-cy="utility-bar-command-palette-button"]').should('be.visible');
  });
  
  it('Loads on a Salesforce Console Tab Item', () => {
    cy.login(Cypress.env('SUPPORT_ENGINEER_ACCESS_TOKEN'));
    cy.visit('https://r7--test.sandbox.lightning.force.com/lightning/r/Account/0013f000004Y6yCAAS/view?ws=%2Flightning%2Fr%2FCase%2F5008F00000302jSQAQ%2Fview');
    cy.wait(6000);
    cy.get('[data-cy="fab-button"]').should('be.visible');
    cy.get('[data-cy="utility-bar-command-palette-button"]').should('be.visible');
  });
  
})