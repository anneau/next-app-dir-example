import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { AuthSchema } from "../model/auth-schema";

export const useAuthForm = () => {
  return useFormContext<z.infer<typeof AuthSchema>>();
};
