// @ts-nocheck
/// <reference types="Cypress"/>

describe("tests functional of login", () => {
  beforeEach(() => {
    cy.visitHome();
  });

  it("shows a register form", () => {
    // arrange
    // act
    // assert
    cy.get("#registerForm").should("be.visible");
  });

  it("shows a login form when the login button is clicked", () => {
    // arrange
    // act + assert
    cy.showLoginForm();
  });

  it("allows a valid, registered user to login, and redirects to the profile page", () => {
    // arrange
    cy.intercept("?view=**").as("URL-profile");
    cy.showLoginForm();

    // act
    cy.loginWithTestuser();

    // assert
    cy.isLoggedIn();
    cy.wait("@URL-profile");
  });

  it("allows a valid user to log out", () => {
    // arrange
    cy.showLoginForm();
    cy.loginWithTestuser();
    // cy.login(data.email, data.password);

    // act
    cy.logout();

    // assert
    cy.isLoggedOut();
  });

  it("shows an error message for invalid login", () => {
    // arrange

    // how to check a window.alert message dialog:
    // ref. https://stackoverflow.com/a/73715595
    // ref. https://docs.cypress.io/api/cypress-api/catalog-of-events#Window-Alert
    // Give an alias to the stub, so we can use "get" on it.
    const alertShown = cy.stub().as("alertShown");
    cy.on("window:alert", alertShown);

    // window.alert("Either your username was not found or your password is incorrect")

    cy.showLoginForm();

    // act
    // cy.login(data.email, data.password);
    cy.login("this-user-do-not-exist@noroff.no", "wrong-password");

    // assert
    cy.isLoggedOut();

    // By using get, we ensure this will be retried if the alert has not been called yet.
    cy.get("@alertShown").should(
      "have.been.calledOnceWith",
      "Either your username was not found or your password is incorrect",
    );
    cy.get("@alertShown").should("have.been.calledOnce");
  });
});
