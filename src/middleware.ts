// src/middleware.ts
import { defineMiddleware } from 'astro:middleware';
import { supabase } from './lib/supabase';

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  
  // LEWATKAN HALAMAN LOGIN DAN STATIC
  if (url.pathname === '/admin/login' || url.pathname.match(/\.(css|js|png|jpg|jpeg|gif|svg|ico|webp|woff|woff2|ttf)$/)) {
    return next();
  }

  // PROTECT ADMIN
  if (url.pathname.startsWith('/admin')) {
    const accessToken = context.cookies.get('sb-access-token')?.value;

    if (!accessToken) {
      return context.redirect('/admin/login');
    }

    try {
      const { data: { user }, error } = await supabase.auth.getUser(accessToken);
      
      if (error || !user) {
        return context.redirect('/admin/login');
      }

      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single();

      if (profile?.role !== 'admin') {
        await supabase.auth.signOut();
        return context.redirect('/admin/login');
      }

      return next();
      
    } catch {
      return context.redirect('/admin/login');
    }
  }

  return next();
});