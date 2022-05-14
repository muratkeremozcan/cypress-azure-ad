/// <reference types="cypress" />

describe("example Azure AD", () => {
  it("logs in using cy.origin", () => {
    cy.visit("https://www.office.com");
    cy.get("a#hero-banner-sign-in-to-office-365-link").click();

    cy.origin(
      "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
      () => {
        // Cypress.on("uncaught:exception", () => false);
        cy.log("yo");
      }
    );
  });
});
