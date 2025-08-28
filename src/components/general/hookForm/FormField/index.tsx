"use client";

import { Controller, Control, FieldValues, Path } from "react-hook-form";
import TextField, { TextFieldProps } from "@/components/general/TextField";

type FormTextFieldProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  rules?: object;
} & Omit<TextFieldProps, "errorMessage">;

export function FormTextField<T extends FieldValues>({
  control,
  name,
  rules,
  label,
  ...props
}: FormTextFieldProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          {...props}
          label={label}
          variant={fieldState.error ? "error" : "default"}
          errorMessage={fieldState.error?.message}
        />
      )}
    />
  );
}
