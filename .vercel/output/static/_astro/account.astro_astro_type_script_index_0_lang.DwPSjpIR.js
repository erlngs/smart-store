import{t as e}from"./client.CGrzSZ47.js";var t=document.getElementById(`account-loading`),n=document.getElementById(`account-content`);async function r(){try{let{data:{session:r}}=await e.auth.getSession();if(!r){window.location.href=`/login`;return}let{data:a}=await e.from(`profiles`).select(`*`).eq(`id`,r.user.id).single(),{data:o}=await e.from(`orders`).select(`*`).eq(`user_id`,r.user.id).order(`created_at`,{ascending:!1}).limit(20),s=[`pending`,`paid`,`processing`,`shipped`],c=o?.filter(e=>s.includes(e.status))||[],{count:l}=await e.from(`orders`).select(`*`,{count:`exact`,head:!0}).eq(`user_id`,r.user.id),{data:u,count:d}=await e.from(`reviews`).select(`
            *,
            products (
              id,
              name,
              slug,
              image_url
            )
          `,{count:`exact`}).eq(`user_id`,r.user.id).order(`created_at`,{ascending:!1}),f=a?.full_name||`User`,p=document.getElementById(`userName`),m=document.getElementById(`userAvatar`),h=document.getElementById(`orderCount`),g=document.getElementById(`trackCount`),_=document.getElementById(`reviewCount`);p&&(p.textContent=f),m&&(m.textContent=f.charAt(0)),h&&(h.textContent=String(l||0)),g&&(g.textContent=String(c?.length||0)),_&&(_.textContent=String(d||0));let v=document.getElementById(`fullName`),y=document.getElementById(`phone`),b=document.getElementById(`address`);v&&(v.value=a?.full_name||``),y&&(y.value=a?.phone||``),b&&(b.value=a?.address||``);let x=document.getElementById(`ordersList`);x&&(o&&o.length>0?(x.innerHTML=o.map(e=>`
              <div class="order-row status-processing" data-aos="fade-up" data-order-id="${e.id}">
                <div class="row align-items-center g-3">
                  <div class="col-lg-5">
                    <div class="order-main">
                      <div class="order-brief">
                        <span class="order-ref">#${e.id.slice(0,8)}</span>
                        <span class="order-when">${new Date(e.created_at).toLocaleDateString(`id-ID`)}</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 col-lg-2 text-center">
                    <span class="status-pill ${e.status===`delivered`?`delivered`:e.status===`cancelled`?`cancelled`:`processing`}">
                      ${e.status}
                    </span>
                  </div>
                  <div class="col-6 col-lg-2 text-center">
                    <span class="order-total">Rp ${e.total.toLocaleString(`id-ID`)}</span>
                  </div>
                  <div class="col-lg-3">
                    <div class="order-actions">
                      <button type="button" class="btn-outline-action track-btn" data-order-id="${e.id}">
                        <i class="bi bi-truck"></i> Track
                      </button>
                      <button type="button" class="btn-filled-action detail-btn" data-order-id="${e.id}">
                        <i class="bi bi-eye"></i> Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            `).join(``),document.querySelectorAll(`.track-btn`).forEach(e=>{e.addEventListener(`click`,function(){let e=this.dataset.orderId;window.location.href=`/order-confirmation?order=${e}`})}),document.querySelectorAll(`.detail-btn`).forEach(e=>{e.addEventListener(`click`,function(){let e=this.dataset.orderId;window.location.href=`/order-confirmation?order=${e}`})})):x.innerHTML=`
              <div class="text-center py-5">
                <p class="text-muted">Belum ada pesanan.</p>
                <a href="/category" class="btn btn-primary">Mulai Belanja</a>
              </div>
            `);let S=document.getElementById(`trackList`);S&&(c&&c.length>0?(S.innerHTML=c.map(e=>`
              <div class="order-row status-processing" data-aos="fade-up" data-order-id="${e.id}">
                <div class="row align-items-center g-3">
                  <div class="col-lg-5">
                    <div class="order-main">
                      <div class="order-brief">
                        <span class="order-ref">#${e.id.slice(0,8)}</span>
                        <span class="order-when">${new Date(e.created_at).toLocaleDateString(`id-ID`)}</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 col-lg-2 text-center">
                    <span class="status-pill processing">
                      ${e.status}
                    </span>
                  </div>
                  <div class="col-6 col-lg-2 text-center">
                    <span class="order-total">Rp ${e.total.toLocaleString(`id-ID`)}</span>
                  </div>
                  <div class="col-lg-3">
                    <div class="order-actions">
                      <button type="button" class="btn-outline-action track-btn" data-order-id="${e.id}">
                        <i class="bi bi-truck"></i> Track
                      </button>
                      <button type="button" class="btn-filled-action detail-btn" data-order-id="${e.id}">
                        <i class="bi bi-eye"></i> Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            `).join(``),document.querySelectorAll(`.track-btn`).forEach(e=>{e.addEventListener(`click`,function(){let e=this.dataset.orderId;window.location.href=`/order-confirmation?order=${e}`})}),document.querySelectorAll(`.detail-btn`).forEach(e=>{e.addEventListener(`click`,function(){let e=this.dataset.orderId;window.location.href=`/order-confirmation?order=${e}`})})):S.innerHTML=`
              <div class="text-center py-5">
                <i class="bi bi-check-circle" style="font-size: 48px; color: #28a745;"></i>
                <h5 class="mt-3">Tidak ada pesanan aktif</h5>
                <p class="text-muted">Semua pesanan sudah selesai atau tidak ada pesanan.</p>
                <a href="/category" class="btn btn-primary">Belanja Sekarang</a>
              </div>
            `);let C=document.getElementById(`reviewsList`);C&&(u&&u.length>0?(C.innerHTML=u.map(e=>{let t=i(e.rating);return`
                <div class="review-item" data-aos="fade-up" style="border-bottom: 1px solid #eee; padding: 20px 0;">
                  <div class="row">
                    <div class="col-md-3">
                      <img 
                        src="${e.products?.image_url||`/assets/store/img/product/product-placeholder.webp`}" 
                        alt="${e.products?.name||`Product`}" 
                        style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px;"
                      />
                    </div>
                    <div class="col-md-9">
                      <h5>
                        <a href="/product-details?slug=${e.products?.slug}" style="color: #212529; text-decoration: none;">
                          ${e.products?.name||`Product`}
                        </a>
                      </h5>
                      <div class="stars">${t}</div>
                      <p class="mt-2">${e.comment||`No comment`}</p>
                      <small class="text-muted">${new Date(e.created_at).toLocaleDateString(`id-ID`,{day:`numeric`,month:`long`,year:`numeric`})}</small>
                      <div class="mt-2">
                        <button class="btn btn-sm btn-outline-danger delete-review-btn" data-review-id="${e.id}">
                          <i class="bi bi-trash"></i> Hapus
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              `}).join(``),document.querySelectorAll(`.delete-review-btn`).forEach(t=>{t.addEventListener(`click`,async function(){let t=this.dataset.reviewId;if(!confirm(`Apakah Anda yakin ingin menghapus review ini?`))return;let{error:n}=await e.from(`reviews`).delete().eq(`id`,t);n?alert(`Gagal menghapus review: `+n.message):(alert(`Review berhasil dihapus!`),window.location.reload())})})):C.innerHTML=`
              <div class="text-center py-5">
                <p class="text-muted">Belum ada review.</p>
                <a href="/category" class="btn btn-primary">Belanja Sekarang</a>
              </div>
            `),t&&(t.style.display=`none`),n&&(n.style.display=`block`)}catch(e){console.error(`Error loading account:`,e),window.location.href=`/login`}}function i(e){let t=Math.floor(e),n=e%1>=.5,r=``;for(let e=0;e<t;e++)r+=`<i class="bi bi-star-fill" style="color: #f59e0b;"></i>`;for(n&&(r+=`<i class="bi bi-star-half" style="color: #f59e0b;"></i>`);r.split(`<i`).length-1<5;)r+=`<i class="bi bi-star" style="color: #ddd;"></i>`;return r}document.getElementById(`logoutBtn`)?.addEventListener(`click`,async()=>{try{await e.auth.signOut(),window.location.href=`/`}catch(e){console.error(`Logout error:`,e)}}),document.getElementById(`profileForm`)?.addEventListener(`submit`,async t=>{t.preventDefault();let n=document.getElementById(`profileErrorMsg`),r=document.getElementById(`profileSuccessMsg`),i=document.getElementById(`profileBtn`),a=document.getElementById(`profileText`),o=document.getElementById(`profileSpinner`);n?.classList.add(`d-none`),r?.classList.add(`d-none`),i?.setAttribute(`disabled`,`true`),a&&a.classList.add(`d-none`),o&&o.classList.remove(`d-none`);let s=document.getElementById(`fullName`)?.value||``,c=document.getElementById(`phone`)?.value||``,l=document.getElementById(`address`)?.value||``,{data:{user:u}}=await e.auth.getUser();if(u){let{error:t}=await e.from(`profiles`).update({full_name:s,phone:c,address:l}).eq(`id`,u.id);if(t)n&&(n.textContent=t.message,n.classList.remove(`d-none`));else{r&&(r.textContent=`Profile berhasil diupdate!`,r.classList.remove(`d-none`));let e=document.getElementById(`userName`),t=document.getElementById(`userAvatar`);e&&(e.textContent=s),t&&(t.textContent=s.charAt(0))}}i?.removeAttribute(`disabled`),a&&a.classList.remove(`d-none`),o&&o.classList.add(`d-none`)}),r(),(function(){let e={orders:`account-tab-orders`,track:`account-tab-track`,reviews:`account-tab-reviews`,wishlist:`account-tab-wishlist`,settings:`account-tab-settings`}[new URLSearchParams(window.location.search).get(`tab`)];e&&setTimeout(()=>{let t=document.querySelector(`[data-bs-target="#${e}"]`);if(t){document.querySelectorAll(`.nav-link`).forEach(e=>e.classList.remove(`active`)),document.querySelectorAll(`.tab-pane`).forEach(e=>e.classList.remove(`show`,`active`)),t.classList.add(`active`);let n=document.getElementById(e);n&&n.classList.add(`show`,`active`)}},100)})();