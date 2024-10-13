import React from 'react'
import { useFormContext } from 'react-hook-form'
import { BasicInfoField } from '../../../definitions/userFormFields'

export default function BasicInfoFields() {
const {register, formState: { errors }} = useFormContext()
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"left", gap:"8px", maxWidth:"200px"}}>
        <input {...register(BasicInfoField.ID)} disabled/>
        <input {...register(BasicInfoField.FIRSTNAME)} />
        <input {...register(BasicInfoField.LASTNAME, { required: true })} />
        <input {...register(BasicInfoField.MAIDENNAME)} />
        <input {...register(BasicInfoField.AGE)} />
        <input {...register(BasicInfoField.GENDER)} />
        <input {...register(BasicInfoField.EMAIL)} />
        <input {...register(BasicInfoField.PHONE)} />
        <input {...register(BasicInfoField.USERNAME)} />
        <input {...register(BasicInfoField.PASSWORD)} />
        <input {...register(BasicInfoField.BIRTHDATE)} />
        <input {...register(BasicInfoField.IMAGE)} />
        <input {...register(BasicInfoField.BLOODGROUP)} />
        <input {...register(BasicInfoField.HEIGHT)} />
        <input {...register(BasicInfoField.WEIGHT)} />
        <input {...register(BasicInfoField.EYECOLOR)} />
        {errors.lastName && <span>This field is required</span>}
    </div>
  )
}
