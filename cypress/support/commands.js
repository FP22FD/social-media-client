// @ts-nocheck
/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress"/>

//Ref. https://github.com/cypress-io/cypress/issues/249
if (Cypress.env("DELAY_COMMANDS")) {
  const COMMAND_DELAY = 500;
  for (const command of [
    "visit",
    "click",
    "trigger",
    "type",
    "clear",
    "reload",
  ]) {
    Cypress.Commands.overwrite(command, (originalFn, ...args) => {
      const origVal = originalFn(...args);

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(origVal);
        }, COMMAND_DELAY);
      });
    });
  }
}

Cypress.Commands.add("logout", () => {
  cy.get("button[data-auth=logout]").click();
  cy.wait(500);
});

Cypress.Commands.add("visitHome", () => {
  const url = Cypress.env("APP_HOME_URL");
  cy.visit(url);
  cy.wait(500);
});

Cypress.Commands.add("showLoginForm", () => {
  cy.get("#registerForm").find("button[data-auth=login]").click();
  cy.get("#loginForm").should("be.visible");
  cy.wait(500);
});

Cypress.Commands.add("login", (email, password) => {
  cy.intercept(
    "POST",
    "https://nf-api.onrender.com/api/v1/social/auth/login",
  ).as("POST-login");

  cy.get("#loginForm").find("input[name=email]").type(email);
  cy.get("#loginForm").find("input[name=password]").type(password);
  cy.get("#loginForm").find("button[type=submit]").click();

  // cy.wait(1500);
  cy.wait("@POST-login");
});

Cypress.Commands.add("loginWithTestuser", () => {
  const email = Cypress.env("USER_EMAIL");
  const password = Cypress.env("USER_PASSWORD");
  cy.login(email, password);
});

Cypress.Commands.add("isLoggedIn", () => {
  cy.window().then((win) => {
    expect(win.localStorage.getItem("token")).to.be.a("string");
  });

  Cypress.Commands.add("isLoggedOut", () => {
    cy.window().then((win) => {
      const token = win.localStorage.getItem("token");
      expect(token).to.be.null;
    });
  });
});
