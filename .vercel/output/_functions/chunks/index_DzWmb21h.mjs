import { n as __exportAll, t as createComponent } from "./compiler_Dbt8-yav.mjs";
import { C as createAstro, _ as addAttribute, d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_BaILKhbv.mjs";
import { n as isUserAdmin } from "./server_HOC7wNjo.mjs";
import { t as $$AdminLayout } from "./AdminLayout_Ct2MDB6Q.mjs";
//#region src/pages/admin/index.astro
var admin_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const { supabase, user } = Astro.locals;
	if (!user) return Astro.redirect("/admin/login");
	if (!await isUserAdmin(supabase, user.id)) return Astro.redirect("/");
	const { count: totalProducts } = await supabase.from("products").select("*", {
		count: "exact",
		head: true
	});
	const { count: totalOrders } = await supabase.from("orders").select("*", {
		count: "exact",
		head: true
	});
	const { count: totalUsers } = await supabase.from("profiles").select("*", {
		count: "exact",
		head: true
	});
	const { count: pendingOrders } = await supabase.from("orders").select("*", {
		count: "exact",
		head: true
	}).eq("status", "pending");
	const { data: recentOrders } = await supabase.from("orders").select(`
    id,
    total,
    status,
    created_at,
    profiles:user_id (
      full_name
    )
  `).order("created_at", { ascending: false }).limit(5);
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Dashboard" }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="d-sm-flex align-items-center justify-content-between mb-4"><h1 class="h3 mb-0 text-gray-800">Dashboard</h1></div><div class="row"><!-- Total Products --><div class="col-xl-3 col-md-6 mb-4"><div class="card border-left-primary shadow h-100 py-2"><div class="card-body"><div class="row no-gutters align-items-center"><div class="col mr-2"><div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Total Products</div><div class="h5 mb-0 font-weight-bold text-gray-800">${totalProducts || 0}</div></div><div class="col-auto"><i class="bi bi-box-seam fa-2x text-gray-300"></i></div></div></div></div></div><!-- Total Orders --><div class="col-xl-3 col-md-6 mb-4"><div class="card border-left-success shadow h-100 py-2"><div class="card-body"><div class="row no-gutters align-items-center"><div class="col mr-2"><div class="text-xs font-weight-bold text-success text-uppercase mb-1">Total Orders</div><div class="h5 mb-0 font-weight-bold text-gray-800">${totalOrders || 0}</div></div><div class="col-auto"><i class="bi bi-cart-check fa-2x text-gray-300"></i></div></div></div></div></div><!-- Pending Orders --><div class="col-xl-3 col-md-6 mb-4"><div class="card border-left-warning shadow h-100 py-2"><div class="card-body"><div class="row no-gutters align-items-center"><div class="col mr-2"><div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Pending Orders</div><div class="h5 mb-0 font-weight-bold text-gray-800">${pendingOrders || 0}</div></div><div class="col-auto"><i class="bi bi-clock-history fa-2x text-gray-300"></i></div></div></div></div></div><!-- Total Users --><div class="col-xl-3 col-md-6 mb-4"><div class="card border-left-info shadow h-100 py-2"><div class="card-body"><div class="row no-gutters align-items-center"><div class="col mr-2"><div class="text-xs font-weight-bold text-info text-uppercase mb-1">Total Users</div><div class="h5 mb-0 font-weight-bold text-gray-800">${totalUsers || 0}</div></div><div class="col-auto"><i class="bi bi-people fa-2x text-gray-300"></i></div></div></div></div></div></div><div class="card shadow mb-4"><div class="card-header py-3 d-flex justify-content-between align-items-center"><h6 class="m-0 font-weight-bold text-primary">Recent Orders</h6><a href="/admin/orders" class="btn btn-sm btn-primary">View All</a></div><div class="card-body"><div class="table-responsive"><table class="table table-bordered" width="100%" cellspacing="0"><thead><tr><th>Order ID</th><th>Customer</th><th>Total</th><th>Status</th><th>Date</th></tr></thead><tbody>${recentOrders && recentOrders.length > 0 ? recentOrders.map((order) => renderTemplate`<tr><td>#${order.id.slice(0, 8)}</td><td>${order.profiles?.full_name || "Unknown"}</td><td>Rp ${order.total.toLocaleString("id-ID")}</td><td><span${addAttribute(`badge bg-${order.status === "paid" ? "success" : order.status === "pending" ? "warning" : order.status === "shipped" ? "info" : order.status === "delivered" ? "primary" : "danger"}`, "class")}>${order.status}</span></td><td>${new Date(order.created_at).toLocaleDateString("id-ID")}</td></tr>`) : renderTemplate`<tr><td colspan="5" class="text-center">No orders yet</td></tr>`}</tbody></table></div></div></div>` })}`;
}, "D:/TUGAS KULIAH/Project MKI/SmartStore/src/pages/admin/index.astro", void 0);
var $$file = "D:/TUGAS KULIAH/Project MKI/SmartStore/src/pages/admin/index.astro";
var $$url = "/admin";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/index@_@astro
var page = () => admin_exports;
//#endregion
export { page };
