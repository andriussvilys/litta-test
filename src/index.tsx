import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";
import UserForm from "./components/userForm/UserForm";
import { createRoot } from "react-dom/client";
import { User } from "./definitions/user";
import { getUser } from "./routes/loaders/user";

const UserFormEdit = () => {
  console.log("UserFormEdit");
  const user: User = useLoaderData() as User;
  console.log(user);
  return <UserForm user={user} onSubmit={(user: User) => console.log(user)} />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserForm onSubmit={(user: User) => console.log(user)} />,
  },
  {
    path: "/:id",
    loader: ({ params }) => {
      console.log("loader");
      if (params?.id) {
        const id = parseInt(params.id);
        return getUser(id);
      }
      return null;
    },
    element: <UserFormEdit />,
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);
root.render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>
);
