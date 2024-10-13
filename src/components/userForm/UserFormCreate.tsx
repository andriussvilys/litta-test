import React from "react";
import UserForm from "./UserForm";
import { User } from "../../definitions/user";
import { createUser } from "../../api";

export default function UserFormCreate() {
  const onSubmit = async (user: User) => {
    try{
        const res = await createUser(user);
    }
    catch(e){
        console.log((e as Error).message)
    }
  };
  return <UserForm onSubmit={onSubmit} />;
}
