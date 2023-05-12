"use server";

import { prisma } from "@/libs/prisma";
import { AuthSchema } from "@/features/auth/model/auth-schema";
import { createJwt } from "@/features/auth/helpers/create-jwt";
import { cookies } from "next/headers";

export async function save(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const data = AuthSchema.parse({ email, password });

  const user = await prisma.user.findUnique({ where: { email: data.email } });

  if (user && user.password === data.password) {
    const jwt = await createJwt({ email: user.email });
    // @ts-ignore
    cookies().set({
      name: "session",
      value: jwt,
      httpOnly: true,
      path: "/",
    });
  }
}
