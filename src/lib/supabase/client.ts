import { createBrowserClient } from '@supabase/ssr';

const supabaseUrl: string = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey: string = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey);