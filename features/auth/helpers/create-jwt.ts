import { SignJWT, importPKCS8 } from "jose";

export const createJwt = async (
  payload: Record<string, unknown>,
  expire = "5d"
) => {
  const pkcs8 = process.env.PKCS8?.replace("\\n", "\n") ?? "";
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "ES256" })
    .setExpirationTime(expire)
    .sign(await importPKCS8(pkcs8, "ES256"));
};
