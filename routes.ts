/**
 * An array of routes that are protected
 * These routes require authentication
 * @type {string[]}
 */

export const protectedRoutes = [
  "/boards/create",
  "/dashboard",
];

/**
 * An array of routes that are used for authentication
 * These routes will redirect users to /settings
 * @type {string[]}
 */

export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
];

/**
 * Prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */

export const authPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/dashboard";

export const SIGNIN_ERROR_URL = "/auth/error";
