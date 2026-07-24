/* ============ layout.js v170730 — header/footer/FAB/chatbot dùng chung, song ngữ (cần i18n.js + store.js) ============ */
(function(){
const page = document.body.dataset.page||'';
const A = k => page===k?' class="active"':'';
const L = getLang();

/* ---------- HEADER ---------- */
const header = `
<div class="announce">${t('announce')}</div>
<header>
  <div class="wrap nav">
    <a class="brand" href="index.html" aria-label="Trà Nai Vàng">
      <img src="assets/logo-full.png" alt="Logo Trà Nai Vàng"/>
      <span class="wm"><b>TRÀ NAI VÀNG</b><span>Since 1982 · Bảo Lộc</span></span>
    </a>
    <nav aria-label="Chính"><ul class="menu">
      <li><a href="gioi-thieu.html"${A('gioi-thieu')}>${t('nav.about')}</a></li>
      <li><a href="danh-muc-gia-cong.html"${A('gia-cong')}>${t('nav.oem')}</a></li>
      <li><a href="day-chuyen-cong-nghe.html"${A('day-chuyen')}>${t('nav.tech')}</a></li>
      <li><a href="san-pham.html"${A('san-pham')}>${t('nav.products')}</a></li>
      <li><a href="dai-ly.html"${A('dai-ly')}>${t('nav.agents')}</a></li>
      <li><a href="kien-thuc.html"${A('kien-thuc')}>${t('nav.know')}</a></li>
      <li><a href="lien-he.html"${A('lien-he')}>${t('nav.contact')}</a></li>
    </ul></nav>
    <div class="nav-actions">
      <a class="hotline" href="tel:0855256512" aria-label="Hotline">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M5 4h3l2 5-2.5 1.5a12 12 0 0 0 5 5L14 13l5 2v3a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z"/></svg>
        <span><small>${t('h.hotline')}</small><b>0855 256 512</b></span>
      </a>
      <a class="btn-agent" href="dang-ky-dai-ly.html">${t('h.agentBtn')}</a>
      <button class="langsw" id="langSw" aria-label="Language">${L==='vi'?'EN':'VI'}</button>
      <a href="san-pham.html" aria-label="${t('cl.search')}"><svg class="hicon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg></a>
      <a href="tai-khoan.html" aria-label="${t('ac.crumb')}"><svg class="hicon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-3.5 4.5-5 8-5s6.5 1.5 8 5"/></svg></a>
      <a class="cart-wrap" href="gio-hang.html" aria-label="${t('ct.crumb')}">
        <svg class="hicon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M2.4 3.2h2.3l1.75 10a1.7 1.7 0 0 0 1.68 1.4h8.75a1.7 1.7 0 0 0 1.66-1.32L20.6 6H5.3"/><path d="M8.9 7.6l.5 4.5M13 7.6v4.5M17.1 7.6l-.5 4.5"/><circle cx="9.3" cy="19.1" r="1.75"/><circle cx="16.7" cy="19.1" r="1.75"/></svg>
        <span class="cart-badge" id="cartBadge">0</span>
      </a>
      <div class="burger" aria-label="Menu" role="button" tabindex="0"><span></span><span></span><span></span></div>
    </div>
  </div>
</header>`;

/* ---------- FOOTER ---------- */
const footer = `
<footer>
  <div class="wrap">
    <div class="foot-grid big">
      <div class="foot-brand">
        <img src="assets/logo-full.png" alt="Trà Nai Vàng"/>
        <p>${t('foot.desc')}</p>
        <div class="socials" style="display:flex;gap:12px;margin-top:16px">
          <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" width="17" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V8c0-1.1.3-2 2-2h2V2.2C18.4 2.1 17.2 2 15.8 2 12.9 2 11 3.7 11 7v3H8v4h3v8h2Z"/></svg></a>
          <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" width="17" fill="currentColor"><path d="M23 12s0-3.3-.4-4.8a2.5 2.5 0 0 0-1.8-1.8C19.3 5 12 5 12 5s-7.3 0-8.8.4A2.5 2.5 0 0 0 1.4 7.2C1 8.7 1 12 1 12s0 3.3.4 4.8a2.5 2.5 0 0 0 1.8 1.8C4.7 19 12 19 12 19s7.3 0 8.8-.4a2.5 2.5 0 0 0 1.8-1.8C23 15.3 23 12 23 12ZM10 15V9l5 3-5 3Z"/></svg></a>
          <a href="#" aria-label="TikTok"><svg viewBox="0 0 24 24" width="16" fill="currentColor"><path d="M16 3c.3 2.2 1.6 3.9 3.8 4.2v3c-1.4 0-2.7-.4-3.8-1.1V15a6 6 0 1 1-6-6c.3 0 .7 0 1 .1v3.1a3 3 0 1 0 2 2.8V3h3Z"/></svg></a>
          <a href="#" aria-label="Zalo"><svg viewBox="0 0 24 24" width="16" fill="currentColor"><path d="M12 3C6.5 3 2 6.8 2 11.5c0 2.6 1.4 4.9 3.6 6.4-.1.9-.5 2.1-1.1 3 .1.1.3.2.5.1 1.5-.5 2.7-1.2 3.5-1.7 1.1.3 2.2.5 3.5.5 5.5 0 10-3.8 10-8.8S17.5 3 12 3Z"/></svg></a>
        </div>
        <div class="pay-row"><span>COD</span><span>VNPAY</span><span>MOMO</span><span>VISA</span><span>MASTERCARD</span><span>QR PAY</span></div>
      </div>
      <div class="fcol"><h4>${t('foot.shop')}</h4>
        <a href="san-pham.html">${t('foot.all')}</a>
        <a href="khuyen-mai.html">${t('nav.promo')}</a>
        <a href="gio-hang.html">${t('foot.cart')}</a>
        <a href="tra-cuu-don.html">${t('foot.track')}</a>
        <a href="tai-khoan.html">${t('foot.account')}</a></div>
      <div class="fcol"><h4>${L==='vi'?'Hỗ trợ':'Support'}</h4>
        <a href="huong-dan-mua-hang.html">${t('nav.guide')}</a>
        <a href="faq.html">${t('nav.faq')}</a>
        <a href="chinh-sach.html?p=giao-hang">${L==='vi'?'Chính sách giao hàng':'Shipping policy'}</a>
        <a href="chinh-sach.html?p=doi-tra">${L==='vi'?'Chính sách đổi trả':'Return policy'}</a>
        <a href="lien-he.html">${t('nav.contact')}</a></div>
      <div class="fcol"><h4>${t('nav.contact')}</h4>
        <p class="lbl">${t('foot.company')}</p>
        <p>${t('foot.addr')}</p>
        <a href="tel:0855256512">Hotline: 0855 256 512</a>
        <a href="mailto:info@tranaivang.com">info@tranaivang.com</a>
        <p>${t('foot.hours')}</p>
        <a href="dang-ky-dai-ly.html" style="color:var(--gold-light);font-weight:600">${t('h.agentBtn')} →</a></div>
    </div>
    <div class="foot-bottom">
      <span>${t('foot.rights')}</span>
      <span><a href="chinh-sach.html?p=bao-mat" style="color:inherit">${L==='vi'?'Bảo mật':'Privacy'}</a> · <a href="chinh-sach.html?p=dieu-khoan" style="color:inherit">${L==='vi'?'Điều khoản':'Terms'}</a> · <a href="chinh-sach.html?p=cookie" style="color:inherit">Cookie</a> · <a href="chinh-sach.html?p=doi-tra" style="color:inherit">${L==='vi'?'Đổi trả':'Returns'}</a></span>
    </div>
  </div>
</footer>
<div class="fab">
  <a class="phone" href="tel:0855256512" aria-label="Hotline"><svg viewBox="0 0 24 24" width="22" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M5 4h3l2 5-2.5 1.5a12 12 0 0 0 5 5L14 13l5 2v3a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z"/></svg></a>
  <a class="zalo" href="#" aria-label="Chat Zalo">Zalo</a>
</div>
<div class="cbot" id="cbot">
  <div class="cbot-panel">
    <div class="cbot-head"><div class="av">🍃</div><div><b>${t('cb.title')}</b><small>${t('cb.sub')}</small></div><button class="x" id="cbotX" aria-label="Đóng">×</button></div>
    <div class="cbot-body" id="cbotBody"></div>
    <div class="cbot-quick" id="cbotQuick"></div>
    <div class="cbot-in"><input id="cbotInput" placeholder="${t('cb.ph')}"/><button id="cbotSend" aria-label="Gửi"><svg viewBox="0 0 24 24" width="18" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 12l16-8-6 16-3-6-7-2Z"/></svg></button></div>
    <div class="cbot-note">${L==='vi'?'Trợ lý AI · thông tin mang tính tham khảo':'AI assistant · for reference only'}</div>
  </div>
  <button class="cbot-btn" id="cbotBtn" aria-label="Chat"><span class="dot"></span>
    <svg viewBox="0 0 24 24" width="26" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8 8 0 0 1-11.6 7.1L3 20l1.4-4.3A8 8 0 1 1 21 11.5Z"/><path d="M8.5 12h.01M12 12h.01M15.5 12h.01"/></svg>
  </button>
</div>`;

document.body.insertAdjacentHTML('afterbegin', header);
document.body.insertAdjacentHTML('beforeend', footer);
document.getElementById('langSw').onclick = () => setLang(L==='vi'?'en':'vi');
if(typeof updateBadge==='function') updateBadge();

/* ---------- CHATBOT (mock AI) ---------- */
const cbot=document.getElementById('cbot'), body=document.getElementById('cbotBody'),
      quick=document.getElementById('cbotQuick'), input=document.getElementById('cbotInput');
const Q=[['cb.q1','tư vấn sản phẩm'],['cb.q2','kiểm tra đơn hàng'],['cb.q3','ưu đãi'],['cb.q4','chính sách'],['cb.q5','gặp nhân viên']];
quick.innerHTML=Q.map(q=>`<button data-say="${q[1]}">${t(q[0])}</button>`).join('');
function add(html,who){ const d=document.createElement('div'); d.className='cmsg '+(who||'bot'); d.innerHTML=html; body.appendChild(d); body.scrollTop=body.scrollHeight; }
let greeted=false;
function openBot(){ cbot.classList.add('open'); document.querySelector('#cbotBtn .dot').style.display='none';
  if(!greeted){ greeted=true; setTimeout(()=>add(t('cb.hi')),150); } }
document.getElementById('cbotBtn').onclick=()=>cbot.classList.contains('open')?cbot.classList.remove('open'):openBot();
document.getElementById('cbotX').onclick=()=>cbot.classList.remove('open');
function reply(text){
  const q=norm(text);
  // sản phẩm
  const hit=(typeof PRODUCTS!=='undefined')?PRODUCTS.filter(p=>searchText(p).includes(q)&&q.length>2).slice(0,3):[];
  if(hit.length){ add(`Mình gợi ý vài sản phẩm phù hợp nhé:`); hit.forEach(p=>add(`<b>${prodName(p)}</b> — ${fmt(p.price)}<div class="cp"><img src="${prodImg(p.slug)}"/><a href="chi-tiet-san-pham.html?sp=${p.slug}">Xem chi tiết →</a></div>`)); return; }
  if(/(tu van|san pham|tra gi|mua gi|goi y)/.test(q)){ add(`Nai Vàng có 30+ dòng trà: ướp hương (sâm dứa, lài, sói), oolong, trà xanh, trà đen, thảo mộc (cà gai leo tía tô) và trà quý. Bạn thích vị nào để mình gợi ý? Hoặc xem <a href="san-pham.html">tất cả sản phẩm →</a>`); return; }
  if(/(don hang|kiem tra don|tra cuu|van chuyen|giao toi dau|order)/.test(q)){ add(`Bạn có thể tra cứu đơn bằng mã đơn + số điện thoại tại <a href="tra-cuu-don.html">Tra cứu đơn hàng →</a>, hoặc xem trong <a href="tai-khoan.html#orders">Tài khoản của bạn →</a>. Vì lý do bảo mật, mình cần bạn tự xác minh thông tin nhé.`); return; }
  if(/(uu dai|khuyen mai|ma giam|giam gia|voucher|promo)/.test(q)){ add(`🎁 Ưu đãi hiện có: <b>WELCOME15</b> (giảm 15% đơn đầu), <b>NAIVANG10</b> (giảm 10%), <b>FREESHIP</b> (miễn phí ship). Xem tất cả tại <a href="khuyen-mai.html">Khuyến mãi →</a>`); return; }
  if(/(chinh sach|doi tra|hoan tien|bao mat|giao hang|dieu khoan|cookie)/.test(q)){ add(`Các chính sách của Nai Vàng: <a href="chinh-sach.html?p=giao-hang">Giao hàng</a> · <a href="chinh-sach.html?p=doi-tra">Đổi trả</a> · <a href="chinh-sach.html?p=thanh-toan">Thanh toán</a> · <a href="chinh-sach.html?p=bao-mat">Bảo mật</a>. Xem đầy đủ <a href="chinh-sach.html?p=bao-mat">tại đây →</a>`); return; }
  if(/(dai ly|phan phoi|hop tac|si|wholesale)/.test(q)){ add(`Rất vui được hợp tác! Xem <a href="dai-ly.html">chính sách đại lý →</a> hoặc <a href="dang-ky-dai-ly.html">đăng ký làm đại lý →</a>. Hotline kinh doanh: <a href="tel:0855256512">0855 256 512</a>`); return; }
  if(/(nhan vien|gap nguoi|tu van vien|human|goi dien|hotline|so dien thoai)/.test(q)){ add(`Bạn có thể gặp nhân viên Nai Vàng qua:<br/>📞 Hotline <a href="tel:0855256512">0855 256 512</a> (7h30–21h00)<br/>💬 Zalo / Messenger (nút góc phải)<br/>✉️ <a href="mailto:info@tranaivang.com">info@tranaivang.com</a>`); return; }
  if(/(pha tra|cach pha|huong dan|su dung)/.test(q)){ add(`Cách pha chuẩn: tráng ấm bằng nước sôi, dùng 8–10g trà cho 150ml nước 85–95°C, hãm 20–30 giây rồi rót; pha được 3–4 lần nước. Xem thêm <a href="kien-thuc.html">Kiến thức trà →</a>`); return; }
  if(/(xin chao|hello|hi|chao)/.test(q)){ add(`Chào bạn 👋 Mình có thể giúp tư vấn sản phẩm, kiểm tra đơn, ưu đãi hoặc chính sách. Bạn cần hỗ trợ gì ạ?`); return; }
  add(`Mình chưa chắc chắn câu hỏi này 🤔. Bạn thử chọn nhanh bên dưới, hoặc gặp nhân viên qua hotline <a href="tel:0855256512">0855 256 512</a> nhé.`);
}
function send(text){ text=(text||input.value).trim(); if(!text)return; add(text,'me'); input.value=''; setTimeout(()=>reply(text),350); }
document.getElementById('cbotSend').onclick=()=>send();
input.addEventListener('keydown',e=>{if(e.key==='Enter')send();});
quick.addEventListener('click',e=>{const b=e.target.closest('[data-say]');if(b){if(!cbot.classList.contains('open'))openBot();send(b.dataset.say);}});
})();
