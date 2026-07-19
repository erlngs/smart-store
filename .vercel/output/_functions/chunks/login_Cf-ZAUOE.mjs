import { n as __exportAll, t as createComponent } from "./compiler_Dbt8-yav.mjs";
import { C as createAstro, c as renderSlot, d as renderTemplate, g as renderHead, h as maybeRenderHead, i as renderComponent } from "./server_BaILKhbv.mjs";
import { t as renderScript } from "./script_QDTy_Iu8.mjs";
//#region src/layouts/AuthLayout.astro
createAstro("https://astro.build");
var $$AuthLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$AuthLayout;
	const { title = "Authentication" } = Astro.props;
	return renderTemplate`<html lang="id" data-astro-cid-s6yg6tnz><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title} - SmartStore</title><link href="/assets/admin/img/favicon.png" rel="icon"><!-- Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"><!-- Bootstrap CSS --><link href="/assets/admin/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"><link href="/assets/admin/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"><!-- Admin CSS --><link href="/assets/admin/css/main.css" rel="stylesheet">${renderHead($$result)}</head><body data-astro-cid-s6yg6tnz><div class="auth-wrapper" data-astro-cid-s6yg6tnz><div class="auth-card" data-astro-cid-s6yg6tnz><!-- Logo --><div class="auth-logo" data-astro-cid-s6yg6tnz><a href="/" data-astro-cid-s6yg6tnz><img src="/assets/admin/img/logo.webp" alt="SmartStore" data-astro-cid-s6yg6tnz><h4 data-astro-cid-s6yg6tnz>SmartStore</h4></a></div><!-- Content -->${renderSlot($$result, $$slots["default"])}</div></div><script src="/assets/admin/vendor/bootstrap/js/bootstrap.bundle.min.js"><\/script></body></html>`;
}, "D:/TUGAS KULIAH/Project MKI/SmartStore/src/layouts/AuthLayout.astro", void 0);
//#endregion
//#region src/pages/admin/login.astro
var login_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Login,
	file: () => $$file,
	url: () => $$url
});
var $$Login = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "AuthLayout", $$AuthLayout, { "title": "Admin Login" }, { "default": async ($$result) => renderTemplate`${maybeRenderHead($$result)}<h5 class="text-center mb-3">Admin Login</h5><p class="text-center text-muted small mb-4">Masuk untuk mengakses dashboard</p><form id="loginForm"><div class="mb-3"><label for="email" class="form-label">Email</label><input type="email" class="form-control" id="email" placeholder="admin@email.com" required></div><div class="mb-3"><label for="password" class="form-label">Password</label><div class="input-group"><input type="password" class="form-control" id="password" placeholder="Masukkan password" required><button class="btn btn-outline-secondary" type="button" id="togglePassword"><i class="bi bi-eye"></i></button></div></div><div id="errorMsg" class="alert alert-danger d-none" role="alert"></div><button type="submit" class="btn btn-primary w-100" id="loginBtn"><span id="loginText">Sign In</span><span id="loginSpinner" class="spinner-border spinner-border-sm d-none" role="status"></span></button></form><p class="text-center text-muted small mt-3">&copy; 2026 SmartStore - All rights reserved</p>${renderScript($$result, "D:/TUGAS KULIAH/Project MKI/SmartStore/src/pages/admin/login.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "D:/TUGAS KULIAH/Project MKI/SmartStore/src/pages/admin/login.astro", void 0);
var $$file = "D:/TUGAS KULIAH/Project MKI/SmartStore/src/pages/admin/login.astro";
var $$url = "/admin/login";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/login@_@astro
var page = () => login_exports;
//#endregion
export { page };
