import React from "react";
import { EmailInput } from "./EmailInput";
import { PasswordInput } from "./PasswordInput";
import { SubmitButton } from "./SubmitButton";
import { save } from "./_action";

export const LoginForm = () => {
  return (
    <form action={save}>
      <EmailInput />
      <PasswordInput />
      <SubmitButton />
    </form>
  );
};
