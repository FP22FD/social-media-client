//with environment node you should mock local storage
/**
 * @jest-environment node
 */

// @ts-nocheck
import { describe, it, expect } from "@jest/globals";
import { logout } from "./logout.js";
// import { error } from "cypress/types/jquery/index.js";
// import { clear } from "../../tools/clear.js";

describe("Logout", () => {
  it("should login, save the token and profile in localStorage, and return profile", async () => {
    //Arrange
    const localStorageMock = {
      removeItem: jest.fn(),
    };
    global.localStorage = localStorageMock;

    //Action
    await logout();

    //Assert
    expect(localStorage.removeItem).toHaveBeenCalledWith("token");
    expect(localStorage.removeItem).toHaveBeenCalledWith("profile");
  });
});
