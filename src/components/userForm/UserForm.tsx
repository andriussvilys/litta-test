import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { User } from "../../definitions/user";
import BasicInfoFields from "./components/BasicInfoFields";
import { UserFormFields } from "../../definitions/userFormFields";
import AddressFields from "./components/AddressFields";
import { Button } from "primereact/button";
import { Panel } from "primereact/panel";

export interface UserFormProps {
  onSubmit: SubmitHandler<UserFormFields>;
  user?: User;
}

export default function UserForm({ onSubmit, user }: UserFormProps) {
  const formMethods = useForm<UserFormFields>({
    defaultValues: user
      ? { ...user, birthDate: new Date(user.birthDate) }
      : {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          username: "",
          gender: "",
          bloodGroup: "",
          height: "",
          weight: "",
          age: "",
          birthDate: null,
        },
  });

  const { handleSubmit } = formMethods;

  return (
    <FormProvider {...formMethods}>
      <Panel className="flex justify-content-center align-items-center h-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
            <div className="flex flex-column gap-4 justify-content-center align-items-center">
              <div className="flex-1 flex flex-wrap justify-content-center">
                <BasicInfoFields />
                <AddressFields />
              </div>
              <div className="flex-1 flex justify-content-end mt-3">
                <Button type="submit" label="Submit" />
              </div>
          </div>
        </form>
      </Panel>
    </FormProvider>
  );
}
