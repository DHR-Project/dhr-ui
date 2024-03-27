import { NextResponse } from "next/server";

// NextJS Middleware
// This function can be marked `async` if using `await` inside
// ref: https://nextjs.org/docs/app/building-your-application/routing/middleware
export async function middleware() {
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [],
};
