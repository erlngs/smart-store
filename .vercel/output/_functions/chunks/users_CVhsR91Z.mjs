import { n as __exportAll, t as createComponent } from "./compiler_Dbt8-yav.mjs";
import { _ as addAttribute, d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_BaILKhbv.mjs";
import { t as renderScript } from "./script_QDTy_Iu8.mjs";
import { t as supabase } from "./client_8OWQxcep.mjs";
import { t as $$AdminLayout } from "./AdminLayout_Ct2MDB6Q.mjs";
//#region src/pages/admin/users.astro
var users_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Users,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$Users = createComponent(async ($$result, $$props, $$slots) => {
	const { data: users, error } = await supabase.from("profiles").select("*").order("created_at", { ascending: false });
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Users - SmartStore Admin" }, { "default": async ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="d-sm-flex align-items-center justify-content-between mb-4"><h1 class="h3 mb-0 text-gray-800">Manajemen User</h1><div><span class="badge bg-primary me-2">${users?.length || 0} Total User</span></div></div><div class="row mb-3"><div class="col-md-6"><input type="text" class="form-control" id="searchUser" placeholder="Cari berdasarkan nama atau email..."></div></div><div class="card shadow mb-4"><div class="card-body"><div class="table-responsive"><table class="table table-bordered" id="usersTable" width="100%" cellspacing="0"><thead><tr><th>No</th><th>Nama</th><th>Email</th><th>Phone</th><th>Role</th><th>Alamat</th><th>Bergabung</th><th>Aksi</th></tr></thead><tbody id="usersBody">${users && users.length > 0 ? users.map((user, index) => renderTemplate`<tr class="user-row"${addAttribute((user.full_name || "") + " " + (user.email || ""), "data-search")}><td>${index + 1}</td><td><strong>${user.full_name || "Tidak ada nama"}</strong></td><td>${user.email || "-"}</td><td>${user.phone || "-"}</td><td><span${addAttribute(`badge bg-${user.role === "admin" ? "danger" : user.role === "super_admin" ? "warning" : "secondary"}`, "class")}>${user.role === "admin" ? "Admin" : user.role === "super_admin" ? "Super Admin" : "User"}</span></td><td><small class="text-muted">${user.address ? user.address.slice(0, 30) + (user.address.length > 30 ? "..." : "") : "-"}</small></td><td><small class="text-muted">${new Date(user.created_at).toLocaleDateString("id-ID")}</small></td><td><button class="btn btn-sm btn-outline-primary edit-role-btn"${addAttribute(user.id, "data-user-id")}${addAttribute(user.role, "data-current-role")} data-bs-toggle="modal" data-bs-target="#editRoleModal"><i class="bi bi-pencil"></i></button></td></tr>`) : renderTemplate`<tr><td colspan="8" class="text-center py-4">Belum ada user</td></tr>`}</tbody></table></div></div></div><div class="modal fade" id="editRoleModal" tabindex="-1" aria-hidden="true"><div class="modal-dialog modal-dialog-centered"><div class="modal-content"><div class="modal-header"><h5 class="modal-title"><i class="bi bi-person-gear me-2"></i>Ubah Role User</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><form id="editRoleForm"><div class="modal-body"><input type="hidden" id="editUserId"><div class="mb-3"><label class="form-label">Role</label><select class="form-select" id="editRole"><option value="user">User (Pelanggan)</option><option value="admin">Admin</option><option value="super_admin">Super Admin</option></select></div><div id="editRoleError" class="alert alert-danger d-none"></div></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button><button type="submit" class="btn btn-primary">Simpan</button></div></form></div></div></div>${renderScript($$result, "D:/TUGAS KULIAH/Project MKI/SmartStore/src/pages/admin/users.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "D:/TUGAS KULIAH/Project MKI/SmartStore/src/pages/admin/users.astro", void 0);
var $$file = "D:/TUGAS KULIAH/Project MKI/SmartStore/src/pages/admin/users.astro";
var $$url = "/admin/users";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/users@_@astro
var page = () => users_exports;
//#endregion
export { page };
