import React from "react";
import UserForm from "./UserForm";
import { User } from "../../definitions/user";

interface UserFormEditProps {
  user: User;
}

export default function UserFormEdit({ user }: UserFormEditProps) {
  const onSubmit = (user: User) => {
    console.log(user);
  };
  return <UserForm onSubmit={onSubmit} user={user} />;
}
