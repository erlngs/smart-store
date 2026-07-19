import { n as __exportAll, t as createComponent } from "./compiler_Dbt8-yav.mjs";
import { _ as addAttribute, d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_BaILKhbv.mjs";
import { t as renderScript } from "./script_QDTy_Iu8.mjs";
import { t as supabase } from "./client_8OWQxcep.mjs";
import { t as $$AdminLayout } from "./AdminLayout_Ct2MDB6Q.mjs";
//#region src/pages/admin/cms.astro
var cms_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Cms,
	file: () => $$file,
	prerender: () => false,
	url: () => $$url
});
var $$Cms = createComponent(async ($$result, $$props, $$slots) => {
	const { data: settings, error } = await supabase.from("settings").select("*").order("group_name", { ascending: true });
	console.log("📦 Settings from DB:", settings);
	console.log("❌ Error:", error);
	const groupedSettings = {};
	if (settings) settings.forEach((s) => {
		if (!groupedSettings[s.group_name]) groupedSettings[s.group_name] = [];
		groupedSettings[s.group_name].push(s);
	});
	const groupLabels = {
		"hero": "Hero Section",
		"cta": "Call to Action",
		"promo": "Promo Banner",
		"footer": "Footer",
		"social": "Social Media",
		"general": "General Settings",
		"test_group": "Test Group"
	};
	return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "CMS - SmartStore Admin" }, { "default": async ($$result) => renderTemplate`${maybeRenderHead($$result)}<div class="d-sm-flex align-items-center justify-content-between mb-4"><h1 class="h3 mb-0 text-gray-800">Content Management System (CMS)</h1><button class="btn btn-primary" id="saveAllBtn"><i class="bi bi-save me-1"></i> Save All Changes</button></div><div id="saveStatus" class="alert alert-success d-none"></div><div id="saveError" class="alert alert-danger d-none"></div><div class="row">${Object.keys(groupedSettings).map((group) => renderTemplate`<div class="col-12 mb-4"><div class="card shadow"><div class="card-header py-3"><h6 class="m-0 font-weight-bold text-primary">${groupLabels[group] || group}</h6></div><div class="card-body"><div class="row">${groupedSettings[group].map((setting) => {
		const label = setting.key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
		const value = setting.value || "";
		const id = `setting_${setting.key}`;
		const groupName = setting.group_name || group;
		return renderTemplate`<div class="col-md-6 mb-3"${addAttribute(group, "data-group")}><label${addAttribute(id, "for")} class="form-label fw-bold small">${label}</label><input type="hidden" class="group-name-input"${addAttribute(setting.key, "data-key")}${addAttribute(groupName, "value")}>${setting.type === "textarea" ? renderTemplate`<textarea class="form-control"${addAttribute(id, "id")} rows="3">${value}</textarea>` : setting.type === "image" ? renderTemplate`<div class="d-flex align-items-center gap-2"><input type="text" class="form-control"${addAttribute(id, "id")}${addAttribute(value, "value")} placeholder="/assets/img/..."><button class="btn btn-sm btn-outline-secondary upload-image-btn"${addAttribute(id, "data-target")}><i class="bi bi-upload"></i></button></div>` : renderTemplate`<input type="text" class="form-control"${addAttribute(id, "id")}${addAttribute(value, "value")}>`}<small class="text-muted">Key: ${setting.key}</small></div>`;
	})}</div></div></div></div>`)}</div>${renderScript($$result, "D:/TUGAS KULIAH/Project MKI/SmartStore/src/pages/admin/cms.astro?astro&type=script&index=0&lang.ts")}` })}`;
}, "D:/TUGAS KULIAH/Project MKI/SmartStore/src/pages/admin/cms.astro", void 0);
var $$file = "D:/TUGAS KULIAH/Project MKI/SmartStore/src/pages/admin/cms.astro";
var $$url = "/admin/cms";
//#endregion
//#region \0virtual:astro:page:src/pages/admin/cms@_@astro
var page = () => cms_exports;
//#endregion
export { page };
