// middleware.js
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  '/announcements(.*)'
]);

export default clerkMiddleware((auth, req) => {
  // Protect the announcements route
  if (isProtectedRoute(req)) {
    auth.protect();  // Remove the parentheses - auth is already the object
  }

  // Handle redirection after sign-in
  if (auth.userId && req.nextUrl.pathname === '/sign-in') {
    return Response.redirect(new URL('/announcements', req.url));
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};