// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

Cypress.on('uncaught:exception', (error) => {
  // Returning false for these errors means that the test suite will not halt on
  // the specified Salesforce-thrown errors
  if (error.message.includes('ResizeObserver')) {
    return false;
  }
  if (error.message.includes('Action failed: forceSearch:searchGDP$controller$init')) {
    return false;
  }
});