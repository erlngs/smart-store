import { defineMiddleware } from 'astro:middleware';
import { createSupabaseServerClient } from './lib/supabase/server';

export const onRequest = defineMiddleware(async (context, next) => {
  const isAdminRoute = context.url.pathname.startsWith('/admin');
  const cookieName = isAdminRoute ? 'sb-admin-auth-token' : 'sb-customer-auth-token';

  const supabase = createSupabaseServerClient(context.request, context.cookies, cookieName);

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  console.log('User hasil getUser():', user?.email, '| Error:', error?.message);
  console.log('------------------------');

  context.locals.supabase = supabase;
  context.locals.user = user;

  return next();
});