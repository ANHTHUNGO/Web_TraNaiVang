/* Cấu hình backend Trà Nai Vàng.
   ĐỂ TRỐNG = chạy chế độ DEMO (dữ liệu lưu localStorage).
   Điền URL + Anon key của Supabase để chạy THẬT (form lưu vào database công ty).
   Lấy 2 giá trị này trong Supabase: Project Settings → API. */
window.NV_CONFIG = {
  SUPABASE_URL: "",   // vd: https://xxxx.supabase.co
  SUPABASE_ANON: ""   // vd: eyJhbGciOi... (anon public key)
};
