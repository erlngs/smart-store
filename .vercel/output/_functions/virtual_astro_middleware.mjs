import { O as defineMiddleware, v as sequence } from "./chunks/render_CPqsrJ_Z.mjs";
import { t as createSupabaseServerClient } from "./chunks/server_HOC7wNjo.mjs";
//#endregion
//#region \0virtual:astro:middleware
var onRequest = sequence(defineMiddleware(async (context, next) => {
	const cookieName = context.url.pathname.startsWith("/admin") ? "sb-admin-auth-token" : "sb-customer-auth-token";
	const supabase = createSupabaseServerClient(context.request, context.cookies, cookieName);
	const { data: { user }, error } = await supabase.auth.getUser();
	console.log("User hasil getUser():", user?.email, "| Error:", error?.message);
	console.log("------------------------");
	context.locals.supabase = supabase;
	context.locals.user = user;
	return next();
}));
//#endregion
export { onRequest };
