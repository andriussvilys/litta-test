import React from "react";
import ControlledInput from "./ControlledInput";
import {
  AddressFieldLabels,
  AddressFieldName,
  FieldType,
} from "../../../definitions/userFormFields";
import { FormField, UserFormSection } from "../../../definitions/commons";
import { useFormContext } from "react-hook-form";
import FormFieldsContainer from "./FormFieldsContainer";

export default function AddressFields() {
  const {
    formState: { errors },
  } = useFormContext();
  const fields: FormField[] = [
    {
      label: AddressFieldLabels[AddressFieldName.ADDRESS],
      id: AddressFieldName.ADDRESS,
      fieldType: FieldType.TEXT,
    },

    {
      label: AddressFieldLabels[AddressFieldName.CITY],
      id: AddressFieldName.CITY,
      fieldType: FieldType.TEXT,
    },

    {
      label: AddressFieldLabels[AddressFieldName.STATE],
      id: AddressFieldName.STATE,
      fieldType: FieldType.TEXT,
    },
  ];
  return (
    <FormFieldsContainer header={UserFormSection.ADDRESS}>
      {fields.map((field) => {
        return (
          <ControlledInput
            key={field.id}
            id={field.id}
            label={field.label}
            fieldType={field.fieldType}
            errors={errors}
            rules={field.rules}
            options={field.options}
          />
        );
      })}
    </FormFieldsContainer>
  );
}
