import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { User } from "../../definitions/user";

export interface UserFormProps {
  onSubmit: SubmitHandler<User>;
  user?: User;
}

export default function UserForm({ onSubmit, user }: UserFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({ defaultValues: user });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />

      <input {...register("lastName", { required: true })} />
      {errors.lastName && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
}
