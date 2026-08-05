import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Define public paths that anyone can visit
  const isPublicPath = 
    path === "/" || 
    path === "/login" || 
    path === "/register";

  const token = request.cookies.get("fortress_token")?.value || "";

  // If visiting a protected dashboard route without a token, redirect to login
  // (Disabled token check temporarily for local testing if needed)
  if (!isPublicPath && !token && process.env.NODE_ENV === "production") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Exclude static assets, api routes, and _next internals from middleware
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};