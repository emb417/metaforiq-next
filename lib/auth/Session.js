import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const secretKey = process.env.SECRET_KEY;
const key = new TextEncoder().encode(secretKey);
const maxAge = 1800; // 30 minutes

function getExpires() {
  const expires = new Date(Date.now() + maxAge * 1000); // 30 minutes from now
  return expires;
}

export async function encryptToken(token) {
  const jwt = await new SignJWT({ token })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30 minutes from now")
    .sign(key);
  return jwt;
}

export async function decryptToken(jwt) {
  const { payload } = await jwtVerify(jwt, key, { algorithms: ["HS256"] });
  return payload;
}

export async function login(data) {
  const { user } = data;
  const session = await encryptToken({ user, expires: getExpires() });

  cookies().set("metaforiq_session", session, {
    maxAge,
    httpOnly: true,
    sameSite: "strict",
  });
  return;
}

export async function updateSession(request) {
  const session = request.cookies.get("metaforiq_session")?.value;
  if (typeof session === "undefined") return null;

  const jwt = await decryptToken(session);
  jwt.expires = getExpires();
  const res = NextResponse.next();
  res.cookies.set({
    name: "metaforiq_session",
    value: await encryptToken(jwt),
    httpOnly: true,
    maxAge,
    sameSite: "strict",
  });

  return res;
}
