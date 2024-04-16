import { NextResponse } from "next/server";

export function middleware(request) {
  //   if (request.nextUrl.pathname != "/login") {
  //   return NextResponse.redirect(new URL("/login", request.url));
  //   }

  return NextResponse.redirect(new URL("/login", request.url));
}

// Can't go inside these url as it always redirects to login page..
export const config = {
  matcher: ["/about/:path*", "/studentlist/:path*"],
};
