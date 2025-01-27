import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();
console.log('This is the middleware config');


export const config = {
  matcher: [
    '/',
    '/api/webhooks(.*)', // todo link this proplery. Public
    '/api/webhooks/stripe', // Public

    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
    
  ],
}; 
