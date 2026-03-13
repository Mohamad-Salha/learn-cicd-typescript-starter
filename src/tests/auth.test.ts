import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

const headersWithKey = {
  authorization: "ApiKey my-secret-key",
};

const headersWithoutKey = {
  authorization: "Bearer my-secret-key",
};

const headersWithoutAuth = {};

describe("getAPIKey", () => {
  test("should return the API key when the header is correct", () => {
    const apiKey = getAPIKey(headersWithKey);
    expect(apiKey).toBe("my-secret-key");
  });

  test("should return null when the header is not in the correct format", () => {
    const apiKey = getAPIKey(headersWithoutKey);
    expect(apiKey).toBeNull();
  });

  test("should return null when the authorization header is missing", () => {
    const apiKey = getAPIKey(headersWithoutAuth);
    expect(apiKey).toBeNull();
  });
});
