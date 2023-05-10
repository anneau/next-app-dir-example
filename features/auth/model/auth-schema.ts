import { z } from "zod";

export const AuthSchema = z.object({
  email: z.string().email("メールアドレスの形式が誤っています"),
  password: z.string().min(8, "パスワードは8文字以上にしてください"),
});
