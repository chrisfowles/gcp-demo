// https://docs.cypress.io/api/introduction/api.html

describe("Welcome Page", () => {
  it("Loads at the default location", () => {
    cy.visit("/");
  });
  it("Contains the correct welcome message", () => {
    cy.contains("h1", "Hello Google Cloud Summit 2018");
  });
  it("Has all of our links", () => {
    cy.contains("p", "https://github.com/marketplace/google-cloud-build");
    cy.contains("p", "https://github.com/chrisfowles/gcp-demo");
    cy.contains("p", "https://www.cypress.io");
    cy.contains("p", "https://vuejs.org");
  });
  it("Has the right class on logo images", () => {
    cy.get("[data-cy=logo-sm-cloudbuild]").should("have.class", "logo-small");
    cy.get("[data-cy=logo-sm-octocat]").should("have.class", "logo-small");
    cy.get("[data-cy=logo-sm-appengine]").should("have.class", "logo-small");
  });
});
