/* ============ layout.js — header/footer/FAB dùng chung, SONG NGỮ (cần i18n.js + store.js nạp trước) ============ */
(function(){
const page = document.body.dataset.page||'';
const A = k => page===k?' class="active"':'';
const L = getLang();
const header = `
<div class="announce">${t('announce')}</div>
<header>
  <div class="wrap nav">
    <a class="brand" href="index.html" aria-label="Trà Nai Vàng">
      <img src="assets/logo-full.png" alt="Logo Trà Nai Vàng"/>
      <span class="wm"><b>TRÀ NAI VÀNG</b><span>Since 1982 · Bảo Lộc</span></span>
    </a>
    <nav aria-label="Chính"><ul class="menu">
      <li><a href="san-pham.html"${A('san-pham')}>${t('nav.products')}</a></li>
      <li><a href="index.html#heritage">${t('nav.story')}</a></li>
      <li><a href="index.html#terroir">${t('nav.terroir')}</a></li>
      <li><a href="index.html#b2b">${t('nav.agents')}</a></li>
      <li><a href="index.html#know">${t('nav.know')}</a></li>
      <li><a href="index.html#contact">${t('nav.contact')}</a></li>
    </ul></nav>
    <div class="nav-actions">
      <button class="langsw" id="langSw" aria-label="Language">${L==='vi'?'EN':'VI'}</button>
      <a href="tai-khoan.html" aria-label="${t('ac.crumb')}"><svg class="hicon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-3.5 4.5-5 8-5s6.5 1.5 8 5"/></svg></a>
      <a class="cart-wrap" href="gio-hang.html" aria-label="${t('ct.crumb')}">
        <svg class="hicon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M2.4 3.2h2.3l1.75 10a1.7 1.7 0 0 0 1.68 1.4h8.75a1.7 1.7 0 0 0 1.66-1.32L20.6 6H5.3"/><path d="M8.9 7.6l.5 4.5M13 7.6v4.5M17.1 7.6l-.5 4.5"/><circle cx="9.3" cy="19.1" r="1.75"/><circle cx="16.7" cy="19.1" r="1.75"/></svg>
        <span class="cart-badge" id="cartBadge">0</span>
      </a>
      <div class="burger" aria-label="Menu" role="button" tabindex="0"><span></span><span></span><span></span></div>
    </div>
  </div>
</header>`;
const footer = `
<footer>
  <div class="wrap">
    <div class="foot-grid">
      <div class="foot-brand">
        <img src="assets/logo-full.png" alt="Trà Nai Vàng"/>
        <p>${t('foot.desc')}</p>
      </div>
      <div class="fcol"><h4>${t('foot.shop')}</h4>
        <a href="san-pham.html">${t('foot.all')}</a><a href="gio-hang.html">${t('foot.cart')}</a>
        <a href="tai-khoan.html">${t('foot.account')}</a><a href="tai-khoan.html#orders">${t('foot.track')}</a></div>
      <div class="fcol"><h4>${t('foot.brand')}</h4>
        <a href="index.html#heritage">${t('nav.story')}</a><a href="index.html#terroir">${t('nav.terroir')}</a>
        <a href="index.html#b2b">${t('nav.agents')}</a><a href="index.html#know">${t('nav.know')}</a></div>
      <div class="fcol"><h4>${t('nav.contact')}</h4>
        <p class="lbl">${t('foot.company')}</p>
        <p>${t('foot.addr')}</p>
        <a href="tel:0855256512">Hotline: 0855 256 512</a>
        <a href="mailto:info@tranaivang.com">info@tranaivang.com</a>
        <p>${t('foot.hours')}</p></div>
    </div>
    <div class="foot-bottom">
      <span>${t('foot.rights')}</span>
      <span>${t('foot.policies')}</span>
    </div>
  </div>
</footer>
<div class="fab">
  <a class="phone" href="tel:0855256512" aria-label="Hotline"><svg viewBox="0 0 24 24" width="22" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M5 4h3l2 5-2.5 1.5a12 12 0 0 0 5 5L14 13l5 2v3a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z"/></svg></a>
  <a class="zalo" href="#" aria-label="Chat Zalo">Zalo</a>
</div>`;
document.body.insertAdjacentHTML('afterbegin', header);
document.body.insertAdjacentHTML('beforeend', footer);
document.getElementById('langSw').onclick = () => setLang(L==='vi'?'en':'vi');
if(typeof updateBadge==='function') updateBadge();
})();
