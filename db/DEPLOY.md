# Triển khai backend Trà Nai Vàng (Supabase) — Hướng dẫn từng bước

Website hiện chạy **chế độ DEMO** (dữ liệu ở trình duyệt). Làm theo các bước sau để chạy **THẬT** (form lưu vào database công ty, mọi máy admin đều thấy).

## Bước 1 — Tạo project Supabase
1. Vào https://supabase.com → tạo project mới (chọn region Singapore cho gần VN).
2. Đợi project khởi tạo xong (~2 phút).

## Bước 2 — Tạo bảng dữ liệu
1. Vào **SQL Editor** → **New query**.
2. Dán toàn bộ nội dung file [`db/schema.sql`](schema.sql) → **Run**.
3. Kiểm tra: tab **Table Editor** thấy các bảng `contacts`, `subscribers`, `leads`, `dealer_applications`, `dealer_orders`, `retail_orders`.

## Bước 3 — Lấy khoá kết nối
1. Vào **Project Settings → API**.
2. Copy 2 giá trị:
   - **Project URL** (vd `https://xxxx.supabase.co`)
   - **anon public** key (chuỗi `eyJ...`)

## Bước 4 — Cấu hình website
Mở file [`assets/config.js`](../assets/config.js) và điền vào:
```js
window.NV_CONFIG = {
  SUPABASE_URL: "https://xxxx.supabase.co",
  SUPABASE_ANON: "eyJhbGciOi...anon key..."
};
```
Commit + push. Từ giờ mọi form (Liên hệ, Đăng ký nhận tin, Bắt SĐT/Zalo, Đăng ký đại lý) sẽ **ghi thẳng vào Supabase**.

> ⚠️ **anon key chỉ được GHI** (insert) form công khai — không đọc được dữ liệu nhạy cảm (đã chặn bằng RLS). An toàn để đặt trên web tĩnh.

## Bước 5 (giai đoạn tiếp) — Đăng nhập & Admin thật
Những phần cần thêm khi mở rộng (ngoài phạm vi bước cơ bản):
- **Supabase Auth**: đăng nhập khách/đại lý/admin bằng email + mật khẩu (KHÔNG check pass ở JS nữa).
- **Bảng `profiles` + phân quyền**: admin / nhân viên / đại lý, dùng `auth.uid()` trong RLS.
- **Admin đọc dữ liệu**: qua **service_role key** (đặt ở server/Edge Function, KHÔNG để trên web tĩnh) — vì anon không được đọc.
- **Thanh toán thật**: VNPAY/MoMo/PayOS webhook → cập nhật đơn.
- Chuyển hosting sang server thật (không dùng GitHub Pages cho vùng đăng nhập/công nợ).

## Trạng thái mã nguồn
- `assets/config.js` — điền khoá Supabase ở đây (trống = demo).
- `assets/backend.js` — lớp `NV.push()/NV.list()` tự đẩy/đọc Supabase khi đã cấu hình; không cấu hình thì không làm gì (demo giữ nguyên).
- `db/schema.sql` — schema + RLS.

Website **không hỏng** dù chưa cấu hình: mọi nơi đều có fallback demo (localStorage).
