import { createBrowserRouter, RouteObject } from "react-router-dom";
import { lazy } from "react";
import App from "../components/App/App";
import StructuresPage from "../pages/StructuresPage/StructuresPage";
import DetailPage from "../pages/DetailPage/DetailPage";
import MapPage from "../pages/MapPage/MapPage";

const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const CreateStructurePage = lazy(
  () => import("../pages/CreateStructurePage/CreateStructurePage")
);
const LoggedRedirects = lazy(
  () => import("../components/LoggedRedirects/LoggedRedirects")
);
const ProtectedRoute = lazy(
  () => import("../components/ProtectedRoute/ProtectedRoute")
);

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <StructuresPage />,
      },
      { path: "/home", element: <StructuresPage /> },
      {
        path: "/login",
        element: (
          <LoggedRedirects>
            <LoginPage />
          </LoggedRedirects>
        ),
      },
      {
        path: "/map",
        element: <MapPage />,
      },
      {
        path: "/add-new-structure",
        element: (
          <ProtectedRoute>
            <CreateStructurePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/structure/:id",
        element: <DetailPage></DetailPage>,
      },
      {
        path: "/*",
        element: <NotFoundPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
