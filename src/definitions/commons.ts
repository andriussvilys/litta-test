import { FieldValues, RegisterOptions } from "react-hook-form";
import { FieldType } from "./userFormFields";

export const apiRoute = "https://dummyjson.com/users";

export type FormRules =
  | Omit<
      RegisterOptions<FieldValues, string>,
      "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
    >
  | undefined;

export type FormField = {
  id: string;
  label: string;
  fieldType: FieldType;
  rules?: FormRules;
  options?: string[];
};

export enum UserFormSection {
    BASIC_INFO = "basic info",
    CONTACT = "contact",
    OTHER = "other",
    ADDRESS = "address"
}

export enum UserFormLabel {
    CREATE = "Create a new user",
    EDIT = "Edit a user"
}