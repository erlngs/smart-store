import { createServerClient, parseCookieHeader, type CookieOptionsWithName } from '@supabase/ssr';
import type { AstroCookies } from 'astro';

const supabaseUrl: string = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey: string = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

export function createSupabaseServerClient(
  request: Request,
  cookies: AstroCookies,
  cookieName: string = 'sb-customer-auth-token'
) {
  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookieOptions: { name: cookieName },
    cookies: {
      getAll() {
        return parseCookieHeader(request.headers.get('Cookie') ?? '');
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          cookies.set(name, value, options as CookieOptionsWithName);
        });
      },
    },
  });
}

export async function isUserAdmin(
  supabase: ReturnType<typeof createSupabaseServerClient>,
  userId: string
) {
  const { data, error } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', userId)
    .single();

  if (error || !data) return false;
  return (data as any).role === 'admin';
}

export async function getUserProfile(
  supabase: ReturnType<typeof createSupabaseServerClient>,
  userId: string
) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) throw error;
  return data;
}