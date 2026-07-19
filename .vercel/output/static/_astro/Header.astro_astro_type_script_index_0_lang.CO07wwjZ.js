import{t as e}from"./client.CGrzSZ47.js";async function t(){let{data:t}=await e.from(`products`).select(`slug, name`).eq(`is_active`,!0).limit(10),n=document.querySelector(`#productDropdown`),r=document.getElementById(`loadingProducts`);n&&t&&r&&(r.remove(),t.forEach(e=>{let t=document.createElement(`li`);t.innerHTML=`<a href="/product-details?slug=${e.slug}">${e.name}</a>`,n.appendChild(t)}))}async function n(){let t=document.getElementById(`cartItemsList`),r=document.getElementById(`cartSubtotal`),i=document.getElementById(`cartItemCount`),a=document.getElementById(`cartCountBadge`),{data:{user:o}}=await e.auth.getUser();if(!o){t&&(t.innerHTML=`<div class="text-center text-muted py-3">Keranjang kosong</div>`),i&&(i.textContent=`0 items`),a&&(a.style.display=`none`);return}let{data:s,error:c}=await e.from(`cart`).select(`
        id,
        quantity,
        products (id, name, slug, price, discount, image_url)
      `).eq(`user_id`,o.id).limit(5);if(c||!s||s.length===0){t&&(t.innerHTML=`<div class="text-center text-muted py-3">Keranjang kosong</div>`),i&&(i.textContent=`0 items`),a&&(a.style.display=`none`);return}let l=0,u=``;s.forEach(e=>{let t=e.products.price*(1-(e.products.discount||0)/100),n=t*e.quantity;l+=n,u+=`
        <div class="cart-item">
          <div class="cart-item-img">
            <img src="${e.products.image_url||`/assets/store/img/product/product-placeholder.webp`}" alt="${e.products.name}" class="img-fluid">
          </div>
          <div class="cart-item-info">
            <h6>${e.products.name}</h6>
            <div class="cart-item-meta">
              <span class="cart-item-price">Rp ${t.toLocaleString(`id-ID`)}</span>
              <span class="cart-item-qty">Qty: ${e.quantity}</span>
            </div>
          </div>
          <button class="cart-item-remove remove-cart-item" data-cart-id="${e.id}" aria-label="Remove item">
            <i class="bi bi-x-lg"></i>
          </button>
        </div>
      `}),t&&(t.innerHTML=u),i&&(i.textContent=s.length+` items`),a&&(a.textContent=String(s.length),a.style.display=`inline`),r&&(r.textContent=`Rp `+l.toLocaleString(`id-ID`)),document.querySelectorAll(`.remove-cart-item`).forEach(t=>{t.addEventListener(`click`,async function(){let t=this.dataset.cartId,{error:r}=await e.from(`cart`).delete().eq(`id`,t);r||(n(),document.dispatchEvent(new Event(`cartUpdated`)))})})}async function r(){let{data:{user:t}}=await e.auth.getUser(),n=document.getElementById(`cartCountBadge`),r=document.getElementById(`cartItemCount`);if(t){let{count:i}=await e.from(`cart`).select(`*`,{count:`exact`,head:!0}).eq(`user_id`,t.id),a=i||0;n&&(a>0?(n.textContent=String(a),n.style.display=`inline`):n.style.display=`none`),r&&(r.textContent=a+` items`)}else n&&(n.style.display=`none`),r&&(r.textContent=`0 items`)}document.getElementById(`logoutBtnHeader`)?.addEventListener(`click`,async()=>{try{await e.auth.signOut(),window.location.href=`/`}catch(e){console.error(`Logout error:`,e)}}),t(),n(),r(),document.addEventListener(`cartUpdated`,function(){n(),r()});