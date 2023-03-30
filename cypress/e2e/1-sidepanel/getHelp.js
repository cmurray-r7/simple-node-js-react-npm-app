/// <reference types="cypress" />

// Make constant?
const sameUserCaseId = '5006T00001vlgjcQAA';
const differentUserCaseId = '5008F00000302jSQAQ';

describe('Create Help Request', () => {

  before('Set up test state and get access tokens', () => {
    cy.sfLoginAs('SUPPORT_ENGINEER');
  });

  it('Loads with an error if not loaded on a Case View', () => {
    cy.loadCaseList();
    cy.get('[data-cy="fab-button"]').click();
    cy.get('[data-cy="get-help-root-button"]').click();
    cy.get('[data-cy="create-req-error"]').should('be.visible');
    cy.get('[data-cy="get-help-root-button"]').click();
    cy.get('[data-cy="get-help-root-button"]').should('contain.text', 'Get Help');
  });
  
  it('Requester cannot be changed if Case Owner is the Active User', () => {
    cy.loadCase(sameUserCaseId);
    cy.get('[data-cy="fab-button"]').click();
    cy.get('[data-cy="get-help-root-button"]').click();
    cy.get('#help-req-requester').should('have.class', 'Mui-disabled');
  });
  
  it('Respond is disabled if Case Owner is the Active User', () => {
    cy.get('[data-cy="respond-checkbox"]').should('be.disabled');
  });
  
  it('Displays case information successfully for hosted console case', () => {
    cy.get('[data-cy="case-number-textbox"]').should('have.value', '01663164');
    cy.get('#help-req-product').should('have.class', 'Mui-disabled').and('contain', 'AppSpider');
    cy.get('#help-req-branch').should('have.class', 'Mui-disabled').and('contain', 'Installations');
    cy.get('#help-req-severity').should('have.class', 'Mui-disabled').and('contain', '3 - Medium');
    cy.get('#help-req-timeZone').should('have.class', 'Mui-disabled').and('contain', '(GMT+01:00) British Summer Time');
    cy.get('[data-cy="hosted-checkbox"]').should('be.checked');
    cy.get('[data-cy="managed-checkbox"]').should('not.be.checked');
    cy.get('[data-cy="si-checkbox"]').should('not.be.checked');
  });
  
  it('Displays case information successfully for non-hosted console case', () => {
    cy.loadCase(differentUserCaseId);
    cy.get('[data-cy="fab-button"]').click();
    cy.get('[data-cy="get-help-root-button"]').click();
    cy.get('[data-cy="case-number-textbox"]').should('have.value', '02943785');
    cy.get('#help-req-product').should('have.class', 'Mui-disabled').and('contain', 'InsightVM');
    cy.get('#help-req-branch').should('have.class', 'Mui-disabled').and('contain', 'Other');
    cy.get('#help-req-severity').should('have.class', 'Mui-disabled').and('contain', '3 - Medium');
    cy.get('#help-req-timeZone').should('have.class', 'Mui-disabled').and('contain', '(GMT-07:00) Pacific Daylight Time');
    cy.get('[data-cy="hosted-checkbox"]').should('not.be.checked');
    cy.get('[data-cy="managed-checkbox"]').should('not.be.checked');
    cy.get('[data-cy="si-checkbox"]').should('not.be.checked');
  });
  
  it('Requester and Responder can be changed if Case Owner is not the Active User', () => {
    cy.get('[data-cy="select-requester"]').click();
    cy.get('[data-cy="select-requester-item"]').should('have.length', '2');
    cy.get('[data-cy="select-requester-item"]').eq(1).click();
    cy.get('[data-cy="respond-checkbox"]').should('not.be.checked');
    cy.get('[data-cy="select-requester"]').click();
    cy.get('[data-cy="select-requester-item"]').first().click();
    cy.get('[data-cy="respond-checkbox"]').click();
    cy.get('[data-cy="respond-checkbox"]').should('be.checked');
  });
  
  it('Submits a help request', () => {
    cy.get('[data-cy="help-req-summary-textbox"]').click().type('Cypress Test');
    cy.contains('Submit Help Request').click();
    cy.get('[data-cy="help-home"]').should('be.visible');
  });
  
});

xdescribe('Help Needed', () => {

  before('Set up test state and get access tokens', () => {
    cy.sfLoginAs('SUPPORT_ENGINEER');
  });
  
});

xdescribe('Availability', () => {

  before('Set up test state and get access tokens', () => {
    cy.sfLoginAs('SUPPORT_ENGINEER');
  });

})