import { auth } from "@/auth";
import {
  authRoutes,
  protectedRoutes,
  DEFAULT_LOGIN_REDIRECT,
} from "./routes";

export default auth((req) => {
  const { auth, nextUrl } = req;

  const isLoggedIn = !!auth;
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isProtectedRoute = protectedRoutes.includes(
    nextUrl.pathname
  );

  if (!isLoggedIn && !isAuthRoute && isProtectedRoute) {
    const newUrl = new URL("/auth/login", nextUrl.origin);
    return Response.redirect(newUrl);
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      const alreadyAuthenticatURL = new URL(
        DEFAULT_LOGIN_REDIRECT,
        nextUrl.origin
      );
      return Response.redirect(alreadyAuthenticatURL);
    } else {
      return;
    }
  }
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};
