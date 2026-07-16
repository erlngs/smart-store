import { createBrowserClient } from '@supabase/ssr';

const supabaseUrl: string = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey: string = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

function createSupabaseBrowserClient(cookieName: string) {
  return createBrowserClient(supabaseUrl, supabaseAnonKey, {
    cookieOptions: { name: cookieName },
    isSingleton: false, // penting: cegah instance ke-cache/ke-share
  });
}

// Session pelanggan
export const supabase = createSupabaseBrowserClient('sb-customer-auth-token');

// Session admin
export const supabaseAdmin = createSupabaseBrowserClient('sb-admin-auth-token');