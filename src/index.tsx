import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
import UserFormCreate from "./components/userForm/UserFormCreate";
import { ErrorBoundary } from "./components/errorBoundary/ErrorBoundary";
import { UserFormEdit } from "./components/userForm/UserFormEdit";
import { getUser } from "./api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserFormCreate/>,
    errorElement: <ErrorBoundary/>
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
    errorElement: <ErrorBoundary/>
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
