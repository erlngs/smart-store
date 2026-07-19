import { n as __exportAll, t as createComponent } from "./compiler_Dbt8-yav.mjs";
import { _ as addAttribute, a as Fragment, d as renderTemplate, h as maybeRenderHead, i as renderComponent, x as unescapeHTML } from "./server_BaILKhbv.mjs";
import { t as $$BaseLayout } from "./BaseLayout_DUuxkatV.mjs";
import { t as supabase } from "./client_8OWQxcep.mjs";
//#region src/components/home/Hero.astro
var $$Hero = createComponent(async ($$result, $$props, $$slots) => {
	const { data: heroSettings } = await supabase.from("settings").select("key, value").in("key", [
		"hero_title",
		"hero_subtitle",
		"hero_tagline",
		"hero_btn_text",
		"hero_btn_link"
	]);
	const settings = {};
	heroSettings?.forEach((s) => {
		settings[s.key] = s.value;
	});
	console.log("🔍 Hero Settings:", settings);
	console.log("📝 Hero Title:", settings["hero_title"]);
	const title = settings["hero_title"] || "Elevate Your Everyday Style";
	const subtitle = settings["hero_subtitle"] || "Temukan produk berkualitas terbaik hanya di SmartStore";
	const tagline = settings["hero_tagline"] || "Premium Collection";
	const btnText = settings["hero_btn_text"] || "Explore Collection";
	const btnLink = settings["hero_btn_link"] || "/category";
	const { data: heroProducts } = await supabase.from("products").select("*").eq("is_active", true).limit(3);
	let productsWithRating = [];
	if (heroProducts && heroProducts.length > 0) for (const product of heroProducts) {
		const { data: ratings } = await supabase.from("reviews").select("rating").eq("product_id", product.id);
		let avgRating = 0;
		let totalReviews = 0;
		if (ratings && ratings.length > 0) {
			totalReviews = ratings.length;
			avgRating = ratings.reduce((acc, r) => acc + r.rating, 0) / totalReviews;
		}
		productsWithRating.push({
			...product,
			avgRating,
			totalReviews
		});
	}
	function renderStars(rating) {
		const fullStars = Math.floor(rating);
		const hasHalfStar = rating % 1 >= .5;
		let html = "";
		for (let i = 0; i < fullStars; i++) html += "<i class=\"bi bi-star-fill\"></i>";
		if (hasHalfStar) html += "<i class=\"bi bi-star-half\"></i>";
		while (html.split("<i").length - 1 < 5) html += "<i class=\"bi bi-star\"></i>";
		return html;
	}
	return renderTemplate`${maybeRenderHead($$result)}<section id="hero" class="hero section"><div class="container" data-aos="fade-up" data-aos-delay="100"><div class="row justify-content-center text-center"><div class="col-lg-8"><div class="headline-block" data-aos="zoom-in" data-aos-delay="100"><span class="tagline">${tagline}</span><h1 class="main-heading">${title}</h1><p class="lead-text">${subtitle}</p><div class="cta-group" data-aos="fade-up" data-aos-delay="200"><a${addAttribute(btnLink, "href")} class="btn-explore">${btnText}</a><a href="/category" class="btn-outline-explore"><i class="bi bi-grid me-2"></i>View Categories</a></div></div></div></div><div class="row g-4 justify-content-center mt-4">${productsWithRating && productsWithRating.length > 0 ? productsWithRating.map((product, index) => renderTemplate`<div class="col-lg-4 col-md-6" data-aos="fade-up"${addAttribute(200 + index * 100, "data-aos-delay")}><div class="showcase-card"><div class="card-visual"><img${addAttribute(product.image_url || "/assets/store/img/product/product-placeholder.webp", "src")} class="img-fluid"${addAttribute(product.name, "alt")}><span class="label">${product.discount > 0 ? `${product.discount}% Off` : "Top Rated"}</span></div><div class="card-details"><h4>${product.name}</h4><div class="stars">${unescapeHTML(renderStars(product.avgRating))}</div><span class="text-muted small">(${product.totalReviews})</span><div class="pricing">${product.discount > 0 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<span class="now">Rp ${(product.price * (1 - product.discount / 100)).toLocaleString("id-ID")}</span><span class="was">Rp ${product.price.toLocaleString("id-ID")}</span>` })}` : renderTemplate`<span class="now">Rp ${product.price.toLocaleString("id-ID")}</span>`}</div></div></div></div>`) : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200"><div class="showcase-card"><div class="card-visual"><img src="/assets/store/img/product/product-4.webp" class="img-fluid" alt="Product"><span class="label">Top Rated</span></div><div class="card-details"><h4>Signature Audio Device</h4><div class="pricing"><span class="now">Rp 249.000</span><span class="was">Rp 349.000</span></div></div></div></div><div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300"><div class="showcase-card elevated"><div class="card-visual"><img src="/assets/store/img/product/product-8.webp" class="img-fluid" alt="Product"><span class="label hot">Most Popular</span></div><div class="card-details"><h4>Elite Smart Accessory</h4><div class="pricing"><span class="now">Rp 179.000</span><span class="was">Rp 259.000</span></div></div></div></div><div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400"><div class="showcase-card"><div class="card-visual"><img src="/assets/store/img/product/product-11.webp" class="img-fluid" alt="Product"><span class="label">New Arrival</span></div><div class="card-details"><h4>Modern Lifestyle Gear</h4><div class="pricing"><span class="now">Rp 129.000</span><span class="was">Rp 189.000</span></div></div></div></div>` })}`}</div><div class="row mt-5"><div class="col-12" data-aos="fade-up" data-aos-delay="500"><div class="perks-strip"><div class="row g-3 justify-content-center"><div class="col-lg-3 col-md-6 col-6"><div class="perk"><i class="bi bi-truck"></i><span>Complimentary Delivery</span></div></div><div class="col-lg-3 col-md-6 col-6"><div class="perk"><i class="bi bi-shield-check"></i><span>Certified Quality</span></div></div><div class="col-lg-3 col-md-6 col-6"><div class="perk"><i class="bi bi-chat-dots"></i><span>Always-On Assistance</span></div></div><div class="col-lg-3 col-md-6 col-6"><div class="perk"><i class="bi bi-arrow-return-left"></i><span>Hassle-Free Returns</span></div></div></div></div></div></div></div></section>`;
}, "D:/TUGAS KULIAH/Project MKI/SmartStore/src/components/home/Hero.astro", void 0);
//#endregion
//#region src/components/home/PromoCards.astro
var $$PromoCards = createComponent(async ($$result, $$props, $$slots) => {
	const { data: promoSettings } = await supabase.from("settings").select("key, value").in("key", [
		"promo_title",
		"promo_subtitle",
		"promo_btn_text",
		"promo_btn_link",
		"promo_image"
	]);
	const settings = {};
	promoSettings?.forEach((s) => {
		settings[s.key] = s.value;
	});
	const promoTitle = settings["promo_title"] || "Autumn Essentials";
	const promoSubtitle = settings["promo_subtitle"] || "Temukan koleksi terbaru kami dengan harga terbaik";
	const promoBtnText = settings["promo_btn_text"] || "Browse Collection";
	const promoBtnLink = settings["promo_btn_link"] || "/category";
	const promoImage = settings["promo_image"] || "/assets/store/img/product/product-showcase-6.webp";
	const { data: promoProducts } = await supabase.from("products").select("*").eq("is_active", true).limit(4);
	return renderTemplate`${maybeRenderHead($$result)}<section id="promo-cards" class="promo-cards section"><div class="container" data-aos="fade-up" data-aos-delay="100"><div class="row mb-4"><div class="col-12"><div class="featured-banner" data-aos="zoom-in" data-aos-delay="150"><img${addAttribute(promoImage, "src")}${addAttribute(promoTitle, "alt")} class="img-fluid"><div class="banner-content"><span class="badge-label">Fresh Arrivals</span><h2>${promoTitle}</h2><p>${promoSubtitle}</p><a${addAttribute(promoBtnLink, "href")} class="btn-explore">${promoBtnText} <i class="bi bi-arrow-right"></i></a></div></div></div></div><div class="row g-4">${promoProducts && promoProducts.length > 0 ? promoProducts.map((product, index) => renderTemplate`<div class="col-lg-3 col-md-6" data-aos="fade-up"${addAttribute(200 + index * 100, "data-aos-delay")}><div class="collection-tile"><img${addAttribute(product.image_url || "/assets/store/img/product/product-placeholder.webp", "src")}${addAttribute(product.name, "alt")} loading="lazy" class="img-fluid"><div class="tile-content"><h4>${product.name}</h4><span class="item-count">${product.stock || 0} items</span><a${addAttribute(`/product-details?slug=${product.slug}`, "href")} class="tile-link">Browse <i class="bi bi-chevron-right"></i></a></div></div></div>`) : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<div class="col-lg-3 col-md-6"><div class="collection-tile"><img src="/assets/store/img/product/product-m-14.webp" alt="Gentlemen's Attire" loading="lazy" class="img-fluid"><div class="tile-content"><h4>Gentlemen's Attire</h4><span class="item-count">318 items</span><a href="#" class="tile-link">Browse <i class="bi bi-chevron-right"></i></a></div></div></div><div class="col-lg-3 col-md-6"><div class="collection-tile"><img src="/assets/store/img/product/product-f-18.webp" alt="Casual Collection" loading="lazy" class="img-fluid"><div class="tile-content"><h4>Casual Collection</h4><span class="item-count">163 items</span><a href="#" class="tile-link">Browse <i class="bi bi-chevron-right"></i></a></div></div></div><div class="col-lg-3 col-md-6"><div class="collection-tile"><img src="/assets/store/img/product/product-f-6.webp" alt="Skincare &amp; Glow" loading="lazy" class="img-fluid"><div class="tile-content"><h4>Skincare & Glow</h4><span class="item-count">94 items</span><a href="#" class="tile-link">Browse <i class="bi bi-chevron-right"></i></a></div></div></div><div class="col-lg-3 col-md-6"><div class="collection-tile"><img src="/assets/store/img/product/product-m-17.webp" alt="Bags &amp; Extras" loading="lazy" class="img-fluid"><div class="tile-content"><h4>Bags & Extras</h4><span class="item-count">271 items</span><a href="#" class="tile-link">Browse <i class="bi bi-chevron-right"></i></a></div></div></div>` })}`}</div></div></section>`;
}, "D:/TUGAS KULIAH/Project MKI/SmartStore/src/components/home/PromoCards.astro", void 0);
//#endregion
//#region src/components/home/BestSellers.astro
var $$BestSellers = createComponent(async ($$result, $$props, $$slots) => {
	const { data: products, error } = await supabase.from("products").select("*").eq("is_active", true).order("created_at", { ascending: false }).limit(4);
	let productsWithRating = [];
	if (products && products.length > 0) for (const product of products) {
		const { data: ratings } = await supabase.from("reviews").select("rating").eq("product_id", product.id);
		let avgRating = 0;
		let totalReviews = 0;
		if (ratings && ratings.length > 0) {
			totalReviews = ratings.length;
			avgRating = ratings.reduce((acc, r) => acc + r.rating, 0) / totalReviews;
		}
		productsWithRating.push({
			...product,
			avgRating,
			totalReviews
		});
	}
	function renderStars(rating) {
		const fullStars = Math.floor(rating);
		const hasHalfStar = rating % 1 >= .5;
		let html = "";
		for (let i = 0; i < fullStars; i++) html += "<i class=\"bi bi-star-fill\"></i>";
		if (hasHalfStar) html += "<i class=\"bi bi-star-half\"></i>";
		while (html.split("<i").length - 1 < 5) html += "<i class=\"bi bi-star\"></i>";
		return html;
	}
	return renderTemplate`${maybeRenderHead($$result)}<section id="best-sellers" class="best-sellers section"><div class="container section-title" data-aos="fade-up"><h2>Best Sellers</h2><p>Temukan berbagai produk berkualitas dengan harga terbaik di SmartStore</p></div><div class="container" data-aos="fade-up" data-aos-delay="100"><div class="row g-4">${productsWithRating && productsWithRating.length > 0 ? productsWithRating.map((product, index) => renderTemplate`<div class="col-lg-6" data-aos="fade-up"${addAttribute(100 + index * 100, "data-aos-delay")}><div class="catalog-card"><div class="row g-0"><div class="col-sm-5"><div class="card-img-wrapper">${product.discount > 0 && renderTemplate`<span class="tag sale">${product.discount}% Off</span>`}${product.discount === 0 && renderTemplate`<span class="tag">Exclusive</span>`}<img${addAttribute(product.image_url || "/assets/store/img/product/product-placeholder.webp", "src")}${addAttribute(product.name, "alt")} class="img-fluid" loading="lazy"><div class="quick-actions"><button class="qaction-btn"><i class="bi bi-heart"></i></button><a${addAttribute(`/product-details?slug=${product.slug}`, "href")} class="qaction-btn"><i class="bi bi-eye"></i></a><button class="qaction-btn"><i class="bi bi-shuffle"></i></button></div></div></div><div class="col-sm-7"><div class="card-details"><span class="label">${product.category || "General"}</span><h4 class="title"><a${addAttribute(`/product-details?slug=${product.slug}`, "href")}>${product.name}</a></h4><div class="review-info"><div class="star-group">${unescapeHTML(renderStars(product.avgRating))}</div><span class="reviews">(${product.totalReviews})</span></div><div class="pricing">${product.discount > 0 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<span class="was">Rp ${product.price.toLocaleString("id-ID")}</span><span class="now">Rp ${(product.price * (1 - product.discount / 100)).toLocaleString("id-ID")}</span>` })}` : renderTemplate`<span>Rp ${product.price.toLocaleString("id-ID")}</span>`}</div><div class="variant-dots"><span class="dot active" style="background-color: #2563eb;"></span><span class="dot" style="background-color: #059669;"></span><span class="dot" style="background-color: #dc2626;"></span></div><a${addAttribute(`/product-details?slug=${product.slug}`, "href")} class="shop-btn">Lihat Produk <i class="bi bi-arrow-right"></i></a></div></div></div></div></div>`) : renderTemplate`<div class="col-12 text-center py-5"><p>Belum ada produk tersedia.</p></div>`}</div></div></section>`;
}, "D:/TUGAS KULIAH/Project MKI/SmartStore/src/components/home/BestSellers.astro", void 0);
//#endregion
//#region src/components/home/ProductTabs.astro
var $$ProductTabs = createComponent(async ($$result, $$props, $$slots) => {
	const { data: popularProducts } = await supabase.from("products").select("*").eq("is_active", true).limit(3);
	const { data: topRatedProducts } = await supabase.from("products").select("*").eq("is_active", true).order("created_at", { ascending: false }).limit(3);
	const { data: curatedProducts } = await supabase.from("products").select("*").eq("is_active", true).limit(3);
	async function getProductRatings(products) {
		if (!products || products.length === 0) return [];
		const result = [];
		for (const product of products) {
			const { data: ratings } = await supabase.from("reviews").select("rating").eq("product_id", product.id);
			let avgRating = 0;
			let totalReviews = 0;
			if (ratings && ratings.length > 0) {
				totalReviews = ratings.length;
				avgRating = ratings.reduce((acc, r) => acc + r.rating, 0) / totalReviews;
			}
			result.push({
				...product,
				avgRating,
				totalReviews
			});
		}
		return result;
	}
	const popularWithRating = await getProductRatings(popularProducts);
	const topRatedWithRating = await getProductRatings(topRatedProducts);
	const curatedWithRating = await getProductRatings(curatedProducts);
	function renderStars(rating) {
		const fullStars = Math.floor(rating);
		const hasHalfStar = rating % 1 >= .5;
		let html = "";
		for (let i = 0; i < fullStars; i++) html += "<i class=\"bi bi-star-fill\"></i>";
		if (hasHalfStar) html += "<i class=\"bi bi-star-half\"></i>";
		while (html.split("<i").length - 1 < 5) html += "<i class=\"bi bi-star\"></i>";
		return html;
	}
	return renderTemplate`${maybeRenderHead($$result)}<section id="cards" class="cards section"><div class="container" data-aos="fade-up" data-aos-delay="100"><ul class="nav nav-tabs category-tabs justify-content-center" data-aos="zoom-in" data-aos-delay="150"><li class="nav-item"><a class="nav-link active" data-bs-toggle="tab" data-bs-target="#cards-tab-1"><i class="bi bi-lightning-charge"></i> Popular Picks</a></li><li class="nav-item"><a class="nav-link" data-bs-toggle="tab" data-bs-target="#cards-tab-2"><i class="bi bi-trophy"></i> Top Rated</a></li><li class="nav-item"><a class="nav-link" data-bs-toggle="tab" data-bs-target="#cards-tab-3"><i class="bi bi-gem"></i> Curated Selection</a></li></ul><div class="tab-content" data-aos="fade-up" data-aos-delay="200"><!-- Popular Picks Tab --><div class="tab-pane fade show active" id="cards-tab-1"><div class="row gy-4">${popularWithRating && popularWithRating.length > 0 ? popularWithRating.map((product) => renderTemplate`<div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200"><div class="item-card"><div class="item-img"><img${addAttribute(product.image_url || "/assets/store/img/product/product-placeholder.webp", "src")}${addAttribute(product.name, "alt")} class="img-fluid">${product.discount > 0 && renderTemplate`<span class="tag tag-fresh">-${product.discount}%</span>`}<div class="quick-actions"><a href="#"><i class="bi bi-heart"></i></a><a${addAttribute(`/product-details?slug=${product.slug}`, "href")}><i class="bi bi-bag-plus"></i></a></div></div><div class="item-details"><h4>${product.name}</h4><div class="stars">${unescapeHTML(renderStars(product.avgRating))}</div><span class="review-count">(${product.totalReviews})</span><div class="pricing">${product.discount > 0 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<span class="was-price">Rp ${product.price.toLocaleString("id-ID")}</span><span class="price">Rp ${(product.price * (1 - product.discount / 100)).toLocaleString("id-ID")}</span>` })}` : renderTemplate`<span class="price">Rp ${product.price.toLocaleString("id-ID")}</span>`}</div></div></div></div>`) : renderTemplate`<div class="col-12 text-center py-4"><p>Belum ada produk.</p></div>`}</div></div><!-- Top Rated Tab --><div class="tab-pane fade" id="cards-tab-2"><div class="row gy-4">${topRatedWithRating && topRatedWithRating.length > 0 ? topRatedWithRating.map((product) => renderTemplate`<div class="col-lg-4 col-md-6"><div class="item-card"><div class="item-img"><img${addAttribute(product.image_url || "/assets/store/img/product/product-placeholder.webp", "src")}${addAttribute(product.name, "alt")} class="img-fluid">${product.discount > 0 && renderTemplate`<span class="tag tag-discount">-${product.discount}%</span>`}<div class="quick-actions"><a href="#"><i class="bi bi-heart"></i></a><a${addAttribute(`/product-details?slug=${product.slug}`, "href")}><i class="bi bi-bag-plus"></i></a></div></div><div class="item-details"><h4>${product.name}</h4><div class="stars">${unescapeHTML(renderStars(product.avgRating))}</div><span class="review-count">(${product.totalReviews})</span><div class="pricing">${product.discount > 0 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<span class="was-price">Rp ${product.price.toLocaleString("id-ID")}</span><span class="price">Rp ${(product.price * (1 - product.discount / 100)).toLocaleString("id-ID")}</span>` })}` : renderTemplate`<span class="price">Rp ${product.price.toLocaleString("id-ID")}</span>`}</div></div></div></div>`) : renderTemplate`<div class="col-12 text-center py-4"><p>Belum ada produk.</p></div>`}</div></div><!-- Curated Selection Tab --><div class="tab-pane fade" id="cards-tab-3"><div class="row gy-4">${curatedWithRating && curatedWithRating.length > 0 ? curatedWithRating.map((product) => renderTemplate`<div class="col-lg-4 col-md-6"><div class="item-card"><div class="item-img"><img${addAttribute(product.image_url || "/assets/store/img/product/product-placeholder.webp", "src")}${addAttribute(product.name, "alt")} class="img-fluid"><span class="tag tag-exclusive">Exclusive</span><div class="quick-actions"><a href="#"><i class="bi bi-heart"></i></a><a${addAttribute(`/product-details?slug=${product.slug}`, "href")}><i class="bi bi-bag-plus"></i></a></div></div><div class="item-details"><h4>${product.name}</h4><div class="stars">${unescapeHTML(renderStars(product.avgRating))}</div><span class="review-count">(${product.totalReviews})</span><div class="pricing">${product.discount > 0 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result) => renderTemplate`<span class="was-price">Rp ${product.price.toLocaleString("id-ID")}</span><span class="price">Rp ${(product.price * (1 - product.discount / 100)).toLocaleString("id-ID")}</span>` })}` : renderTemplate`<span class="price">Rp ${product.price.toLocaleString("id-ID")}</span>`}</div></div></div></div>`) : renderTemplate`<div class="col-12 text-center py-4"><p>Belum ada produk.</p></div>`}</div></div></div></div></section>`;
}, "D:/TUGAS KULIAH/Project MKI/SmartStore/src/components/home/ProductTabs.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Home - SmartStore" }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Hero", $$Hero, {})}${renderComponent($$result, "PromoCards", $$PromoCards, {})}${renderComponent($$result, "BestSellers", $$BestSellers, {})}${renderComponent($$result, "ProductTabs", $$ProductTabs, {})}` })}`;
}, "D:/TUGAS KULIAH/Project MKI/SmartStore/src/pages/index.astro", void 0);
var $$file = "D:/TUGAS KULIAH/Project MKI/SmartStore/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
