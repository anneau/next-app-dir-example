import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { LoginSchema } from "./login-schema";

export const useLoginForm = () => {
  return useFormContext<z.infer<typeof LoginSchema>>();
};
