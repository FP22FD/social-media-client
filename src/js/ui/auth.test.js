/**
 * @jest-environment jsdom
 */

// @ts-nocheck
import { describe, it, expect } from "@jest/globals";
import { updateLoginVisibility } from "./auth";

describe("updateLoginVisibility", () => {
  it("should remove the class logged-in if user not authenticated", async () => {
    // arrange
    document.body.innerHTML = "";
    document.body.classList.add("logged-in");

    // act
    updateLoginVisibility();

    // assert
    expect(document.body.classList.contains("logged-in")).not.toBe(true);
  });

  it("should add the class logged-in if user authenticated", async () => {
    // arrange
    localStorage.setItem("token", "123");

    document.body.innerHTML = "";

    // act
    updateLoginVisibility();

    // assert
    expect(document.body.classList.contains("logged-in")).toBe(true);
  });
});
