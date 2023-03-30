import * as constants from "./constants";
// ***********************************************
// This commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add("sfLoginAs", (type) => {

  const clientId = Cypress.env("TEST_CLIENT_ID");
  const clientSecret = Cypress.env("TEST_CLIENT_SECRET");
  const refreshToken = Cypress.env(`${type}_REFRESH_TOKEN`);

  cy.log(`**Get token for user: ${type} ✅**`);

  //login request to login
  cy.request({
    method: "POST",
    url: constants.TEST_SANDBOX_OAUTH_URL,
    host: constants.TEST_SANDBOX_HOST,
    form: true,
    body: {
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      client_id: clientId,
      client_secret: clientSecret,
    },
  })
    .then((response) => {
      Cypress.env(`${type}_ACCESS_TOKEN`, response.body.access_token);
    });
});

Cypress.Commands.add("login", (token) => {
  cy.request(constants.TEST_SANDBOX_LOGIN_REQUEST + token)
    .then((response) => {
      cy.log(`**Login status: ${response.statusText} ✅**`);
    });
});
  
Cypress.Commands.add("loadCase", (caseId) => {
  cy.login(Cypress.env('SUPPORT_ENGINEER_ACCESS_TOKEN'));
  cy.visit(`https://${constants.TEST_SANDBOX_HOST}/lightning/r/Case/${caseId}/view`);
  cy.wait(6000);
});

Cypress.Commands.add("loadCaseList", () => {
  cy.login(Cypress.env('SUPPORT_ENGINEER_ACCESS_TOKEN'));
  cy.visit(`https://${constants.TEST_SANDBOX_HOST}/lightning/o/Case/list?filterName=00B8F000002cTriUAE`);
  cy.wait(6000);
});

Cypress.Commands.add("updateStatus", (newStatus) => {
  cy.get('body').type('{ctrl}n');
  cy.wait(3000);
  cy.get('textarea.textarea').filter(':visible').type(`Status Test - ${newStatus}`);
  cy.get('select#status-select').select(newStatus);
  cy.get('button.slds-button.slds-button--brand.cuf-publisherShareButton.MEDIUM.uiButton').contains('Save').filter(':visible').click();
  cy.wait(5000);
  cy.get('div.slds-form.slds-form_stacked').within(() => {
    cy.get('span').contains(newStatus).scrollIntoView().should('be.visible');
  });
  cy.wait(5000);
});

// Successfully authenticates the 'Cypress Test' Client in the Google project
// Currently unable to tie this authenticated user to the front end
// More investigation needed
Cypress.Commands.add('loginByGoogleApi', () => {
  cy.log('Logging in to Google');
  cy.request({
    method: 'POST',
    url: 'https://www.googleapis.com/oauth2/v4/token',
    body: {
      grant_type: 'refresh_token',
      client_id: Cypress.env('GOOGLE_CLIENT_ID'),
      client_secret: Cypress.env('GOOGLE_CLIENT_SECRET'),
      refresh_token: Cypress.env('GOOGLE_REFRESH_TOKEN'),
    },
  }).then(({ body }) => {
    const { access_token, id_token } = body
    cy.request({
      method: 'GET',
      url: 'https://www.googleapis.com/oauth2/v3/userinfo',
      headers: { Authorization: `Bearer ${access_token}` },
    }).then(({ body }) => {
      cy.log(body)
      const userItem = {
        token: id_token,
        user: {
          googleId: body.sub,
          email: body.email,
          givenName: body.given_name,
          familyName: body.family_name,
          imageUrl: body.picture,
        },
      }
      window.localStorage.setItem('googleCypress', JSON.stringify(userItem))
    })
  })
})