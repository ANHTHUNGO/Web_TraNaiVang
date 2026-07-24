/* Lớp tích hợp backend (Supabase REST).
   - Nếu chưa cấu hình (config.js trống): KHÔNG làm gì (demo giữ nguyên localStorage).
   - Nếu đã cấu hình: đẩy dữ liệu form lên bảng Supabase tương ứng.
   An toàn tuyệt đối: mọi lỗi được nuốt, không bao giờ làm hỏng luồng demo. */
(function(){
  function live(){ return !!(window.NV_CONFIG && NV_CONFIG.SUPABASE_URL && NV_CONFIG.SUPABASE_ANON); }
  function base(){ return String(NV_CONFIG.SUPABASE_URL).replace(/\/+$/,''); }
  window.NV = {
    live: live,
    /* Ghi 1 dòng vào bảng (fire-and-forget). table: contacts|subscribers|leads|dealer_applications|dealer_orders|retail_orders */
    push: function(table, row){
      if(!live()) return Promise.resolve({demo:true});
      try{
        return fetch(base()+'/rest/v1/'+table, {
          method:'POST',
          headers:{
            'apikey': NV_CONFIG.SUPABASE_ANON,
            'Authorization': 'Bearer '+NV_CONFIG.SUPABASE_ANON,
            'Content-Type':'application/json',
            'Prefer':'return=minimal'
          },
          body: JSON.stringify(row)
        }).then(function(r){ return {ok:r.ok, status:r.status}; }).catch(function(){ return {ok:false}; });
      }catch(e){ return Promise.resolve({ok:false}); }
    },
    /* Đọc bảng (dùng cho admin khi chạy thật). Trả [] nếu chưa cấu hình. */
    list: function(table){
      if(!live()) return Promise.resolve(null); // null = để admin fallback localStorage
      try{
        return fetch(base()+'/rest/v1/'+table+'?select=*&order=created_at.desc', {
          headers:{ 'apikey':NV_CONFIG.SUPABASE_ANON, 'Authorization':'Bearer '+NV_CONFIG.SUPABASE_ANON }
        }).then(function(r){ return r.ok?r.json():null; }).catch(function(){ return null; });
      }catch(e){ return Promise.resolve(null); }
    }
  };
})();
