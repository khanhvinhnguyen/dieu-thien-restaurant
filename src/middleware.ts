"use client"
import createMiddleware from 'next-intl/middleware';
import { locales } from './navigation';

 
export default createMiddleware({
  locales,
  defaultLocale: 'vi'
});
 
export const config = {
  matcher: ['/', '/(vi|en|zh)/:path*']
};