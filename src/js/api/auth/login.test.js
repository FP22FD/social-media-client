/**
 * @jest-environment node
 */

// @ts-nocheck
import { jest, describe, it, expect } from "@jest/globals";
import { login } from "./login.js";

describe("Login", () => {
  it("should login, save the token and profile in localStorage, and return profile", async () => {
    // Arrange
    const token = "...token...";

    const profile = {
      avatar: "...url...",
      banner: null,
      email: "user@noroff.no",
      name: "username",
    };

    const mockFetchSuccess = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue({
        ...profile,
        accessToken: token,
      }),
    });

    global.fetch = mockFetchSuccess;

    // how to mock localStorage: https://stackoverflow.com/a/47897345
    const localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      clear: jest.fn(),
    };
    global.localStorage = localStorageMock;

    // Act
    const response = await login("email", "psw");

    // Assert
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "token",
      JSON.stringify(token),
    );
    // expect(localStorage.setItem.mock.calls.length).toBe(2);

    // profile should not have the token
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "profile",
      JSON.stringify(profile),
    );

    // profile should not have the token
    expect(response).toEqual(profile);
  });

  it("unauthorized user should not login", async () => {
    // Arrange
    const mockFetchSuccess = jest.fn().mockResolvedValue({
      ok: false,
      statusText: "",
    });

    global.fetch = mockFetchSuccess;

    const localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      clear: jest.fn(),
    };
    global.localStorage = localStorageMock;

    // Act

    // Assert
    // ref: https://dev.to/darkmavis1980/how-to-test-an-async-function-to-throw-an-exception-in-jest-3a90
    await expect(async () => {
      await login();
    }).rejects.toThrow();
  });
});
