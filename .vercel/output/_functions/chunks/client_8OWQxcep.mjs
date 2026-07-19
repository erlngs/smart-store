import { createBrowserClient } from "@supabase/ssr";
//#region src/lib/supabase/client.ts
var supabaseUrl = "https://cjrisprnqzktdtnoiyuy.supabase.co";
var supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqcmlzcHJucXprdGR0bm9peXV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQwMDg4MjIsImV4cCI6MjA5OTU4NDgyMn0.qFXfpKXNSRQhMwpeencJ2xoiK59Fc15ipWUA_yDcMrQ";
function createSupabaseBrowserClient(cookieName) {
	return createBrowserClient(supabaseUrl, supabaseAnonKey, {
		cookieOptions: { name: cookieName },
		isSingleton: false
	});
}
var supabase = createSupabaseBrowserClient("sb-customer-auth-token");
createSupabaseBrowserClient("sb-admin-auth-token");
//#endregion
export { supabase as t };
