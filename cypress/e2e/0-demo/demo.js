/// <reference types="cypress" />

describe('Test Demo', () => {

  before("Set up test state and get access tokens", () => {
    cy.sfLoginAs('SUPPORT_ENGINEER');
  });

  it('Loads the test case', () => {
    cy.loadCase('5006T00001vlgjcQAA');
    cy.wait(10000);
    cy.get('a[title="Conor Murray-Test"]').should('be.visible');
  });

  xit('Opens and closes the Command Prompt', () => {
    cy.get('.prompt-container');
  });

  xit('Opens and closes the Extension drawer', () => {

  });
  
  xit('Navigates through the Drawer Tabs', () => {

  });
  
  xit('Clicks the Get Help Button', () => {

  });

  xit('Checks the case number "01663164" is present in the Case Number box in GetHelp', () => {

  });

});