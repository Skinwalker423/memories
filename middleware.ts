import { type NextRequest } from "next/server";
import { updateSession } from "./utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/(api|trpc)(.*)",
    "/",
  ],
};

// import { auth } from "@/auth";

// import {
//   authRoutes,
//   protectedRoutes,
//   DEFAULT_LOGIN_REDIRECT,
// } from "./routes";

// export default auth((req) => {
//   const { auth, nextUrl } = req;

//   const isLoggedIn = !!auth;
//   const isAuthRoute = authRoutes.includes(nextUrl.pathname);
//   const isProtectedRoute = protectedRoutes.includes(
//     nextUrl.pathname
//   );

//   if (!isLoggedIn && !isAuthRoute && isProtectedRoute) {
//     const newUrl = new URL("/auth/login", nextUrl.origin);
//     return Response.redirect(newUrl);
//   }

//   if (isAuthRoute) {
//     if (isLoggedIn) {
//       const alreadyAuthenticatURL = new URL(
//         DEFAULT_LOGIN_REDIRECT,
//         nextUrl.origin
//       );
//       return Response.redirect(alreadyAuthenticatURL);
//     } else {
//       return;
//     }
//   }
// });

// export const config = {
//   matcher: [
//     "/((?!.+\\.[\\w]+$|_next).*)",
//     "/",
//     "/(api|trpc)(.*)",
//   ],
// };
