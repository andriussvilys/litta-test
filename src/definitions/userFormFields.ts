import { User, Address } from "./user";

export enum FieldType {
  INT = "int",
  TEXT = "text",
  DATE = "date",
  NUM = "num",
  EMAIL = "email",
  DROPDOWN = "dropdown",
  PHONE = "phone",
}

export enum Gender {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
}
export const genderOptions:string[] = Object.values(Gender).map(el => el.toString())

export enum BloodGroup {
  A_POS = "A+",
  A_NEG = "A-",
  B_POS = "B+",
  B_NEG = "B-",
  AB_POS = "AB+",
  AB_NEG = "AB-",
  O_POS = "O+",
  O_NEG = "O-",
}

export const bloodGroupOptions:string[] = Object.values(BloodGroup).map(el => el.toString())

export interface UserFormFields extends Omit<User, "birthDate" | "age" | "height" | "weight"> {
  birthDate: Date | null;
  age: number | string;
  height: number | string;
  weight: number | string;
}

export enum BasicInfoFieldName {
  FIRSTNAME = "firstName",
  LASTNAME = "lastName",
  MAIDENNAME = "maidenName",
  AGE = "age",
  GENDER = "gender",
  EMAIL = "email",
  PHONE = "phone",
  USERNAME = "username",
  BIRTHDATE = "birthDate",
  BLOODGROUP = "bloodGroup",
  HEIGHT = "height",
  WEIGHT = "weight",
}

export const BasicInfoFieldLabels: Record<BasicInfoFieldName, string> = {
  [BasicInfoFieldName.FIRSTNAME]: "first name",
  [BasicInfoFieldName.LASTNAME]: "last name",
  [BasicInfoFieldName.MAIDENNAME]: "maiden name",
  [BasicInfoFieldName.AGE]: "age",
  [BasicInfoFieldName.GENDER]: "gender",
  [BasicInfoFieldName.EMAIL]: "email",
  [BasicInfoFieldName.PHONE]: "phone",
  [BasicInfoFieldName.USERNAME]: "username",
  [BasicInfoFieldName.BIRTHDATE]: "date of birth",
  [BasicInfoFieldName.BLOODGROUP]: "blood group",
  [BasicInfoFieldName.HEIGHT]: "height",
  [BasicInfoFieldName.WEIGHT]: "weight",
};

export interface AddressFields extends Pick<Address, "address" | "city" | "state"> {}

export enum AddressFieldName {
  ADDRESS = "address.address",
  CITY = "address.city",
  STATE = "address.state",
}

export const AddressFieldLabels: Record<AddressFieldName, string> = {
  [AddressFieldName.ADDRESS]: "street address",
  [AddressFieldName.CITY]: "city",
  [AddressFieldName.STATE]: "state",
}