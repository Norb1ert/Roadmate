import { auth } from "./src/app/auth";

export const middleware = auth;

export const config = {
  matcher: ["/profile"],
};
