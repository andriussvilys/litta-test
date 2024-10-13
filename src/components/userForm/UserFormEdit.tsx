import React from "react";
import UserForm from "./UserForm";
import { User } from "../../definitions/user";
import { useLoaderData } from "react-router-dom";
import { updateUser } from "../../api";
import { UserFormFields } from "../../definitions/userFormFields";

export const UserFormEdit = () => {
  const onSubmit = async (user: UserFormFields) => {
    try{
      const res = await updateUser(user);
    }
    catch(e){
      throw e
    }
  };
  const user: User = useLoaderData() as User;
  return <UserForm user={user} onSubmit={onSubmit} />;
};
