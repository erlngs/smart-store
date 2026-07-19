import { n as __exportAll, t as createComponent } from "./compiler_Dbt8-yav.mjs";
import { C as createAstro, _ as addAttribute, a as Fragment, d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_BaILKhbv.mjs";
import { t as $$BaseLayout } from "./BaseLayout_DUuxkatV.mjs";
import { t as supabase } from "./client_8OWQxcep.mjs";
//#region src/pages/order-confirmation.astro
var order_confirmation_exports = /* @__PURE__ */ __exportAll({
	default: () => $$OrderConfirmation,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$OrderConfirmation = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$OrderConfirmation;
	const orderId = Astro.url.searchParams.get("order");
	let order = null;
	let orderItems = [];
	let profile = null;
	if (orderId) {
		const { data: orderData } = await supabase.from("orders").select("*").eq("id", orderId).single();
		order = orderData;
		if (order) {
			const { data: items } = await supabase.from("order_items").select(`
        *,
        products (
          id,
          name,
          slug,
          image_url
        ),
        product_variants (
          id,
          name,
          value
        )
      `).eq("order_id", order.id);
			orderItems = items || [];
			const { data: profileData } = await supabase.from("profiles").select("full_name, phone, address").eq("id", order.user_id).single();
			profile = profileData;
			order.grand_total;
		}
	}
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Order Confirmation - SmartStore",
		"bodyClass": "order-confirmation"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="page-title light-background"><div class="container d-lg-flex justify-content-between align-items-center"><h1 class="mb-2 mb-lg-0">Order Confirmation</h1><nav class="breadcrumbs"><ol><li><a href="/">Home</a></li><li class="current">Order Confirmation</li></ol></nav></div></div><section id="order-confirmation" class="order-confirmation section"><div class="container" data-aos="fade-up" data-aos-delay="100">${order ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<!-- Success Banner --><div class="confirmation-banner" data-aos="zoom-in" data-aos-delay="100"><div class="banner-icon"><i class="bi bi-bag-check-fill"></i></div><div class="banner-text"><h2>Your Purchase is Confirmed!</h2><p>Thank you for your order. We'll send you a confirmation email shortly.</p></div><div class="order-ref"><span class="ref-label">Reference</span><span class="ref-number">#${order.order_number || order.id?.slice(0, 8)}</span><span class="ref-date">${new Date(order.created_at).toLocaleDateString("id-ID", {
		day: "numeric",
		month: "long",
		year: "numeric"
	})}</span></div></div><!-- Horizontal Progress Tracker --><div class="progress-tracker" data-aos="fade-up" data-aos-delay="150"><div class="row g-0"><!-- Step 1: Verified --><div class="col-3"><div class="tracker-step done"><div class="step-dot"><i class="bi bi-check-lg"></i></div><span class="step-label">Verified</span><small class="step-date">Order confirmed</small></div></div><!-- Step 2: Processing --><div class="col-3"><div${addAttribute(`tracker-step ${order.status === "pending" || order.status === "paid" || order.status === "processing" ? "active" : ""}`, "class")}><div class="step-dot">${order.status === "pending" || order.status === "paid" || order.status === "processing" ? renderTemplate`<i class="bi bi-arrow-repeat"></i>` : renderTemplate`<i class="bi bi-clock"></i>`}</div><span class="step-label">Processing</span><small class="step-date">Being prepared</small></div></div><!-- Step 3: Dispatched --><div class="col-3"><div${addAttribute(`tracker-step ${order.status === "shipped" ? "active" : ""}`, "class")}><div class="step-dot">${order.status === "shipped" ? renderTemplate`<i class="bi bi-truck"></i>` : renderTemplate`<i class="bi bi-box-seam"></i>`}</div><span class="step-label">Dispatched</span><small class="step-date">On the way</small></div></div><!-- Step 4: Delivered --><div class="col-3"><div${addAttribute(`tracker-step ${order.status === "delivered" ? "active" : ""}`, "class")}><div class="step-dot">${order.status === "delivered" ? renderTemplate`<i class="bi bi-house-check"></i>` : renderTemplate`<i class="bi bi-house-door"></i>`}</div><span class="step-label">Delivered</span><small class="step-date">Arrived safely</small></div></div></div></div><!-- Info Cards Row --><div class="row g-4 info-cards-row" data-aos="fade-up" data-aos-delay="200"><!-- Shipping Card --><div class="col-lg-4 col-md-6"><div class="info-tile"><div class="tile-header"><i class="bi bi-pin-map-fill"></i><h4>Delivery Address</h4></div><div class="tile-body"><address>${profile?.full_name || "Customer"}<br>${order.shipping_address || "No address provided"}<br>${order.city || ""}</address><div class="tile-contact"><p><i class="bi bi-envelope"></i> ${order.notes?.match(/Email: ([^,]+)/)?.[1] || "-"}</p><p><i class="bi bi-phone"></i> ${order.notes?.match(/Phone: ([^,]+)/)?.[1] || "-"}</p></div></div></div></div><!-- Payment Card --><div class="col-lg-4 col-md-6"><div class="info-tile"><div class="tile-header"><i class="bi bi-wallet2"></i><h4>Payment Method</h4></div><div class="tile-body"><div class="payment-badge"><i class="bi bi-credit-card-2-front"></i><div><strong>${order.payment_method === "cod" ? "Cash on Delivery" : order.payment_method === "transfer" ? "Bank Transfer" : order.payment_method || "Unknown"}</strong><span>Status: ${order.payment_status || "unpaid"}</span></div></div><div class="billing-note"><i class="bi bi-info-circle"></i><span>Billing matches delivery address</span></div></div></div></div><!-- Summary Card --><div class="col-lg-4 col-md-12"><div class="info-tile summary-tile"><div class="tile-header"><i class="bi bi-receipt"></i><h4>Price Breakdown</h4></div><div class="tile-body"><ul class="cost-list"><li><span>Subtotal</span><span>Rp ${order.total?.toLocaleString("id-ID") || 0}</span></li><li><span>Delivery</span><span>Rp ${order.shipping_cost?.toLocaleString("id-ID") || 0}</span></li><li class="grand-total"><span>Grand Total</span><span>Rp ${order.grand_total?.toLocaleString("id-ID") || 0}</span></li></ul></div></div></div></div><!-- Ordered Products --><div class="ordered-products" data-aos="fade-up" data-aos-delay="250"><h3>Purchased Items</h3><div class="row g-4">${orderItems && orderItems.length > 0 ? orderItems.map((item) => {
		const variant = item.product_variants;
		const variantText = variant ? `${variant.name}: ${variant.value}` : "";
		return renderTemplate`<div class="col-md-6"><div class="product-row"><div class="product-thumb"><img${addAttribute(item.products?.image_url || "/assets/store/img/product/product-placeholder.webp", "src")}${addAttribute(item.products?.name || "Product", "alt")} loading="lazy"></div><div class="product-info"><h5>${item.products?.name || "Product"}</h5><div class="product-attrs">${variantText && renderTemplate`<span class="attr-tag" style="background: #4e73df; color: white;">${variantText}</span>`}<span class="attr-tag">Qty: ${item.quantity}</span>${item.discount_applied > 0 && renderTemplate`<span class="attr-tag" style="background: #dc3545; color: white;">Save ${item.discount_applied}%</span>`}</div><div class="product-qty-price"><span class="qty-label">Price per item</span><span class="amount">Rp ${item.price?.toLocaleString("id-ID") || 0}</span></div></div></div></div>`;
	}) : renderTemplate`<div class="col-12"><p class="text-muted">No items found</p></div>`}</div></div><!-- Delivery & Support Row --><div class="row g-4 extras-row" data-aos="fade-up" data-aos-delay="300"><div class="col-md-6"><div class="delivery-card"><div class="delivery-icon-wrapper"><i class="bi bi-truck"></i></div><div class="delivery-details"><h5>Shipping Details</h5><p><i class="bi bi-calendar3"></i> Expected arrival: 3-5 business days</p><p><i class="bi bi-box-seam"></i> Standard Delivery</p><p><i class="bi bi-tag"></i> Status: <span class="badge bg-\${order.status === 'delivered' ? 'success' : order.status === 'cancelled' ? 'danger' : 'warning'}">$${order.status || "pending"}</span></p></div></div></div><div class="col-md-6"><div class="support-card"><div class="support-icon-wrapper"><i class="bi bi-headset"></i></div><div class="support-details"><h5>Assistance Center</h5><a href="/contact" class="support-link"><i class="bi bi-chat-left-text"></i> Reach Support Team</a><a href="#" class="support-link"><i class="bi bi-book"></i> Browse Help Articles</a></div></div></div></div><!-- Action Buttons --><div class="cta-buttons" data-aos="fade-up" data-aos-delay="350"><div class="row g-3 justify-content-center"><div class="col-md-5 col-lg-4"><a href="/category" class="btn btn-outline-shop"><i class="bi bi-shop"></i>Continue Shopping</a></div><div class="col-md-5 col-lg-4"><a href="/account" class="btn btn-dashboard">Track in Dashboard<i class="bi bi-arrow-right-circle"></i></a></div></div></div>` })}` : renderTemplate`<div class="row justify-content-center"><div class="col-lg-6"><div class="card text-center p-5"><i class="bi bi-exclamation-triangle" style="font-size: 64px; color: #f59e0b;"></i><h4 class="mt-3">Order Not Found</h4><p class="text-muted">We couldn't find your order. Please check your order reference.</p><a href="/" class="btn btn-primary">Go to Home</a></div></div></div>`}</div></section>` })}`;
}, "D:/TUGAS KULIAH/Project MKI/SmartStore/src/pages/order-confirmation.astro", void 0);
var $$file = "D:/TUGAS KULIAH/Project MKI/SmartStore/src/pages/order-confirmation.astro";
var $$url = "/order-confirmation";
//#endregion
//#region \0virtual:astro:page:src/pages/order-confirmation@_@astro
var page = () => order_confirmation_exports;
//#endregion
export { page };
