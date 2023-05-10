import React from "react";
import { EmailInput } from "./EmailInput";
import { PasswordInput } from "./PasswordInput";
import { SubmitButton } from "./SubmitButton";
import { useLoginForm } from "../dependencies/use-login-form";

export const LoginForm = () => {
  const { handleSubmit } = useLoginForm();
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <EmailInput />
      <PasswordInput />
      <SubmitButton />
    </form>
  );
};
