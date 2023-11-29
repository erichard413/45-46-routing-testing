import { render } from "@testing-library/react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "../src/routes";

// create browser router
export function renderRoute(route = "/") {
  // browser router does not take in any initial entries, so instead we have to add it to our 'window' object -> this is more closely how the browser functions.
  // pushState takes in (data, name of page, route);
  window.history.pushState({}, "test page", route);
  return render(<RouterProvider router={createBrowserRouter(routes)} />);
}
//create MEMORY router - this tells vitest to render our entire application at the route defined.
// export function renderRoute(route = "/") {
//   return render(
//     <RouterProvider
//       router={createMemoryRouter(routes, {
//         initialEntries: [{ pathname: route }],
//       })}
//     />
//   );
// }
