import { n as __exportAll, t as createComponent } from "./compiler_Dbt8-yav.mjs";
import { d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_BaILKhbv.mjs";
import { t as renderScript } from "./script_QDTy_Iu8.mjs";
import { t as $$BaseLayout } from "./BaseLayout_DUuxkatV.mjs";
//#region src/pages/checkout.astro
var checkout_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Checkout,
	file: () => $$file,
	url: () => $$url
});
var $$Checkout = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Checkout - SmartStore",
		"bodyClass": "checkout"
	}, { "default": async ($$result) => renderTemplate`${maybeRenderHead($$result)}<section id="checkout" class="checkout section"><div class="container" data-aos="fade-up" data-aos-delay="100"><!-- Progress Stepper --><div class="progress-stepper d-flex justify-content-center mb-5" data-aos="fade-down" data-aos-delay="100"><div class="step-item active"><div class="step-icon"><i class="bi bi-person"></i></div><span class="step-label">Details</span></div><div class="step-line"></div><div class="step-item"><div class="step-icon"><i class="bi bi-truck"></i></div><span class="step-label">Shipping</span></div><div class="step-line"></div><div class="step-item"><div class="step-icon"><i class="bi bi-credit-card"></i></div><span class="step-label">Payment</span></div><div class="step-line"></div><div class="step-item"><div class="step-icon"><i class="bi bi-check-circle"></i></div><span class="step-label">Confirm</span></div></div><!-- Loading State --><div id="checkout-loading" class="text-center py-5"><div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div><p class="mt-3">Loading checkout...</p></div><!-- Checkout Content --><div id="checkout-content" style="display: none;"></div></div></section>${renderScript($$result, "D:/TUGAS KULIAH/Project MKI/SmartStore/src/pages/checkout.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "D:/TUGAS KULIAH/Project MKI/SmartStore/src/pages/checkout.astro", void 0);
var $$file = "D:/TUGAS KULIAH/Project MKI/SmartStore/src/pages/checkout.astro";
var $$url = "/checkout";
//#endregion
//#region \0virtual:astro:page:src/pages/checkout@_@astro
var page = () => checkout_exports;
//#endregion
export { page };
