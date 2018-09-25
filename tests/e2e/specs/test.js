// https://docs.cypress.io/api/introduction/api.html

describe("Welcome Page", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Hello Google Summit");
  });
});
