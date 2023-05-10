import React from "react";
import { EmailInput } from "@/features/auth/components/EmailInput";
import { PasswordInput } from "@/features/auth/components/PasswordInput";
import { SubmitButton } from "@/features/auth/components/SubmitButton";
import { save } from "./_action";

export const Form = () => {
  return (
    <form action={save}>
      <EmailInput />
      <PasswordInput />
      <SubmitButton />
    </form>
  );
};
