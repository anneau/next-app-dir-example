"use client";

import { FormProvider, useForm } from "react-hook-form";
import { LoginSchema } from "./dependencies/login-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginForm } from "./components/LoginForm";

export default function LoginPage() {
  const methods = useForm({ resolver: zodResolver(LoginSchema) });
  return (
    <div className="flex">
      <FormProvider {...methods}>
        <LoginForm />
      </FormProvider>
    </div>
  );
}
