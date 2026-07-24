/* Bắt SĐT (lead) qua Zalo/Chat -> lưu danh sách + mô phỏng gửi poster/khuyến mãi qua Zalo & Email */
(function(){
  var ZALO='https://zalo.me/0855256512';
  function ls(k,d){try{return JSON.parse(localStorage.getItem(k))||d}catch(e){return d}}
  function sv(k,v){localStorage.setItem(k,JSON.stringify(v));}
  var NVLead={
    save:function(phone,email,source,note){
      var leads=ls('nv_leads',[]);
      var row={"Thời gian":new Date().toLocaleString('vi-VN'),"Kênh":"Zalo/Chat","Tên/Nick":"","SĐT":phone,"Email":email||"","Nội dung quan tâm":note||"Nhận ưu đãi","Nguồn":source||"Website","Trạng thái":"Mới"};
      leads.push(row); sv('nv_leads',leads);
      try{ if(window.NV) NV.push('leads',{phone:phone,email:email||'',source:source||'Website',note:note||'Nhận ưu đãi',channel:'Zalo/Chat',status:'Mới'}); }catch(e){}
      var out=ls('nv_promo_outbox',[]);
      out.push({to:phone,email:email||"",via:email?"Zalo + Email":"Zalo",time:row["Thời gian"],content:"Poster ưu đãi & khuyến mãi mới nhất — Trà Nai Vàng"});
      sv('nv_promo_outbox',out);
      try{ if(email && typeof sendEmail==='function') sendEmail('🎁 Ưu đãi từ Trà Nai Vàng','<p>Cảm ơn bạn đã đăng ký nhận ưu đãi! Nai Vàng sẽ gửi poster, khuyến mãi & sự kiện mới nhất qua Zalo và email này.</p>','promo',true);}catch(e){}
      return row;
    },
    openOptin:function(prefill,source){
      if(document.getElementById('zaloOptin'))return;
      var w=document.createElement('div'); w.id='zaloOptin';
      w.style.cssText='position:fixed;inset:0;background:rgba(20,30,15,.55);z-index:99999;display:grid;place-items:center;padding:20px;font-family:"Be Vietnam Pro",system-ui,sans-serif';
      w.innerHTML='<div style="background:#fff;border-radius:18px;max-width:380px;width:100%;padding:26px 24px;box-shadow:0 20px 60px rgba(0,0,0,.3)">'
        +'<div style="display:flex;justify-content:space-between;align-items:center"><h3 style="font-size:18px;margin:0;color:#2F4A24">🎁 Nhận ưu đãi qua Zalo</h3><button id="zoX" style="background:none;border:none;font-size:22px;cursor:pointer;color:#888;line-height:1">×</button></div>'
        +'<p style="font-size:13px;color:#666;margin:8px 0 16px">Để lại số điện thoại — Nai Vàng gửi ngay <b>poster, khuyến mãi & sự kiện</b> mới nhất qua <b>Zalo</b> và <b>email</b>.</p>'
        +'<input id="zoPhone" inputmode="tel" placeholder="Số điện thoại (Zalo)" value="'+(prefill||'')+'" style="width:100%;box-sizing:border-box;border:1px solid #ddd;border-radius:10px;padding:11px 14px;font-size:14px;margin-bottom:10px"/>'
        +'<input id="zoEmail" type="email" placeholder="Email (không bắt buộc)" style="width:100%;box-sizing:border-box;border:1px solid #ddd;border-radius:10px;padding:11px 14px;font-size:14px;margin-bottom:14px"/>'
        +'<button id="zoGo" style="width:100%;background:#5E7C3E;color:#fff;border:none;border-radius:30px;padding:12px;font-weight:600;font-size:14px;cursor:pointer">Đăng ký nhận ưu đãi</button>'
        +'<p style="font-size:11px;color:#999;text-align:center;margin:10px 0 0">Bằng việc đăng ký, bạn đồng ý nhận thông tin ưu đãi từ Trà Nai Vàng.</p></div>';
      document.body.appendChild(w);
      var close=function(){w.remove();};
      w.querySelector('#zoX').onclick=close; w.onclick=function(e){if(e.target===w)close();};
      w.querySelector('#zoGo').onclick=function(){
        var p=w.querySelector('#zoPhone').value.trim(), e=w.querySelector('#zoEmail').value.trim();
        if(!/^0\d{8,10}$/.test(p)){alert('Vui lòng nhập số điện thoại hợp lệ (VD: 0912345678)');return;}
        NVLead.save(p,e,source||'Zalo opt-in');
        w.querySelector('div').innerHTML='<div style="text-align:center;padding:14px 6px"><div style="font-size:44px">✅</div><h3 style="color:#2F4A24;font-size:19px;margin:6px 0">Đã ghi nhận!</h3><p style="font-size:13px;color:#666;margin:0 0 12px">Nai Vàng sẽ kết bạn Zalo & gửi ưu đãi, poster, sự kiện cho bạn ngay 🌿<br/>Mở Zalo để nhận nhanh hơn 👇</p><a href="'+ZALO+'" target="_blank" rel="noopener" style="display:inline-block;background:#0068ff;color:#fff;border-radius:30px;padding:11px 26px;text-decoration:none;font-weight:600">Mở Zalo Nai Vàng</a><br/><button id="zoDone" style="margin-top:12px;background:none;border:none;color:#888;cursor:pointer;font-size:13px">Đóng</button></div>';
        w.querySelector('#zoDone').onclick=close;
      };
    },
    detectPhone:function(t){var m=(t||'').replace(/[.\s]/g,'').match(/0\d{8,10}/);return m?m[0]:null;}
  };
  window.NVLead=NVLead;
  function hook(){document.querySelectorAll('.zalo,[data-zalo-optin]').forEach(function(el){if(el._nvhk)return;el._nvhk=1;el.addEventListener('click',function(ev){ev.preventDefault();NVLead.openOptin('','Nút Zalo');});});}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',hook);else hook();
  setTimeout(hook,400); setTimeout(hook,1200);
})();
