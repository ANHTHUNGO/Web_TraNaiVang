# TODO — Trà Nai Vàng Website
> Sắp theo ưu tiên. Cập nhật: 2026-07-17 (kết phiên)

## 🔴 P0 — Chặn tiến độ (cần user)
- [x] ~~User duyệt Home Page~~ ✅ · ~~duyệt Phiên 2 danh mục~~ ✅
- [x] ~~User duyệt BATCH TMĐT~~ ✅ · ~~SONG NGỮ~~ user xem "khá ok" ✅
- [ ] **User duyệt tổng bản 17/07 (desktop)**: banner+search trang chủ, giỏ hàng/tiến trình/hủy đơn, chuông+quyền, email tự động, WELCOME15
- [ ] Ảnh banner khuyến mãi THẬT từ user (hiện dùng 4 ảnh web cũ; thay tại `assets/real/hero.jpg, terroir.jpg, banner-organic.jpg, banner-teaset.jpg` hoặc đổi src trong index.html khối BANNER SLIDER)
- [ ] Bảng giá thật 30 SP (đang giả lập) · STK ngân hàng thật (đang mock) · duyệt tên EN của 30 SP (em tự dịch)
- [ ] Dịch EN cho nội dung mẫu (review khách, thông báo, mô tả voucher) — sẽ theo CMS ở Next.js
- [ ] User xác nhận năm thành lập: **1982 (logo)** hay 1945 (giới thiệu web cũ)?
- [ ] User xác nhận chứng chỉ ISO 22000 / HACCP có thật không (chỉ FSSC 22000 + OCOP 3★ đã có ảnh)
- [ ] User cung cấp: danh sách SP + giá chính thức; ảnh gốc phân giải cao (SP hiện là thumb 400×400); ảnh đội ngũ/nhà máy chất lượng cao

## 🟠 P1 — Lộ trình phiên MỞ RỘNG TMĐT (mỗi phiên 1 mục, chờ duyệt mới sang mục sau)
**Thiết kế UI (prototype tĩnh):**
- [x] ~~Phiên 2: Danh mục sản phẩm~~ ✅
- [x] ~~Phiên 3: Chi tiết sản phẩm~~ ✅ 2026-07-16 (data chung đã tách vào `assets/store.js`)
- [x] ~~Phiên 4: Giỏ hàng → Thanh toán → Xác nhận đơn~~ ✅ 2026-07-16
- [x] ~~Phiên 5: Đăng nhập/Đăng ký~~ ✅ · ~~Phiên 6: Tài khoản KH~~ ✅ 2026-07-16 — tất cả chờ duyệt batch
- [ ] Phiên 7: Cổng đại lý (cấu trúc): hồ sơ, mã/cấp, khu vực, đơn, doanh số, chiết khấu, công nợ, báo cáo, tài liệu, banner, catalogue
- [ ] Phiên 8: 5 trang chính sách (giao hàng, đổi trả, thanh toán, bảo mật, điều khoản) + FAQ + Hướng dẫn mua hàng — nội dung đầy đủ theo spec user 2026-07-16
- [ ] Phiên 9: Landing Cà Gai Leo Tía Tô · Phiên 10: Landing Tam Nguyên Dưỡng Trà
- [ ] Phiên 11: Giới thiệu + Nhà máy + Vùng nguyên liệu · Phiên 12: Đại lý (marketing) + Liên hệ · Phiên 13: Blog/Kiến thức
- [ ] Home bổ sung (phiên chỉnh Home gần nhất): **Top Banner khuyến mãi** 40–60px bật/tắt, đổi nội dung/màu/link, slider/marquee
**Triển khai:**
- [ ] Phiên 14: Next.js + TS + Tailwind + backend (PostgreSQL/Prisma) + CMS; auth, order, voucher, wishlist, notification; **email thật qua Resend/SendGrid tại các điểm gọi sendEmail() sẵn có**; cổng thanh toán chừa sẵn VNPay/MoMo
- [ ] Phiên 15: SEO Technical · Phiên 16: Performance · Phiên 17: A11y · Phiên 18: Test toàn site

## 🟡 P2 — Nợ kỹ thuật của Home (làm ở P12–P14 hoặc khi vào Next.js)
- [ ] Menu hamburger mobile chưa hoạt động (chưa có JS toggle)
- [ ] Ảnh: đặt width/height chống CLS; chuyển WebP/AVIF; srcset responsive
- [ ] Search + giỏ hàng trong header là icon tĩnh
- [ ] Form newsletter/đăng ký đại lý chưa nối backend
- [ ] Khi vào Next.js: khởi tạo project TS+Tailwind, tách components, meta/schema theo SEO_PLAN.md
- [ ] Favicon từ logo; ảnh OG 1200×630

## 🟢 P3 — Ý tưởng đề xuất (chưa duyệt)
- [ ] Section "Quy trình sản xuất" dạng 4 bước có ảnh (Home hoặc trang Nhà máy)
- [ ] Video hero/factory tour khi có tư liệu
- [ ] Bản EN (hreflang) sau khi site VI hoàn chỉnh
- [ ] Testimonials/đánh giá thật (thu thập từ Shopee/Facebook của hãng)
