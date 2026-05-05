import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/es") || pathname.startsWith("/en")) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/es${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
 matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};