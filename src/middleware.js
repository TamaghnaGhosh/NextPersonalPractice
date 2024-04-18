import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  //   if (request.nextUrl.pathname != "/login") {
  //   return NextResponse.redirect(new URL("/login", request.url));
  //   }

  // return NextResponse.redirect(new URL("/login", request.url));
  if (pathname !== "/login" && !pathname.startsWith("/about/")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// Can't go inside these url as it always redirects to login page..
export const config = {
  matcher: ["/about/:path*", "/studentlist/:path*"],
};
