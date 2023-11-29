import { http } from "msw";
import { setupServer } from "msw/node";

export const mockServer = setupServer();

// let's create a function that mocks out a call to our API.

export function addMockApiRouteHandler(type, path, cb) {
  mockServer.use(
    http[type](new URL(path, import.meta.env.VITE_API_URL).href, cb)
  );
}
