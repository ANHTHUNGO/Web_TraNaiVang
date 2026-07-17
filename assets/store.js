/* ============ TRÀ NAI VÀNG — store.js: dữ liệu SP + giỏ hàng/yêu thích/đơn hàng giả lập (localStorage) ============ */
const CATS = {
  "uop-huong":"Trà ướp hương","oolong":"Trà Oolong","tra-xanh":"Trà xanh",
  "tra-den":"Trà đen","tra-quy":"Trà quý","thao-moc":"Thảo mộc","pha-che":"Trà pha chế"
};
const _P=(s,n,en,kw,c,pr,old,tag)=>({slug:s,name:n,en:en,kw:kw,cat:c,price:pr,old:old||null,tag:tag||null});
const PRODUCTS=[
 _P("tra-sam-dua","Trà Sâm Dứa","Pandan Scented Tea","pandan scented","uop-huong",115000,135000,"Bán chạy"),
 _P("oolong-tu-quy","Oolong Tứ Quý","Four Seasons Oolong","four seasons premium","oolong",320000,null,"Cao cấp"),
 _P("tra-xanh-hoa-lai","Trà Xanh Hoa Lài","Jasmine Green Tea","jasmine flower","uop-huong",98000),
 _P("ca-gai-leo-tia-to","Cà Gai Leo Tía Tô","Solanum & Perilla Herbal Tea","herbal perilla liver detox","thao-moc",150000,null,"Bán chạy"),
 _P("tra-xanh-hoa-soi","Trà Xanh Hoa Sói","Aglaia Green Tea","aglaia scented flower","uop-huong",105000),
 _P("bach-tra","Bạch Trà Thượng Hạng","Premium White Tea","white tea silver needle","tra-quy",380000,null,"Cao cấp"),
 _P("dong-phuong-my-nhan","Đông Phương Mỹ Nhân","Oriental Beauty Oolong","oriental beauty","tra-quy",420000,null,"Cao cấp"),
 _P("shan-tuyet-1-bup-1-la","Shan Tuyết 1 Búp 1 Lá","Snow Shan — 1 Bud 1 Leaf","snow shan wild ancient","tra-quy",350000),
 _P("shan-tuyet-1-bup-2-la","Shan Tuyết 1 Búp 2 Lá","Snow Shan — 1 Bud 2 Leaves","snow shan wild ancient","tra-quy",290000),
 _P("pho-nhi-vien","Trà Phổ Nhĩ Viên","Pu-erh Tea Cake","puerh pu-erh cake aged","tra-quy",450000,null,"Mới"),
 _P("hong-tra-shan-tien","Hồng Trà Shan Tiên","Shan Tien Black Tea","red black tea highland","tra-quy",240000),
 _P("hong-tra-thanh-bi","Hồng Trà Thanh Bì","Thanh Bi Black Tea","red black tea","tra-quy",220000),
 _P("oolong-bach-que-hoa","Oolong Bạch Quế Hoa","Osmanthus Oolong","osmanthus cinnamon","oolong",260000),
 _P("oolong-truyen-thong","Trà Oolong Truyền Thống","Traditional Oolong","classic","oolong",180000),
 _P("oolong-vay","Trà Oolong Vảy","Rolled Oolong","rolled","oolong",190000),
 _P("oolong-rang-hat-lon","Oolong Rang Hạt Lớn","Roasted Oolong — Large Grain","roasted","oolong",165000),
 _P("oolong-rang-hat-nho","Oolong Rang Hạt Nhỏ","Roasted Oolong — Small Grain","roasted","oolong",155000),
 _P("tra-sam-dua-truyen-thong","Trà Sâm Dứa Truyền Thống","Traditional Pandan Tea","pandan classic","uop-huong",95000),
 _P("tra-bom-dua-sai-gon","Trà Bơm Dứa Sài Gòn","Saigon Pandan Tea","pandan saigon","uop-huong",89000),
 _P("tra-lai","Trà Lài Thượng Hạng","Premium Jasmine Tea","jasmine premium","uop-huong",120000),
 _P("tra-xanh-thai-nguyen","Trà Xanh Thái Nguyên","Thai Nguyen Green Tea","green thai nguyen","tra-xanh",145000),
 _P("tra-xanh-1-tom-3-la","Trà Xanh 1 Tôm 3 Lá","Green Tea — 1 Bud 3 Leaves","green bud","tra-xanh",110000),
 _P("tra-xanh","Trà Xanh Truyền Thống","Traditional Green Tea","green classic","tra-xanh",85000),
 _P("tra-xanh-op","Trà Xanh ÓP","Green Tea OP","green orange pekoe","tra-xanh",75000),
 _P("tra-den","Trà Đen Truyền Thống","Traditional Black Tea","black classic","tra-den",80000),
 _P("tra-den-op","Trà Đen ÓP","Black Tea OP","black orange pekoe","tra-den",72000),
 _P("tra-casara","Trà Casara Cánh Lớn","Cassara Large Leaf Tea","cassara","pha-che",135000),
 _P("tra-gao","Trà Gạo","Rice Tea","rice genmaicha","pha-che",88000),
 _P("tra-gao-pha-che","Trà Gạo Pha Chế 350g","Rice Tea for Brewing 350g","rice brewing barista","pha-che",95000),
 _P("tra-lai-pha-che","Trà Lài Pha Chế 350g","Jasmine Tea for Brewing 350g","jasmine brewing barista","pha-che",92000),
];
const prodBySlug = s => PRODUCTS.find(p=>p.slug===s);
const prodImg = s => `assets/real/products/${s}.jpg`;
const fmt = n => n.toLocaleString('vi-VN')+'₫';
const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/đ/g,'d');
/* song ngữ: tên hiển thị + tên danh mục + chuỗi tìm kiếm (VI không dấu + EN + keywords) */
const _lang = () => (typeof getLang==='function'?getLang():'vi');
const _t = k => (typeof t==='function'?t(k):null);
const prodName = p => _lang()==='en'&&p.en ? p.en : p.name;
const catName  = c => _t('cat.'+c)||CATS[c]||c;
const tagName  = g => _t('tag.'+g)||g;
const searchText = p => norm(p.name+' '+(p.en||'')+' '+(p.kw||''));

