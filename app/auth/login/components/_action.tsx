"use server";

import { prisma } from "@/libs/prisma";
import { LoginSchema } from "../dependencies/login-schema";

export async function save(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const data = LoginSchema.parse({ email, password });

  await prisma.user.create({ data });
}
