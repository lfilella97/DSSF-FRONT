import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StructuresPage from "../pages/StructuresPage/StructuresPage";
import router from "../router/router";

import renderWithProviders from "./renderWithProviders";
import { RouterAndState } from "../types";

const getComponentRouter = (Ui: JSX.Element) =>
  createBrowserRouter([
    {
      path: "/",
      element: Ui,
    },
    {
      path: "/home",
      element: <StructuresPage />,
    },
  ]);

const renderWithRoutersAndProviders = ({
  ui,
  preloadedState,
}: RouterAndState = {}) => {
  const customRouter = ui ? getComponentRouter(ui) : router;

  return renderWithProviders(
    <RouterProvider router={customRouter}></RouterProvider>,
    preloadedState
  );
};

export default renderWithRoutersAndProviders;
