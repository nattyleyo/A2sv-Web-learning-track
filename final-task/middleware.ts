import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.JWT_SECRET,
  });
  // console.log(, 11111111111);
  if (token) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/", request.url));
}
export const config = {
  matcher: ["/me", "/login", "/bookmark"],
};
