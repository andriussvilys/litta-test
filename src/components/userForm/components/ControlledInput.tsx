import React from "react";
import { FieldType } from "../../../definitions/userFormFields";
import {
  Controller,
  ControllerRenderProps,
  FieldErrors,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { FormRules } from "../../../definitions/commons";
import { Message } from "primereact/message";

export interface ControlledInputProps {
  id: string;
  label: string;
  fieldType: FieldType;
  errors: FieldErrors<FieldValues>;
  rules?: FormRules;
  options?: string[];
}

const getInputComponent = (
  id: string,
  fieldType: FieldType,
  field: ControllerRenderProps<FieldValues, string>,
  options?: string[]
) => {
  switch (fieldType) {
    case FieldType.TEXT:
      return <InputText className="w-full" id={id} {...field} />;
    case FieldType.INT:
        return <InputText className="w-full" keyfilter={fieldType} id={id} {...field} />;
    case FieldType.NUM:
        return <InputText className="w-full" keyfilter={fieldType} id={id} {...field} />;
    case FieldType.EMAIL:
        return <InputText className="w-full" keyfilter={fieldType} id={id} {...field} />;
    case FieldType.DATE:
        return <Calendar className="w-full" {...field} dateFormat="yy-m-d"/>
    case FieldType.DROPDOWN:
        return <Dropdown className="w-full" {...field} options={options}/>
    case FieldType.PHONE:
        return <InputText className="w-full" id={id} {...field} />;

    default:
      return null;
  }
};

export default function ControlledInput({
  id,
  label,
  fieldType,
  errors,
  rules,
  options,
}: ControlledInputProps) {
  const { control} = useFormContext();

  return (
    <Controller
      control={control}
      name={id}
      rules={rules}
      render={({ field }) => (
        <div className="flex flex-column gap-2">
          <FloatLabel className="flex-1">
            {getInputComponent(id, fieldType, field, options)}
            <label htmlFor={id}>{label}</label>
          </FloatLabel>
          {errors && errors[id]?.message && 
          <Message className="flex-1" severity="error" text={(errors[id] as { message: string }).message} />}
        </div>
      )}
    />
  );
}
