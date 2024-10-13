import React from "react";
import UserForm from "./UserForm";
import { User } from "../../definitions/user";
import { useLoaderData } from "react-router-dom";
import { updateUser } from "../../api";

export const UserFormEdit = () => {
  const onSubmit = async (user: User) => {
    try{
      const res = await updateUser(user);
    }
    catch(e){
      console.log((e as Error).message)
    }
  };
  const user: User = useLoaderData() as User;
  return <UserForm user={user} onSubmit={onSubmit} />;
};
