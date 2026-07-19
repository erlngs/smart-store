import{t as e}from"./client.CGrzSZ47.js";async function t(){let t=document.getElementById(`checkout-loading`),n=document.getElementById(`checkout-content`),{data:{session:r}}=await e.auth.getSession();if(!r){window.location.href=`/login`;return}let{data:i,error:a}=await e.from(`cart`).select(`
          id,
          quantity,
          product_id,
          color_variant_id,
          size_variant_id,
          products (
            id, name, slug, price, discount, image_url, stock
          ),
          color_variant:product_variants!cart_color_variant_id_fkey (
            id, name, value, stock, price_extra
          ),
          size_variant:product_variants!cart_size_variant_id_fkey (
            id, name, value, stock, price_extra
          )
        `).eq(`user_id`,r.user.id);if(a||!i||i.length===0){n.innerHTML=`
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="card text-center p-5">
                <i class="bi bi-cart-x" style="font-size: 64px; color: #6c757d;"></i>
                <h4 class="mt-3">Your Cart is Empty</h4>
                <p class="text-muted">Add some products to your cart before checking out.</p>
                <a href="/category" class="btn btn-primary">Start Shopping</a>
              </div>
            </div>
          </div>
        `,t.style.display=`none`,n.style.display=`block`;return}let o=0,s=0,c=2e4;i.forEach(e=>{let t=e.products.price,n=e.products.discount||0,r=(t+((e.color_variant?.price_extra||0)+(e.size_variant?.price_extra||0)))*(1-n/100);o+=r*e.quantity,s+=e.quantity});let l=o+c,{data:u}=await e.from(`profiles`).select(`full_name, phone, address`).eq(`id`,r.user.id).single(),d=i.map(e=>{let t=e.products.price,n=e.products.discount||0,r=(t+((e.color_variant?.price_extra||0)+(e.size_variant?.price_extra||0)))*(1-n/100),i=r*e.quantity,a=[];return e.color_variant&&a.push(`Color: ${e.color_variant.value}`),e.size_variant&&a.push(`Size: ${e.size_variant.value}`),`
          <div class="summary-item">
            <div class="item-thumb">
              <img src="${e.products.image_url||`/assets/store/img/product/product-placeholder.webp`}" alt="${e.products.name}" class="img-fluid">
              <span class="item-qty">${e.quantity}</span>
            </div>
            <div class="item-info">
              <h5>${e.products.name}</h5>
              <span class="item-meta">
                ${a.join(`, `)}
                Rp ${r.toLocaleString(`id-ID`)} x ${e.quantity}
              </span>
            </div>
            <div class="item-cost">Rp ${i.toLocaleString(`id-ID`)}</div>
          </div>
        `}).join(``);n.innerHTML=`
        <div class="row">
          <!-- Order Summary -->
          <div class="col-lg-4 order-lg-1 order-2">
            <div class="summary-panel" data-aos="fade-right" data-aos-delay="200">
              <div class="summary-top">
                <h3><i class="bi bi-bag-check me-2"></i>Your Cart</h3>
                <span class="badge-count">${s}</span>
              </div>

              <div class="summary-items">${d}</div>

              <div class="summary-breakdown">
                <div class="breakdown-row d-flex justify-content-between">
                  <span>Subtotal</span>
                  <span>Rp ${o.toLocaleString(`id-ID`)}</span>
                </div>
                <div class="breakdown-row d-flex justify-content-between">
                  <span>Shipping</span>
                  <span>Rp ${c.toLocaleString(`id-ID`)}</span>
                </div>
                <div class="breakdown-total d-flex justify-content-between">
                  <span>Total</span>
                  <span>Rp ${l.toLocaleString(`id-ID`)}</span>
                </div>
              </div>

              <div class="trust-badges">
                <div class="trust-item">
                  <i class="bi bi-shield-check"></i>
                  <span>Protected Payment</span>
                </div>
                <div class="trust-icons">
                  <i class="bi bi-credit-card-2-front"></i>
                  <i class="bi bi-credit-card"></i>
                  <i class="bi bi-paypal"></i>
                  <i class="bi bi-apple"></i>
                </div>
              </div>
            </div>
          </div>

          <!-- Checkout Form -->
          <div class="col-lg-8 order-lg-2 order-1">
            <div class="form-wrapper" data-aos="fade-left" data-aos-delay="150">
              <form id="checkoutForm" class="checkout-form">

                <!-- Contact Information -->
                <div class="form-block" id="customer-details">
                  <div class="block-heading">
                    <i class="bi bi-person-circle"></i>
                    <h3>Contact Information</h3>
                  </div>
                  <div class="block-body">
                    <div class="row">
                      <div class="col-md-6 form-group">
                        <label for="fullName">Full Name</label>
                        <input type="text" class="form-control" id="fullName" value="${u?.full_name||``}" placeholder="Your full name" required>
                      </div>
                      <div class="col-md-6 form-group">
                        <label for="phone">Phone Number</label>
                        <input type="tel" class="form-control" id="phone" value="${u?.phone||``}" placeholder="+62 812-3456-7890" required>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 form-group">
                        <label for="email">Email Address</label>
                        <input type="email" class="form-control" id="email" value="${r.user.email||``}" placeholder="your@email.com" required>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Shipping Address -->
                <div class="form-block" id="delivery-address">
                  <div class="block-heading">
                    <i class="bi bi-geo-alt"></i>
                    <h3>Shipping Address</h3>
                  </div>
                  <div class="block-body">
                    <div class="row">
                      <div class="col-12 form-group">
                        <label for="address">Street Address</label>
                        <input type="text" class="form-control" id="address" value="${u?.address||``}" placeholder="Jl. Raya Darmo No. 12" required>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 form-group">
                        <label for="city">City</label>
                        <select class="form-select" id="city" required>
                          <option value="">Select City</option>
                          <option value="Bandung">Bandung</option>
                          <option value="Jakarta">Jakarta</option>
                          <option value="Bogor">Bogor</option>
                          <option value="Depok">Depok</option>
                          <option value="Tangerang">Tangerang</option>
                          <option value="Bekasi">Bekasi</option>
                          <option value="Surabaya">Surabaya</option>
                          <option value="Yogyakarta">Yogyakarta</option>
                          <option value="Semarang">Semarang</option>
                          <option value="Medan">Medan</option>
                          <option value="Makassar">Makassar</option>
                          <option value="Bali">Bali</option>
                        </select>
                      </div>
                      <div class="col-md-6 form-group">
                        <label for="postal">ZIP Code</label>
                        <input type="text" class="form-control" id="postal" placeholder="60111">
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Payment Method -->
                <div class="form-block" id="payment-info">
                  <div class="block-heading">
                    <i class="bi bi-wallet2"></i>
                    <h3>Payment Method</h3>
                  </div>
                  <div class="block-body">
                    <div class="pay-methods">
                      <label class="pay-method active">
                        <input type="radio" name="payment-method" value="cod" checked>
                        <span class="method-inner">
                          <i class="bi bi-cash"></i>
                          <span>Cash on Delivery (COD)</span>
                        </span>
                      </label>
                      <label class="pay-method">
                        <input type="radio" name="payment-method" value="transfer">
                        <span class="method-inner">
                          <i class="bi bi-bank"></i>
                          <span>Bank Transfer</span>
                        </span>
                      </label>
                    </div>

                    <!-- Upload Bukti Transfer (HANYA UNTUK BANK TRANSFER) -->
                    <div id="uploadProofContainer" style="display: none; margin-top: 15px; padding: 15px; border: 2px dashed #dee2e6; border-radius: 8px;">
                      <h6><i class="bi bi-upload me-2"></i>Upload Bukti Transfer</h6>
                      <p class="text-muted small">Silakan transfer pembayaran Anda ke rekening BCA berikut:</p>
                      <p class="text-muted small">No Rekening: 1234-567-890</p>
                      <p class="text-muted small">Atas Nama: PT ShopWise Indonesia</p>
                      <p class="text-muted small">Lalu unggah screenshot bukti transfer di bawah sebelum memproses pesanan.</p>
                      <div class="mb-3">
                        <label for="proofFile" class="form-label">Pilih File (JPG/PNG/PDF)</label>
                        <input type="file" class="form-control" id="proofFile" accept=".jpg,.jpeg,.png,.pdf">
                        <small class="text-muted">Maksimal 5MB</small>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Confirmation -->
                <div class="form-block" id="confirmation">
                  <div class="block-heading">
                    <i class="bi bi-clipboard-check"></i>
                    <h3>Confirm &amp; Submit</h3>
                  </div>
                  <div class="block-body">
                    <div class="form-check agreement-check">
                      <input class="form-check-input" type="checkbox" id="agreeTerms" required>
                      <label class="form-check-label" for="agreeTerms">
                        I accept the Terms of Service and Privacy Policy
                      </label>
                    </div>
                    <div id="orderError" class="alert alert-danger d-none"></div>
                    <button type="submit" class="btn submit-order-btn" id="submitOrder">
                      <i class="bi bi-lock me-2"></i>
                      <span>Place Order</span>
                      <span class="order-amount">Rp ${l.toLocaleString(`id-ID`)}</span>
                    </button>
                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      `,t.style.display=`none`,n.style.display=`block`,document.querySelectorAll(`input[name="payment-method"]`).forEach(e=>{e.addEventListener(`change`,function(){let e=document.getElementById(`uploadProofContainer`);this.value===`transfer`?e.style.display=`block`:e.style.display=`none`})}),document.getElementById(`checkoutForm`)?.addEventListener(`submit`,async t=>{t.preventDefault();let n=document.getElementById(`orderError`),r=document.getElementById(`submitOrder`),i=document.getElementById(`agreeTerms`);if(n?.classList.add(`d-none`),r?.setAttribute(`disabled`,`true`),!i?.checked){n&&(n.textContent=`You must agree to the Terms of Service`,n.classList.remove(`d-none`)),r?.removeAttribute(`disabled`);return}let a=document.getElementById(`fullName`).value,o=document.getElementById(`email`).value,s=document.getElementById(`phone`).value,c=document.getElementById(`city`).value,l=document.getElementById(`address`).value,u=document.getElementById(`postal`).value,d=document.querySelector(`input[name="payment-method"]:checked`)?.value||`cod`;if(!a||!o||!s||!c||!l){n&&(n.textContent=`Please fill all required fields`,n.classList.remove(`d-none`)),r?.removeAttribute(`disabled`);return}if(d===`transfer`){let e=document.getElementById(`proofFile`);if(!e||!e.files||e.files.length===0){n&&(n.textContent=`Silakan upload bukti transfer terlebih dahulu!`,n.classList.remove(`d-none`)),r?.removeAttribute(`disabled`);return}}let{data:{session:f}}=await e.auth.getSession();if(!f){window.location.href=`/login`;return}try{let{data:t}=await e.from(`cart`).select(`
              quantity,
              product_id,
              color_variant_id,
              size_variant_id,
              products (price, discount, stock),
              color_variant:product_variants!cart_color_variant_id_fkey (stock, price_extra),
              size_variant:product_variants!cart_size_variant_id_fkey (stock, price_extra)
            `).eq(`user_id`,f.user.id),i=0;t?.forEach(e=>{let t=e.products.price,n=e.products.discount||0,r=(t+((e.color_variant?.price_extra||0)+(e.size_variant?.price_extra||0)))*(1-n/100);i+=r*e.quantity});let p=2e4,m=i+p,h=`ORD-`+Date.now().toString().slice(-8),g=null;if(d===`transfer`){let t=document.getElementById(`proofFile`).files[0];if(![`image/jpeg`,`image/png`,`image/jpg`,`application/pdf`].includes(t.type)){n&&(n.textContent=`Format file tidak didukung. Gunakan JPG, PNG, atau PDF.`,n.classList.remove(`d-none`)),r?.removeAttribute(`disabled`);return}if(t.size>5*1024*1024){n&&(n.textContent=`Ukuran file maksimal 5MB.`,n.classList.remove(`d-none`)),r?.removeAttribute(`disabled`);return}let i=t.name.split(`.`).pop(),a=`payment-proofs/${`proof_${h}_${Date.now()}.${i}`}`,{error:o}=await e.storage.from(`order-proofs`).upload(a,t,{contentType:t.type,cacheControl:`3600`,upsert:!1});if(o){console.error(`Upload error:`,o),n&&(n.textContent=`Gagal upload bukti transfer. Error: `+o.message,n.classList.remove(`d-none`)),r?.removeAttribute(`disabled`);return}let{data:s}=e.storage.from(`order-proofs`).getPublicUrl(a);g=s.publicUrl}let _=(t||[]).map(e=>{let t=e.products.price,n=e.products.discount||0,r=(t+((e.color_variant?.price_extra||0)+(e.size_variant?.price_extra||0)))*(1-n/100);return{product_id:e.product_id,color_variant_id:e.color_variant_id||null,size_variant_id:e.size_variant_id||null,quantity:e.quantity,price:r,discount_applied:n}}),{data:v,error:y}=await e.rpc(`checkout_order`,{p_user_id:f.user.id,p_order_number:h,p_total:i,p_shipping_cost:p,p_grand_total:m,p_payment_method:d,p_payment_status:d===`cod`?`unpaid`:`paid`,p_status:d===`cod`?`pending`:`paid`,p_shipping_address:l+(u?`, `+u:``),p_city:c,p_proof_url:g,p_notes:`Full Name: ${a}, Email: ${o}, Phone: ${s}`,p_items:_});if(y)throw y;window.location.href=`/order-confirmation?order=${v}`}catch(e){console.error(`Checkout error:`,e),n&&(n.textContent=e.message||`Failed to process order. Please try again.`,n.classList.remove(`d-none`)),r?.removeAttribute(`disabled`)}})}t();