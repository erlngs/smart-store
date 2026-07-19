import { n as __exportAll, t as createComponent } from "./compiler_Dbt8-yav.mjs";
import { d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_BaILKhbv.mjs";
import { t as renderScript } from "./script_QDTy_Iu8.mjs";
import { t as $$BaseLayout } from "./BaseLayout_DUuxkatV.mjs";
//#region src/pages/login.astro
var login_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Login,
	file: () => $$file,
	url: () => $$url
});
var $$Login = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Login - SmartStore" }, { "default": async ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="page-title light-background"><div class="container d-lg-flex justify-content-between align-items-center"><h1 class="mb-2 mb-lg-0">Login</h1><nav class="breadcrumbs"><ol><li><a href="/">Home</a></li><li class="current">Login</li></ol></nav></div></div><section id="login" class="login section"><div class="container" data-aos="fade-up" data-aos-delay="100"><div class="row justify-content-center"><div class="col-lg-8 col-md-10"><div class="auth-container" data-aos="fade-in" data-aos-delay="200"><div class="auth-form login-form active"><div class="form-header"><h3>Welcome Back</h3><p>Sign in to your account</p></div><form class="auth-form-content" id="loginForm"><div class="input-group mb-3"><span class="input-icon"><i class="bi bi-envelope"></i></span><input type="email" class="form-control" id="email" placeholder="Email address" required autocomplete="email"></div><div class="input-group mb-3"><span class="input-icon"><i class="bi bi-lock"></i></span><input type="password" class="form-control" id="password" placeholder="Password" required autocomplete="current-password"><span class="password-toggle" id="togglePassword"><i class="bi bi-eye"></i></span></div><div id="errorMsg" class="alert alert-danger d-none"></div><div id="successMsg" class="alert alert-success d-none"></div><button type="submit" class="auth-btn primary-btn mb-3" id="loginBtn"><span id="loginText">Sign In</span><span id="loginSpinner" class="spinner-border spinner-border-sm d-none"></span><i class="bi bi-arrow-right"></i></button><div class="divider"><span>or</span></div><button type="button" class="auth-btn social-btn"><i class="bi bi-google"></i>Continue with Google</button><div class="switch-form"><span>Don't have an account?</span><a href="/register" class="switch-btn">Create account</a></div></form></div></div></div></div></div></section>${renderScript($$result, "D:/TUGAS KULIAH/Project MKI/SmartStore/src/pages/login.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "D:/TUGAS KULIAH/Project MKI/SmartStore/src/pages/login.astro", void 0);
var $$file = "D:/TUGAS KULIAH/Project MKI/SmartStore/src/pages/login.astro";
var $$url = "/login";
//#endregion
//#region \0virtual:astro:page:src/pages/login@_@astro
var page = () => login_exports;
//#endregion
export { page };
