import React from "react";
import UserForm from "./UserForm";
import { createUser } from "../../api";
import { UserFormFields } from "../../definitions/userFormFields";

export default function UserFormCreate() {
  const onSubmit = async (user: UserFormFields) => {
    try {
      const res = await createUser(user);
    } catch (e) {
      throw e
    }
  };
  return (
      <UserForm onSubmit={onSubmit} />
  );
}