/* ---- CART: {slug: qty} ---- */
function _readCart(){
  let c = JSON.parse(localStorage.getItem('nv_cart')||'{}');
  if(Array.isArray(c)){ const o={}; c.forEach(s=>o[s]=(o[s]||0)+1); c=o; localStorage.setItem('nv_cart',JSON.stringify(c)); } // migrate
  return c;
}
function _writeCart(c){ localStorage.setItem('nv_cart',JSON.stringify(c)); updateBadge(); }
function cartItems(){ const c=_readCart(); return Object.entries(c).map(([s,q])=>({...prodBySlug(s),qty:q})).filter(i=>i.slug); }
function cartCount(){ return Object.values(_readCart()).reduce((a,b)=>a+b,0); }
function cartSubtotal(){ return cartItems().reduce((a,i)=>a+i.price*i.qty,0); }
function addCart(slug,qty){ const c=_readCart(); c[slug]=(c[slug]||0)+(qty||1); _writeCart(c);
  const p=prodBySlug(slug); if(p) showToast(`${_t('ts.added')||'Đã thêm vào giỏ hàng:'} ${prodName(p)}`); }
function setQty(slug,q){ const c=_readCart(); if(q<=0) delete c[slug]; else c[slug]=q; _writeCart(c); }
function removeItem(slug){ setQty(slug,0); }
function clearCart(){ _writeCart({}); }

/* ---- WISHLIST ---- */
let wishlist = new Set(JSON.parse(localStorage.getItem('nv_wish')||'[]'));
function toggleWish(slug){
  wishlist.has(slug)?wishlist.delete(slug):wishlist.add(slug);
  localStorage.setItem('nv_wish',JSON.stringify([...wishlist]));
  const p=prodBySlug(slug);
  if(p) showToast(`${prodName(p)} — ${wishlist.has(slug)?(_t('ts.wishOn')||'đã vào yêu thích ♥'):(_t('ts.wishOff')||'đã bỏ yêu thích')}`);
}

