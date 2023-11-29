import * as matchers from "@testing-library/jest-dom/matchers";
import { expect, afterEach, beforeAll, afterAll, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import { mockServer } from "./mockServer";

expect.extend(matchers);

beforeAll(() => {
  mockServer.listen({ onUnhandledRequest: "error" });
});

afterEach(() => {
  cleanup();
  vi.resetAllMocks();
});

afterAll(() => {
  mockServer.close();
  vi.clearAllMocks();
});
