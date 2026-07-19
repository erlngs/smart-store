import { n as __exportAll, t as createComponent } from "./compiler_Dbt8-yav.mjs";
import { C as createAstro, _ as addAttribute, a as Fragment, d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_BaILKhbv.mjs";
import { t as renderScript } from "./script_QDTy_Iu8.mjs";
import { t as $$BaseLayout } from "./BaseLayout_DUuxkatV.mjs";
//#region src/pages/cart.astro
var cart_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Cart,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Cart = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Cart;
	const { user, supabase } = Astro.locals;
	let cartItems = [];
	let subtotal = 0;
	let totalItems = 0;
	let shippingCost = 0;
	let grandTotal = 0;
	if (user) {
		const { data, error } = await supabase.from("cart").select(`
      id,
      quantity,
      product_id,
      color_variant_id,
      size_variant_id,
      products (
        id,
        name,
        slug,
        price,
        discount,
        image_url,
        stock
      ),
      color_variant:product_variants!cart_color_variant_id_fkey (
        id, name, value, stock, price_extra
      ),
      size_variant:product_variants!cart_size_variant_id_fkey (
        id, name, value, stock, price_extra
      )
    `).eq("user_id", user.id);
		if (!error && data) {
			cartItems = data;
			cartItems.forEach((item) => {
				const basePrice = item.products.price;
				const discount = item.products.discount || 0;
				const finalPrice = (basePrice + ((item.color_variant?.price_extra || 0) + (item.size_variant?.price_extra || 0))) * (1 - discount / 100);
				subtotal += finalPrice * item.quantity;
				totalItems += item.quantity;
			});
		}
		shippingCost = 2e4;
		grandTotal = subtotal + shippingCost;
	}
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Cart - SmartStore",
		"bodyClass": "cart"
	}, { "default": async ($$result) => renderTemplate`${maybeRenderHead($$result)}<section id="cart" class="cart section"><div class="container section-title" data-aos="fade-up"><h2>Cart</h2><p>Keranjang belanja Anda di SmartStore</p></div><div class="container" data-aos="fade-up" data-aos-delay="100">${!user ? renderTemplate`<div class="text-center py-5"><div class="empty-cart-icon mb-4"><i class="bi bi-cart3" style="font-size: 80px; color: #dee2e6;"></i></div><h3>Your Cart is Empty</h3><p class="text-muted">Please login to view your cart items.</p><div class="mt-3"><a href="/login" class="btn btn-primary me-2">Login</a><a href="/category" class="btn btn-outline-primary">Continue Shopping</a></div></div>` : cartItems && cartItems.length > 0 ? renderTemplate`<div class="row gy-4"><div class="col-lg-7" data-aos="fade-right" data-aos-delay="200"><div class="items-list" id="cartItemsList">${cartItems.map((item) => {
		const basePrice = item.products.price;
		const discount = item.products.discount || 0;
		const extraPrice = (item.color_variant?.price_extra || 0) + (item.size_variant?.price_extra || 0);
		const finalPrice = (basePrice + extraPrice) * (1 - discount / 100);
		const itemTotal = finalPrice * item.quantity;
		return renderTemplate`<div class="cart-item"${addAttribute(item.id, "data-cart-id")} data-aos="zoom-in"><button class="dismiss-btn remove-item" type="button"${addAttribute(item.id, "data-cart-id")}><i class="bi bi-x-lg"></i></button><div class="row g-0 align-items-center"><div class="col-md-3 col-4"><div class="item-thumb"><img${addAttribute(item.products.image_url || "/assets/store/img/product/product-placeholder.webp", "src")}${addAttribute(item.products.name, "alt")} class="img-fluid" loading="lazy"></div></div><div class="col-md-9 col-8"><div class="item-body"><h6 class="item-name"><a${addAttribute(`/product-details?slug=${item.products.slug}`, "href")}>${item.products.name}</a></h6><div class="item-attributes">${item.color_variant && renderTemplate`<span class="attribute-badge" style="background: #4e73df; color: white;">Color: ${item.color_variant.value}</span>`}${item.size_variant && renderTemplate`<span class="attribute-badge" style="background: #6f42c1; color: white;">Size: ${item.size_variant.value}</span>`}${discount > 0 && renderTemplate`<span class="attribute-badge" style="background: #dc3545; color: white;">Save ${discount}%</span>`}<span class="attribute-badge">Stock: ${Math.min(item.color_variant?.stock ?? Infinity, item.size_variant?.stock ?? Infinity, item.products.stock ?? Infinity) || 0}</span></div><div class="item-bottom"><div class="item-pricing">${discount > 0 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<span class="unit-price">Rp ${finalPrice.toLocaleString("id-ID")}</span><span class="was-price">Rp ${(basePrice + extraPrice).toLocaleString("id-ID")}</span>` })}` : renderTemplate`<span class="unit-price">Rp ${finalPrice.toLocaleString("id-ID")}</span>`}${extraPrice > 0 && renderTemplate`<span class="text-muted small">+Rp ${extraPrice.toLocaleString("id-ID")}</span>`}</div><div class="quantity-selector"><button class="quantity-btn decrease"${addAttribute(item.id, "data-cart-id")}><i class="bi bi-dash"></i></button><input type="number" class="quantity-input"${addAttribute(item.quantity, "value")} min="1"${addAttribute(Math.min(item.color_variant?.stock ?? 999, item.size_variant?.stock ?? 999, item.products.stock ?? 999), "max")}${addAttribute(item.id, "data-cart-id")}><button class="quantity-btn increase"${addAttribute(item.id, "data-cart-id")}><i class="bi bi-plus"></i></button></div><div class="line-total"${addAttribute(`item-total-${item.id}`, "id")}>Rp ${itemTotal.toLocaleString("id-ID")}</div></div></div></div></div></div>`;
	})}</div><div class="cart-toolbar" data-aos="fade-up" data-aos-delay="300"><a href="/category" class="toolbar-link"><i class="bi bi-arrow-left"></i> Continue Shopping</a><button class="toolbar-clear" type="button" id="emptyCartBtn"><i class="bi bi-trash3"></i> Empty Cart</button></div></div><div class="col-lg-5" data-aos="fade-left" data-aos-delay="300"><div class="order-panel"><div class="panel-header"><i class="bi bi-bag-check"></i><h4>Order Overview</h4></div><div class="panel-body"><div class="promo-code"><label class="promo-label">Have a promo code?</label><div class="input-group"><input type="text" class="form-control" placeholder="Enter code"><button class="btn apply-btn" type="button">Apply</button></div></div><div class="cost-breakdown"><div class="cost-row"><span class="cost-label">Subtotal (${totalItems} items)</span><span class="cost-amount" id="subtotalDisplay">Rp ${subtotal.toLocaleString("id-ID")}</span></div><div class="cost-row shipping-row"><span class="cost-label">Delivery</span><div class="delivery-choices"><div class="form-check"><input class="form-check-input" type="radio" name="delivery" id="del-standard" checked value="20000"><label class="form-check-label" for="del-standard">Standard - Rp 20.000</label></div><div class="form-check"><input class="form-check-input" type="radio" name="delivery" id="del-express" value="50000"><label class="form-check-label" for="del-express">Express - Rp 50.000</label></div></div></div></div><div class="grand-total"><span>Grand Total</span><span class="total-amount" id="grandTotalDisplay">Rp ${grandTotal.toLocaleString("id-ID")}</span></div><a href="/checkout" class="btn checkout-btn">Complete Purchase <i class="bi bi-cart-check"></i></a><div class="secure-badges"><p class="badges-label">Secure Payment Methods</p><div class="badges-row"><i class="bi bi-credit-card-2-front"></i><i class="bi bi-paypal"></i><i class="bi bi-shield-lock"></i><i class="bi bi-bank2"></i></div></div></div></div></div></div>` : renderTemplate`<div class="text-center py-5"><div class="empty-cart-icon mb-4"><i class="bi bi-cart3" style="font-size: 80px; color: #dee2e6;"></i></div><h3>Your Cart is Empty</h3><p class="text-muted">Start shopping and add items to your cart.</p><div class="mt-3"><a href="/category" class="btn btn-primary">Start Shopping</a></div></div>`}</div></section>${renderScript($$result, "D:/TUGAS KULIAH/Project MKI/SmartStore/src/pages/cart.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "D:/TUGAS KULIAH/Project MKI/SmartStore/src/pages/cart.astro", void 0);
var $$file = "D:/TUGAS KULIAH/Project MKI/SmartStore/src/pages/cart.astro";
var $$url = "/cart";
//#endregion
//#region \0virtual:astro:page:src/pages/cart@_@astro
var page = () => cart_exports;
//#endregion
export { page };
