import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const secretKey = process.env.SECRET_KEY;
const key = new TextEncoder().encode(secretKey);

export async function encryptToken(token) {
  const jwt = await new SignJWT({ token })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30m")
    .sign(key);
  return jwt;
}

export async function decryptToken(jwt) {
  const { payload } = await jwtVerify(jwt, key, { algorithms: ["HS256"] });
  return payload;
}

export async function login(data) {
  const { user } = data;

  const expires = new Date(Date.now() + 1800 * 1000); // 30m
  const session = await encryptToken({ user, expires });

  cookies().set("metaforiq_session", session, {
    expires,
    httpOnly: true,
  });
  return;
}

export async function updateSession(request) {
  const session = request.cookies.get("metaforiq_session")?.value;
  if (typeof session === "undefined") return null;

  const jwt = await decryptToken(session);
  jwt.expires = new Date(Date.now() + 1800 * 1000); // +30m
  const res = NextResponse.next();
  res.cookies.set({
    name: "metaforiq_session",
    value: await encryptToken(jwt),
    httpOnly: true,
    maxAge: jwt.expires,
  });

  return res;
}
