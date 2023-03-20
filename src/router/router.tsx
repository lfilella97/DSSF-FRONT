import { createBrowserRouter, RouteObject } from "react-router-dom";
import { lazy } from "react";

const StructuresPage = lazy(
  () => import("../pages/StructuresPage/StructuresPage")
);
const App = lazy(() => import("../App"));
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
        path: "/*",
        element: <div className="not-found">404 Page not found</div>,
      },
      {
        path: "/add-new-structure",
        element: (
          <ProtectedRoute>
            <CreateStructurePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
