"use server";

import { prisma } from "@/libs/prisma";
import { AuthSchema } from "@/features/auth/model/auth-schema";

export async function save(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const data = AuthSchema.parse({ email, password });

  await prisma.user.create({ data });
}
