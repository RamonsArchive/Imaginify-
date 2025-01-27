import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', "/api/:path*", '/api/webhooks(.*)','/api/webhooks/stripe']);
 export default clerkMiddleware(async (auth, request) => {
 if(!isPublicRoute(request)) {
    await auth.protect();
 }
}
);

console.log('This is the middleware config');


export const config = {
  matcher: [
   // '/', TRYING TO NOT PROTECT THESE WEEBHOOKS COMMENTED
    '/api/webhooks(.*)', // todo link this proplery. Public
    '/api/webhooks/stripe', // Public

    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
    
  ],
}; 
