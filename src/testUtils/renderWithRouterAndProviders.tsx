import { PreloadedState } from "@reduxjs/toolkit";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "../router/router";
import { RootState } from "../store/store";
import renderWithProviders from "./renderWithProviders";

const getComponentRouter = (Ui: JSX.Element) =>
  createBrowserRouter([
    {
      path: "/",
      element: Ui,
    },
    {
      path: "/home",
      element: <></>,
    },
  ]);

const renderWithRoutersAndProviders = (
  ui?: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const customRouter = ui ? getComponentRouter(ui) : router;

  return renderWithProviders(
    <RouterProvider router={customRouter}></RouterProvider>,
    preloadedState
  );
};

export default renderWithRoutersAndProviders;
