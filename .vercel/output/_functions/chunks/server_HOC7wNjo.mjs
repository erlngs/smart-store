import { createServerClient, parseCookieHeader } from "@supabase/ssr";
//#region src/lib/supabase/server.ts
var supabaseUrl = "https://cjrisprnqzktdtnoiyuy.supabase.co";
var supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqcmlzcHJucXprdGR0bm9peXV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQwMDg4MjIsImV4cCI6MjA5OTU4NDgyMn0.qFXfpKXNSRQhMwpeencJ2xoiK59Fc15ipWUA_yDcMrQ";
function createSupabaseServerClient(request, cookies, cookieName = "sb-customer-auth-token") {
	return createServerClient(supabaseUrl, supabaseAnonKey, {
		cookieOptions: { name: cookieName },
		cookies: {
			getAll() {
				return parseCookieHeader(request.headers.get("Cookie") ?? "");
			},
			setAll(cookiesToSet) {
				cookiesToSet.forEach(({ name, value, options }) => {
					cookies.set(name, value, options);
				});
			}
		}
	});
}
async function isUserAdmin(supabase, userId) {
	const { data, error } = await supabase.from("profiles").select("role").eq("id", userId).single();
	if (error || !data) return false;
	return data.role === "admin";
}
//#endregion
export { isUserAdmin as n, createSupabaseServerClient as t };
