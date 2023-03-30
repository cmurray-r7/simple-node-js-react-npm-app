/// <reference types="cypress" />

const sameUserCaseId = '5006T00001vlgjcQAA';

describe('Case Workflow', () => {

  before('Set up test state and get access tokens', () => {
    cy.sfLoginAs('SUPPORT_ENGINEER');
    cy.loadCase(sameUserCaseId);
  });

  it('Starts a workflow', () => {
    cy.get('[data-cy="fab-button"]').click();
    cy.get('[data-cy="extension-tab-0"]').click();
    cy.get('[data-cy="case-workflow-start-button"]').click();
  });
  
  it('Displays the case number', () => {
    cy.get('[data-cy="case-number-display"]').contains('01663164');
  });
  
  xit('Navigates phase headers', () => {
    cy.get('[data-cy="phase-title-0"]').click();

    cy.get('[data-cy="phase-title-1"]').click();
    cy.get('[data-cy="phase-title-2"]').click();
    cy.get('[data-cy="phase-title-3"]').click();
    cy.get('[data-cy="phase-title-4"]').click();

  })
  ;
  xit('Navigates phase steps', () => {});
  xit('Displays previously selected steps', () => {});
  xit('Saves a workflow', () => {});
  xit('Loads a workflow', () => {});
  xit('Resets a workflow', () => {});
  xit('Saves a workflow after reset', () => {});
  xit('Loads a workflow after reset', () => {});
  xit('Loads a workflow after page refresh', () => {});
  xit('Navigates the guided tour', () => {});

})