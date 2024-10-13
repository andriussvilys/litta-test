import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { User } from "../../definitions/user";
import BasicInfoFields from "./components/BasicInfoFields";

export interface UserFormProps {
  onSubmit: SubmitHandler<User>;
  user?: User;
}

export default function UserForm({ onSubmit, user }: UserFormProps) {

  const formMethods = useForm<User>({ 
    defaultValues: user 
  });

  const { handleSubmit } = formMethods;

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BasicInfoFields />
        <input type="submit" />
      </form>
    </FormProvider>
  );
}
