import { n as __exportAll, t as createComponent } from "./compiler_Dbt8-yav.mjs";
import { _ as addAttribute, d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_BaILKhbv.mjs";
import { t as renderScript } from "./script_QDTy_Iu8.mjs";
import { t as supabase } from "./client_8OWQxcep.mjs";
import { t as $$AdminLayout } from "./AdminLayout_Ct2MDB6Q.mjs";
//#region src/pages/admin/orders.astro
var orders_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Orders,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$Orders = createComponent(async ($$result, $$props, $$slots) => {
	const { data: orders, error } = await supabase.from("orders").select("*").order("created_at", { ascending: false });
	let ordersWithProfile = [];
	if (orders && orders.length > 0) for (const order of orders) {
		const { data: profile } = await supabase.from("profiles").select("full_name, phone").eq("id", order.user_id).single();
		const { data: items } = await supabase.from("order_items").select(`
        id,
        quantity,
        price,
        discount_applied,
        product_id
      `).eq("order_id", order.id);
		let itemsWithProduct = [];
		if (items && items.length > 0) for (const item of items) {
			const { data: product } = await supabase.from("products").select("name, image_url").eq("id", item.product_id).single();
			itemsWithProduct.push({
				...item,
				products: product
			});
		}
		ordersWithProfile.push({
			...order,
			profiles: profile || {
				full_name: "Tidak Diketahui",
				phone: "-"
			},
			order_items: itemsWithProduct
		});
	}
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Orders - SmartStore Admin" }, { "default": async ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="d-sm-flex align-items-center justify-content-between mb-4"><h1 class="h3 mb-0 text-gray-800">Manajemen Pesanan</h1><div><span class="badge bg-primary me-2">${ordersWithProfile?.length || 0} Total Pesanan</span></div></div><div class="row mb-3"><div class="col-md-4"><select class="form-select" id="filterStatus"><option value="all">Semua Pesanan</option><option value="pending">Menunggu</option><option value="paid">Dibayar</option><option value="shipped">Dikirim</option><option value="delivered">Selesai</option><option value="cancelled">Dibatalkan</option></select></div><div class="col-md-4"><input type="text" class="form-control" id="searchOrder" placeholder="Cari berdasarkan ID pesanan atau pelanggan..."></div></div><div class="row">${ordersWithProfile && ordersWithProfile.length > 0 ? ordersWithProfile.map((order) => renderTemplate`<div class="col-12 mb-4 order-card"${addAttribute(order.status, "data-status")}${addAttribute(order.id + " " + (order.profiles?.full_name || ""), "data-search")}><div class="card shadow"><div class="card-header py-3 d-flex justify-content-between align-items-center"><div><h6 class="m-0 font-weight-bold text-primary"><i class="bi bi-receipt me-2"></i>Pesanan #${order.id.slice(0, 8)}</h6><small class="text-muted">${new Date(order.created_at).toLocaleString("id-ID")}</small></div><div><span${addAttribute(`badge bg-${order.status === "delivered" ? "success" : order.status === "cancelled" ? "danger" : order.status === "paid" ? "info" : order.status === "shipped" ? "primary" : "warning"}`, "class")}>${order.status === "pending" ? "Menunggu" : order.status === "paid" ? "Dibayar" : order.status === "shipped" ? "Dikirim" : order.status === "delivered" ? "Selesai" : order.status === "cancelled" ? "Dibatalkan" : order.status}</span><span class="badge bg-secondary ms-2">${order.payment_method === "cod" ? "COD" : order.payment_method === "transfer" ? "Transfer" : order.payment_method === "qris" ? "QRIS" : order.payment_method || "N/A"}</span>${order.proof_url && renderTemplate`<button class="btn btn-sm btn-outline-info ms-2 view-proof-btn"${addAttribute(order.proof_url, "data-url")}><i class="bi bi-image me-1"></i>Bukti</button>`}</div></div><div class="card-body"><div class="row"><!-- Customer Info --><div class="col-md-4"><div class="customer-info"><h6><i class="bi bi-person me-2"></i>Pelanggan</h6><p class="fw-bold mb-1">${order.profiles?.full_name || "Tidak Diketahui"}</p><p class="text-muted small mb-1"><i class="bi bi-telephone me-1"></i>${order.profiles?.phone || order.notes?.match(/Phone: ([^,]+)/)?.[1] || "-"}</p><p class="text-muted small"><i class="bi bi-geo-alt me-1"></i>${order.city || "-"}</p><p class="text-muted small"><i class="bi bi-currency-dollar me-1"></i>Total: Rp ${order.grand_total?.toLocaleString("id-ID") || 0}</p><p class="text-muted small"><i class="bi bi-box me-1"></i>${order.order_items?.length || 0} item</p></div></div><!-- Order Items --><div class="col-md-5"><h6><i class="bi bi-box-seam me-2"></i>Item</h6>${order.order_items && order.order_items.length > 0 ? order.order_items.slice(0, 3).map((item) => renderTemplate`<div class="d-flex align-items-center mb-2"><img${addAttribute(item.products?.image_url || "/assets/store/img/product/product-placeholder.webp", "src")}${addAttribute(item.products?.name || "Produk", "alt")} style="width: 40px; height: 40px; object-fit: cover; border-radius: 4px; margin-right: 10px;"><div><div class="small fw-bold">${item.products?.name || "Produk"}</div><div class="small text-muted"><span className="ms-2">x${item.quantity}</span><span className="ms-2">Rp ${item.price?.toLocaleString("id-ID") || 0}</span></div></div></div>`) : renderTemplate`<span class="text-muted small">Tidak ada item</span>`}${order.order_items && order.order_items.length > 3 && renderTemplate`<span class="text-muted small">+${order.order_items.length - 3} item lainnya</span>`}</div><!-- Actions --><div class="col-md-3"><h6><i class="bi bi-gear me-2"></i>Aksi</h6><div class="d-flex flex-column gap-2"><select class="form-select form-select-sm status-select"${addAttribute(order.id, "data-order-id")}><option value="pending"${addAttribute(order.status === "pending", "selected")}>Menunggu</option><option value="paid"${addAttribute(order.status === "paid", "selected")}>Dibayar</option><option value="shipped"${addAttribute(order.status === "shipped", "selected")}>Dikirim</option><option value="delivered"${addAttribute(order.status === "delivered", "selected")}>Selesai</option><option value="cancelled"${addAttribute(order.status === "cancelled", "selected")}>Dibatalkan</option></select></div></div></div><!-- Shipping Address -->${order.shipping_address && renderTemplate`<div class="mt-2 pt-2 border-top"><small class="text-muted"><i class="bi bi-geo-alt me-1"></i>${order.shipping_address}</small></div>`}</div></div></div>`) : renderTemplate`<div class="col-12 text-center py-5"><i class="bi bi-inbox" style="font-size: 48px; color: #dee2e6;"></i><p class="text-muted mt-3">Belum ada pesanan</p><small class="text-muted">Coba buat pesanan terlebih dahulu dengan checkout di toko.</small></div>`}</div><div class="modal fade" id="proofModal" tabindex="-1" aria-hidden="true"><div class="modal-dialog modal-dialog-centered modal-lg"><div class="modal-content"><div class="modal-header"><h5 class="modal-title"><i class="bi bi-image me-2"></i>Bukti Transfer</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body text-center"><!-- Loading --><div id="proofLoading" class="text-center py-4"><div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div><p class="mt-2">Memuat gambar...</p></div><!-- Image --><img id="proofImage" src="" alt="Bukti Transfer" style="max-width: 100%; max-height: 500px; border-radius: 8px; display: none;"><!-- Error --><div id="proofError" style="display: none;"><i class="bi bi-exclamation-triangle" style="font-size: 48px; color: #f59e0b;"></i><p class="mt-2">Gagal memuat gambar.</p><p class="text-muted small">Pastikan bucket storage bersifat public.</p><button class="btn btn-sm btn-outline-primary mt-2" onclick="loadProofImage()"><i class="bi bi-arrow-clockwise me-1"></i>Coba Lagi</button></div></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button><a id="proofDownloadLink" href="#" target="_blank" class="btn btn-primary"><i class="bi bi-download me-1"></i>Download</a></div></div></div></div>${renderScript($$result, "D:/TUGAS KULIAH/Project MKI/SmartStore/src/pages/admin/orders.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "D:/TUGAS KULIAH/Project MKI/SmartStore/src/pages/admin/orders.astro", void 0);
var $$file = "D:/TUGAS KULIAH/Project MKI/SmartStore/src/pages/admin/orders.astro";
var $$url = "/admin/orders";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/orders@_@astro
var page = () => orders_exports;
//#endregion
export { page };