/* ---- RECENTLY VIEWED ---- */
function markSeen(slug){ let s=JSON.parse(localStorage.getItem('nv_seen')||'[]'); s=[slug,...s.filter(x=>x!==slug)].slice(0,8); localStorage.setItem('nv_seen',JSON.stringify(s)); }
function seenList(){ return JSON.parse(localStorage.getItem('nv_seen')||'[]').map(prodBySlug).filter(Boolean); }

/* ---- VOUCHER (mock) ---- */
const VOUCHERS = { "NAIVANG10":{type:"pct",val:10,label:"Giảm 10% toàn đơn"}, "FREESHIP":{type:"ship",val:0,label:"Miễn phí vận chuyển"} };
function shipFee(subtotal, method){ if(subtotal>=500000) return 0; return method==='fast'?45000:30000; }

/* ---- ORDERS (mock) ---- */
function saveOrder(o){ const os=JSON.parse(localStorage.getItem('nv_orders')||'[]'); os.unshift(o); localStorage.setItem('nv_orders',JSON.stringify(os)); }
function orders(){ return JSON.parse(localStorage.getItem('nv_orders')||'[]'); }
function orderCode(){ return 'NV'+Date.now().toString().slice(-8); }

/* ---- TIẾN TRÌNH ĐƠN HÀNG (mock theo thời gian) & HỦY ĐƠN ---- */
const ORDER_FLOW=[['pending',0],['confirm',2],['shipping',10],['done',30]]; // phút kể từ lúc đặt
function orderStatus(o){
  if(o.status==='cancelled') return 'cancelled';
  const mins=(Date.now()-(o.ts||Date.now()))/60000; let s='pending';
  for(const [k,m] of ORDER_FLOW) if(mins>=m) s=k;
  return s;
}
function statusLabel(s){ return _t('st.'+s)||s; }
function canCancel(o){ const s=orderStatus(o); return s==='pending'||s==='confirm'; }
function cancelOrder(code,reason){
  const os=orders(); const o=os.find(x=>x.code===code);
  if(!o||!canCancel(o)) return false;
  o.status='cancelled'; o.cancelReason=reason; o.cancelledAt=new Date().toLocaleString('vi-VN');
  localStorage.setItem('nv_orders',JSON.stringify(os)); return true;
}
function openCancelModal(code, cb){
  const w=document.createElement('div'); w.className='modal-wrap';
  w.innerHTML=`<div class="modal">
    <h3>${_t('cx.title')}</h3>
    <p class="cx-note">${_t('od.cancelWindow')}</p>
    <p style="font-weight:600;font-size:13.5px;margin:14px 0 8px">${_t('cx.pick')}</p>
    ${['r1','r2','r3','r4','r5'].map(r=>`<label class="cx-opt"><input type="radio" name="cxr" value="${_t('cx.'+r)}"/><span>${_t('cx.'+r)}</span></label>`).join('')}
    <div class="modal-actions">
      <button class="btn btn-ghost" data-x="keep">${_t('cx.keep')}</button>
      <button class="btn btn-danger" data-x="go">${_t('cx.confirm')}</button>
    </div></div>`;
  document.body.appendChild(w);
  w.addEventListener('click',e=>{ if(e.target===w) w.remove(); });
  w.querySelector('[data-x=keep]').onclick=()=>w.remove();
  w.querySelector('[data-x=go]').onclick=()=>{
    const r=w.querySelector('input[name=cxr]:checked');
    if(!r){ showToast(_t('cx.needReason')); return; }
    if(cancelOrder(code,r.value)){ showToast(_t('cx.done')); w.remove(); cb&&cb(); }
    else { showToast(_t('cx.tooLate')); w.remove(); cb&&cb(); }
  };
}

/* ---- USER (mock) ---- */
function currentUser(){ return JSON.parse(localStorage.getItem('nv_user')||'null'); }
function setUser(u){ localStorage.setItem('nv_user',JSON.stringify(u)); }
function logout(){ localStorage.removeItem('nv_user'); }

