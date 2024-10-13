import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import UserFormCreate from "./components/userForm/UserFormCreate";
import { ErrorBoundary } from "./components/errorBoundary/ErrorBoundary";
import { UserFormEdit } from "./components/userForm/UserFormEdit";
import { getUser } from "./api";
import { PrimeReactProvider } from "primereact/api";
import "./style/index.css";
import "primereact/resources/themes/md-dark-indigo/theme.css";
import "/node_modules/primeflex/primeflex.css";
import Search from "./components/Search/Search";
import UserLayout from "./components/UserLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "",
        element: <Search />,
      },
      {
        path: "/create",
        element: <UserFormCreate />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/:id",
        loader: ({ params }) => {
          if (params?.id) {
            const id = parseInt(params.id);
            return getUser(id);
          }
          return null;
        },
        element: <UserFormEdit />,
        errorElement: <ErrorBoundary />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);
root.render(
  <React.StrictMode>
    <PrimeReactProvider>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  </React.StrictMode>
);
