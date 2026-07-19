import { n as __exportAll, t as createComponent } from "./compiler_Dbt8-yav.mjs";
import { _ as addAttribute, d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_BaILKhbv.mjs";
import { t as renderScript } from "./script_QDTy_Iu8.mjs";
import { t as supabase } from "./client_8OWQxcep.mjs";
import { t as $$AdminLayout } from "./AdminLayout_Ct2MDB6Q.mjs";
//#region src/pages/admin/reviews.astro
var reviews_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Reviews,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$Reviews = createComponent(async ($$result, $$props, $$slots) => {
	const { data: reviews, error } = await supabase.from("reviews").select(`
    *,
    profiles:user_id (
      full_name,
      email
    ),
    products (
      id,
      name,
      slug,
      image_url
    )
  `).order("created_at", { ascending: false });
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Reviews - SmartStore Admin" }, { "default": async ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="d-sm-flex align-items-center justify-content-between mb-4"><h1 class="h3 mb-0 text-gray-800">Manajemen Review</h1><div><span class="badge bg-primary me-2">${reviews?.length || 0} Total Review</span></div></div><div class="row mb-3"><div class="col-md-4"><select class="form-select" id="filterRating"><option value="all">Semua Rating</option><option value="5">⭐ 5 Bintang</option><option value="4">⭐ 4 Bintang</option><option value="3">⭐ 3 Bintang</option><option value="2">⭐ 2 Bintang</option><option value="1">⭐ 1 Bintang</option></select></div><div class="col-md-4"><input type="text" class="form-control" id="searchReview" placeholder="Cari berdasarkan produk atau user..."></div></div><div class="row">${reviews && reviews.length > 0 ? reviews.map((review) => renderTemplate`<div class="col-12 mb-4 review-card"${addAttribute(review.rating, "data-rating")}${addAttribute((review.products?.name || "") + " " + (review.profiles?.full_name || ""), "data-search")}><div class="card shadow"><div class="card-header py-3 d-flex justify-content-between align-items-center"><div><h6 class="m-0 font-weight-bold text-primary"><i class="bi bi-star-fill me-2" style="color: #f59e0b;"></i>Rating: ${review.rating}/5</h6><small class="text-muted">${new Date(review.created_at).toLocaleString("id-ID")}</small></div><div><span class="badge bg-secondary">${review.profiles?.full_name || "Unknown"}</span></div></div><div class="card-body"><div class="row"><!-- Product Info --><div class="col-md-3"><div class="text-center"><img${addAttribute(review.products?.image_url || "/assets/store/img/product/product-placeholder.webp", "src")}${addAttribute(review.products?.name || "Product", "alt")} style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px;"><h6 class="mt-2"><a${addAttribute(`/product-details?slug=${review.products?.slug}`, "href")} target="_blank">${review.products?.name || "Unknown Product"}</a></h6></div></div><!-- Review Content --><div class="col-md-6"><div class="review-content"><div class="stars mb-2">${[
		1,
		2,
		3,
		4,
		5
	].map((star) => star <= review.rating ? renderTemplate`<i class="bi bi-star-fill" style="color: #f59e0b;"></i>` : renderTemplate`<i class="bi bi-star" style="color: #ddd;"></i>`)}</div><p class="mb-1">${review.comment || "Tidak ada komentar"}</p><small class="text-muted"><i class="bi bi-person me-1"></i>${review.profiles?.full_name || "Unknown"}<span class="mx-2">|</span><i class="bi bi-envelope me-1"></i>${review.profiles?.email || "-"}</small></div></div><!-- Actions --><div class="col-md-3"><h6><i class="bi bi-gear me-2"></i>Aksi</h6><div class="d-flex flex-column gap-2"><button class="btn btn-sm btn-outline-danger delete-review-btn"${addAttribute(review.id, "data-review-id")}><i class="bi bi-trash me-1"></i>Hapus</button><a${addAttribute(`/product-details?slug=${review.products?.slug}#product-details-tab-feedback`, "href")} class="btn btn-sm btn-outline-primary" target="_blank"><i class="bi bi-eye me-1"></i>Lihat di Produk</a></div></div></div></div></div></div>`) : renderTemplate`<div class="col-12 text-center py-5"><i class="bi bi-chat-square-text" style="font-size: 48px; color: #dee2e6;"></i><p class="text-muted mt-3">Belum ada review</p></div>`}</div>${renderScript($$result, "D:/TUGAS KULIAH/Project MKI/SmartStore/src/pages/admin/reviews.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "D:/TUGAS KULIAH/Project MKI/SmartStore/src/pages/admin/reviews.astro", void 0);
var $$file = "D:/TUGAS KULIAH/Project MKI/SmartStore/src/pages/admin/reviews.astro";
var $$url = "/admin/reviews";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/reviews@_@astro
var page = () => reviews_exports;
//#endregion
export { page };