/* ---- CHUÔNG THÔNG BÁO (gắn tài khoản đăng ký) ---- */
function notiList(){
  if(!currentUser()) return [];
  const L=[];
  orders().slice(0,8).forEach(o=>{
    const s=orderStatus(o);
    L.push({id:o.code+':'+s, ic:{pending:'📝',confirm:'✅',shipping:'🚚',done:'🎉',cancelled:'✕'}[s], b:o.code, s:_t('noti.'+s)});
  });
  L.push({id:'freeship', ic:'🚚', b:'FREESHIP', s:_t('bell.p2')});
  L.push({id:'welcome',  ic:'🎁', b:'NAIVANG10', s:_t('bell.p1')});
  return L;
}
function _notiRead(){ return new Set(JSON.parse(localStorage.getItem('nv_noti_read')||'[]')); }
function notiUnread(){ const r=_notiRead(); return notiList().filter(n=>!r.has(n.id)).length; }
function markNotisRead(){ localStorage.setItem('nv_noti_read', JSON.stringify(notiList().map(n=>n.id))); updateBellBadge(); }
function updateBellBadge(){
  const b=document.getElementById('bellBadge'); if(!b) return;
  const n=notiUnread(); b.textContent=n>9?'9+':n; b.style.display=n?'grid':'none';
}
function mountBell(){
  const cart=document.querySelector('.nav-actions .cart-wrap');
  if(!cart||document.getElementById('bellWrap')) return;
  const w=document.createElement('div'); w.className='bell-wrap'; w.id='bellWrap';
  w.innerHTML=`<button class="bell" id="bellBtn" aria-label="${_t('bell.title')}">
    <svg viewBox="0 0 24 24" width="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9a6 6 0 1 1 12 0c0 4.6 1.6 6 2.4 6H3.6C4.4 15 6 13.6 6 9Z"/><path d="M10 19a2.2 2.2 0 0 0 4 0"/></svg>
    <span class="cart-badge bell-badge" id="bellBadge" style="display:none">0</span></button>
    <div class="bell-panel" id="bellPanel"></div>`;
  cart.parentNode.insertBefore(w, cart);
  const panel=w.querySelector('#bellPanel');
  function render(){
    if(!currentUser()){
      panel.innerHTML=`<div class="bp-head">${_t('bell.title')}</div>
        <div class="bp-login">🔔<p>${_t('bell.login')}</p>
        <a class="btn btn-primary" style="padding:11px 22px;font-size:13px" href="dang-nhap.html">${_t('bell.loginBtn')}</a></div>`;
      return;
    }
    const items=notiList(), rd=_notiRead();
    panel.innerHTML=`<div class="bp-head">${_t('bell.title')}<button id="bpRead">${_t('bell.markRead')}</button></div>`
      + (items.length ? items.map(n=>`<div class="bp-item ${rd.has(n.id)?'':'unread'}"><span class="bi">${n.ic}</span><span><b>${n.b}</b><small>${n.s}</small></span></div>`).join('')
                      : `<div class="bp-login">${_t('bell.empty')}</div>`);
    const r=panel.querySelector('#bpRead');
    if(r) r.onclick=e=>{e.stopPropagation(); markNotisRead(); render();};
  }
  w.querySelector('#bellBtn').onclick=e=>{e.stopPropagation(); render(); w.classList.toggle('open');};
  document.addEventListener('click',e=>{ if(!w.contains(e.target)) w.classList.remove('open'); });
  updateBellBadge();
}
document.addEventListener('DOMContentLoaded', mountBell);

/* ---- UI helpers ---- */
function updateBadge(){ const b=document.getElementById('cartBadge'); if(b) b.textContent=cartCount(); }
let _toastTimer;
function showToast(msg){
  let t=document.getElementById('toast');
  if(!t){ t=document.createElement('div'); t.className='toast'; t.id='toast';
    t.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg><span id="toastMsg"></span>';
    document.body.appendChild(t); }
  t.querySelector('#toastMsg').textContent=msg;
  t.classList.add('show'); clearTimeout(_toastTimer);
  _toastTimer=setTimeout(()=>t.classList.remove('show'),2200);
}
function pcardHTML(p){
  return `<a class="pcard" href="chi-tiet-san-pham.html?sp=${p.slug}">
    <img src="${prodImg(p.slug)}" alt="${prodName(p)}" loading="lazy"/>
    <div class="b"><span class="c">${catName(p.cat)}</span><h4>${prodName(p)}</h4><div class="p">${fmt(p.price)}</div></div></a>`;
}
document.addEventListener('DOMContentLoaded', updateBadge);
