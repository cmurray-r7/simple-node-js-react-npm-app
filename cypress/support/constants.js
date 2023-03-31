//TEST_SANDBOX_HOSTs
export const TEST_SANDBOX_HOST = Cypress.config(`sandbox`);
export const TEST_SANDBOX_OAUTH_URL = `https://${TEST_SANDBOX_HOST}/services/oauth2/token`;
export const TEST_SANDBOX_LOGIN_REQUEST = `https://${TEST_SANDBOX_HOST}/secur/frontdoor.jsp?sid=`;
export const GRANT_TYPE = `refresh_token`;
export const SUPPORT_ENGINEER = `SUPPORT_ENGINEER`;