import { NextRequest, NextResponse } from "next/server";

// NextJS Middleware
// This function can be marked `async` if using `await` inside
// ref: https://nextjs.org/docs/app/building-your-application/routing/middleware
export async function middleware(request: NextRequest) {
  // Redirect first page to greeting
  // TODO: check authenticate
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  if (request.nextUrl.pathname === "/auth") {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/:path*"],
};
