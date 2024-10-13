import { Fieldset } from "primereact/fieldset";
import React from "react";

interface FormFieldsContainerProps {
  children: React.ReactNode;
  header: string;
}
export default function FormFieldsContainer({children, header}:FormFieldsContainerProps) {
  return (
    <Fieldset legend={header}>
      <div className="flex flex-column gap-3">{children}</div>
    </Fieldset>
  );
}
