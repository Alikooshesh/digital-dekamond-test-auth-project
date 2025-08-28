"use client";
import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema";
import { useLogin } from "./hooks/useLogin";
import Button from "@/components/general/Button";
import { FormTextField } from "@/components/general/hookForm/FormField";

type FormValues = z.infer<typeof schema>;

const AuthForm = () => {
  const {
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    control,
    setError,
  } = useForm<FormValues>({
    mode: "onChange",
    resolver: zodResolver(schema),
    defaultValues: { phone: "" },
  });

  const { mutate: loginMutate, isPending: loginPending } = useLogin({
    onError: (error) => setError("root", { message: error }),
  });

  const onSubmit = (values: FormValues) => loginMutate(values);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 flex flex-col gap-16" noValidate>
      <FormTextField<FormValues>
        control={control}
        name="phone"
        label="Phone Number"
        placeholder="09xxxxxxxxx"
      />
      <Button
        type="submit"
        isLoading={loginPending || isSubmitting}
        disabled={!isValid}
        role="Login"
      >
        Login
      </Button>
      {errors.root?.message && <span className="block text-error">{errors.root?.message}</span>}
    </form>
  );
};

export default AuthForm;
