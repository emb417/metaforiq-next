import { NextResponse } from "next/server";
import { updateSession } from "@/lib/auth/Session";

export default async function middleware(request) {
  const response = await updateSession(request);
  if (!response){
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return response;
}

export const config = {
  matcher: "/libowski/wish-list",
};
