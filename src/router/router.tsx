import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import Layout from "../components/Layout/Layout";
import LoggedRedirects from "../components/LoggedRedirects/LoggedRedirects";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import LoginPage from "../pages/LoginPage/LoginPage";
import StructuresPage from "../pages/StructuresPage/StructuresPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: (
      <Layout>
        <div>Page not found</div>
      </Layout>
    ),
    children: [
      {
        path: "/",
        element: <StructuresPage />,
      },
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
        element: <></>,
      },
      {
        path: "/add-new-structure",
        element: (
          <ProtectedRoute>
            {" "}
            <></>
          </ProtectedRoute>
        ),
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
