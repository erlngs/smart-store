import { n as __exportAll, t as createComponent } from "./compiler_Dbt8-yav.mjs";
import { d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_BaILKhbv.mjs";
import { t as $$BaseLayout } from "./BaseLayout_DUuxkatV.mjs";
//#region src/pages/404.astro
var _404_exports = /* @__PURE__ */ __exportAll({
	default: () => $$404,
	file: () => $$file,
	url: () => $$url
});
var $$404 = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "404 - SmartStore",
		"bodyClass": "page-404"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="page-title light-background"><div class="container d-lg-flex justify-content-between align-items-center"><h1 class="mb-2 mb-lg-0">404</h1><nav class="breadcrumbs"><ol><li><a href="index.html">Home</a></li><li class="current">404</li></ol></nav></div></div><section id="error-404" class="error-404 section"><div class="container" data-aos="fade-up" data-aos-delay="100"><div class="row align-items-center gy-5"><div class="col-lg-6" data-aos="fade-right" data-aos-delay="200"><div class="visual-panel"><div class="code-display"><span class="digit">4</span><span class="digit accent-digit"><i class="bi bi-emoji-frown"></i></span><span class="digit">4</span></div><div class="decorative-lines"><span></span><span></span><span></span></div></div></div><!-- End Visual Panel --><div class="col-lg-6" data-aos="fade-left" data-aos-delay="300"><div class="content-panel"><span class="badge-label" data-aos="fade-down" data-aos-delay="350"><i class="bi bi-info-circle me-1"></i> Error</span><h2 class="panel-title" data-aos="fade-up" data-aos-delay="400">We Can't Find That Page</h2><p class="panel-desc" data-aos="fade-up" data-aos-delay="450">It seems the page you were trying to reach doesn't exist anymore, or perhaps it has been moved to a new location.</p><div class="search-wrapper" data-aos="fade-up" data-aos-delay="500"><form action="#" class="inline-search"><div class="position-relative"><i class="bi bi-search search-icon"></i><input type="text" class="form-control" placeholder="Try searching for content..." aria-label="Search"></div></form></div><div class="action-links" data-aos="fade-up" data-aos-delay="500"><a href="/" class="btn home-btn"><i class="bi bi-house-door me-2"></i>Return Home</a><a href="#" class="btn outline-btn"><i class="bi bi-envelope me-2"></i>Report Issue</a></div></div></div><!-- End Content Panel --></div></div></section>` })}`;
}, "D:/TUGAS KULIAH/Project MKI/SmartStore/src/pages/404.astro", void 0);
var $$file = "D:/TUGAS KULIAH/Project MKI/SmartStore/src/pages/404.astro";
var $$url = "/404";
//#endregion
//#region \0virtual:astro:page:src/pages/404@_@astro
var page = () => _404_exports;
//#endregion
export { page };
