import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import Layout from "../components/Layout/Layout";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import LoginPage from "../pages/LoginPage/LoginPage";

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
        path: "/home",
        element: <></>,
      },
      {
        path: "/login",
        element: <LoginPage />,
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
