"use client";

import { FormProvider, useForm } from "react-hook-form";
import { AuthSchema } from "@/features/auth/model/auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "./Form";

export default function LoginPage() {
  const methods = useForm({ resolver: zodResolver(AuthSchema) });
  return (
    <div className="flex">
      <FormProvider {...methods}>
        <Form />
      </FormProvider>
    </div>
  );
}
