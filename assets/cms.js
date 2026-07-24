/* CMS nhẹ — áp nội dung admin chỉnh (nv_cms) lên trang public. Chạy sau i18n. */
(function(){
  function cms(){try{return JSON.parse(localStorage.getItem('nv_cms'))||{}}catch(e){return {}}}
  function setTxt(sel,v){if(v==null||v==='')return;document.querySelectorAll(sel).forEach(el=>{el.textContent=v;});}
  function apply(){
    var c=cms();
    setTxt('.tb-left', c.freeship);
    setTxt('.tb-hot b', c.hotline);
    setTxt('[data-i18n="foot.desc"]', c.footerDesc);
    setTxt('[data-i18n="foot.addr"]', c.address);
    if(Array.isArray(c.banners)){
      var slides=document.querySelectorAll('#btrack .bslide');
      c.banners.forEach(function(b,i){
        var s=slides[i]; if(!s||!b)return;
        if(b.title){var h=s.querySelector('.bcap h2');if(h)h.textContent=b.title;}
        if(b.sub){var p=s.querySelector('.bcap p');if(p)p.textContent=b.sub;}
        if(b.img){var im=s.querySelector('img');if(im)im.src=b.img;}
      });
    }
  }
  if(document.readyState==='loading') window.addEventListener('DOMContentLoaded',function(){setTimeout(apply,60);});
  else setTimeout(apply,60);
})();
