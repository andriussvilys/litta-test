import { FormRules } from "./commons";
import { BasicInfoFieldLabels, BasicInfoFieldName } from "./userFormFields";

const fieldIsRequired = (fieldLabel:string) => `${fieldLabel} is required.`

export const validationRules:Record<string, FormRules> = {
    [BasicInfoFieldName.FIRSTNAME]: {
        required: fieldIsRequired(BasicInfoFieldLabels[BasicInfoFieldName.FIRSTNAME])
    },
    [BasicInfoFieldName.LASTNAME]: {
        required: fieldIsRequired(BasicInfoFieldLabels[BasicInfoFieldName.LASTNAME])
    },
    [BasicInfoFieldName.EMAIL]: {
        required: fieldIsRequired(BasicInfoFieldLabels[BasicInfoFieldName.EMAIL])
    },
    [BasicInfoFieldName.BIRTHDATE]: {
        required: fieldIsRequired(BasicInfoFieldLabels[BasicInfoFieldName.BIRTHDATE])
    }
}