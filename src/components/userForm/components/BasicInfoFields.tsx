import React from "react";
import {
  BasicInfoFieldName,
  BasicInfoFieldLabels,
  bloodGroupOptions,
  FieldType,
  genderOptions,
} from "../../../definitions/userFormFields";
import ControlledInput from "./ControlledInput";
import { useFormContext } from "react-hook-form";
import { FormField, UserFormSection } from "../../../definitions/commons";
import FormFieldsContainer from "./FormFieldsContainer";
import { validationRules } from "../../../definitions/validationRules";


type FieldSetData = {
  legend: string;
  fields: FormField[];
};

export default function BasicInfoFields() {
  const {
    formState: { errors },
  } = useFormContext();

  const fieldSets: FieldSetData[] = [
    {
      legend: UserFormSection.BASIC_INFO,
      fields: [
        {
          label: BasicInfoFieldLabels[BasicInfoFieldName.FIRSTNAME],
          id: BasicInfoFieldName.FIRSTNAME,
          fieldType: FieldType.TEXT,
          rules: validationRules[BasicInfoFieldName.FIRSTNAME],
        },
        {
          label: BasicInfoFieldLabels[BasicInfoFieldName.LASTNAME],
          id: BasicInfoFieldName.LASTNAME,
          fieldType: FieldType.TEXT,
          rules: validationRules[BasicInfoFieldName.LASTNAME],
        },
        {
          label: BasicInfoFieldLabels[BasicInfoFieldName.USERNAME],
          id: BasicInfoFieldName.USERNAME,
          fieldType: FieldType.TEXT,
        },
        {
          label: BasicInfoFieldLabels[BasicInfoFieldName.BIRTHDATE],
          id: BasicInfoFieldName.BIRTHDATE,
          fieldType: FieldType.DATE,
          rules: validationRules[BasicInfoFieldName.BIRTHDATE],
        },
      ],
    },
    {
      legend: UserFormSection.CONTACT,
      fields: [
        {
          label: BasicInfoFieldLabels[BasicInfoFieldName.EMAIL],
          id: BasicInfoFieldName.EMAIL,
          fieldType: FieldType.EMAIL,
          rules: validationRules[BasicInfoFieldName.EMAIL],
        },
        {
          label: BasicInfoFieldLabels[BasicInfoFieldName.PHONE],
          id: BasicInfoFieldName.PHONE,
          fieldType: FieldType.PHONE,
        },
      ],
    },
    {
      legend: UserFormSection.OTHER,
      fields: [
        {
          label: BasicInfoFieldLabels[BasicInfoFieldName.AGE],
          id: BasicInfoFieldName.AGE,
          fieldType: FieldType.INT,
        },

        {
          label: BasicInfoFieldLabels[BasicInfoFieldName.WEIGHT],
          id: BasicInfoFieldName.WEIGHT,
          fieldType: FieldType.NUM,
        },

        {
          label: BasicInfoFieldLabels[BasicInfoFieldName.HEIGHT],
          id: BasicInfoFieldName.HEIGHT,
          fieldType: FieldType.NUM,
        },
        {
          label: BasicInfoFieldLabels[BasicInfoFieldName.GENDER],
          id: BasicInfoFieldName.GENDER,
          fieldType: FieldType.DROPDOWN,
          options: genderOptions,
        },

        {
          label: BasicInfoFieldLabels[BasicInfoFieldName.BLOODGROUP],
          id: BasicInfoFieldName.BLOODGROUP,
          fieldType: FieldType.DROPDOWN,
          options: bloodGroupOptions,
        },
      ],
    },
  ];

  return (
    <>
      {fieldSets.map((fieldSet) => {
        return (
          <FormFieldsContainer header={fieldSet.legend}>
            {fieldSet.fields.map((field) => {
              return (
                <ControlledInput
                  key={field.id}
                  id={field.id}
                  label={field.label}
                  fieldType={field.fieldType}
                  rules={field.rules}
                  errors={errors}
                  options={field.options}
                />
              );
            })}
          </FormFieldsContainer>
        );
      })}
    </>
  );
}
