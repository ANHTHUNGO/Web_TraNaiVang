# PROJECT PROGRESS — Trà Nai Vàng Website

> Cập nhật lần cuối: **2026-07-17 [v170730]** · Trạng thái: **TOÀN BỘ FRONT-END hoàn thiện (24 trang) — chờ user kiểm tra; kết nối backend giai đoạn sau**

## 🔖 ĐIỂM DỪNG PHIÊN 2026-07-17 (đọc đầu tiên khi mở phiên mới)
Đã hoàn thành và push GitHub (commit mới nhất `39c13de`):
1. ✅ Trang chủ bán hàng: banner slider (mũi tên vào trong) → dải cam kết 1 dòng → **Sản phẩm nổi bật (8 SP + thanh tìm kiếm gợi ý trực tiếp bên phải tiêu đề)** → khối Đại lý → các section thương hiệu.
2. ✅ Giỏ hàng PRO: icon xe đẩy, nút giỏ tròn xanh badge cam; tiến trình đơn theo thời gian (0/2/10/30 phút); hủy đơn ≤10 phút với modal 5 lý do.
3. ✅ Chuông thông báo cạnh giỏ (badge chưa đọc, dropdown, đánh dấu đã đọc, nút Áp dụng mã) + modal xin quyền khi đăng ký (NĐ 13/2023: chuông bắt buộc, vị trí/cookie tuỳ chọn).
4. ✅ Email tự động mọi sự kiện (mô phỏng outbox + tab "Email đã nhận"): đăng ký/đặt hàng (có ảnh SP + nút Theo dõi đơn)/từng bước vận chuyển/hủy/khuyến mãi/chính sách.
5. ✅ Tối ưu chuyển đổi: **WELCOME15 -15%** + nút "Áp dụng ngay" ở email/chuông/tài khoản/màn hình đăng ký thành công (kèm 4 SP gợi ý); mã tự trừ tiền ở giỏ.
6. ✅ Song ngữ VI/EN toàn site + tìm kiếm 2 thứ tiếng; Git+GitHub thiết lập xong.

## ▶️ VIỆC ĐẦU TIÊN PHIÊN MỚI
1. Đọc 5 file: BRIEF → PROGRESS → TODO → STYLE_GUIDE → SEO_PLAN. Nhớ quy tắc: **chỉ tối ưu DESKTOP**, cache-bust khi sửa asset (hiện ?v=170729), cuối phiên commit+push.
2. Chạy server: `python -m http.server 8931` trong thư mục dự án (nếu chưa chạy).
3. Chờ feedback user về bản hiện tại; nếu duyệt → **batch kế: 5 trang chính sách + FAQ + Hướng dẫn mua hàng + Cổng đại lý (cấu trúc)** — trang mới dùng site.css/layout.js/i18n.js, viết song ngữ ngay.

## Trạng thái tổng quan
| Giai đoạn | Nội dung | % | Ghi chú |
|---|---|---|---|
| Chuẩn bị | Phân tích web cũ, thu thập dữ liệu, logo, ảnh thật | 100% | 71 ảnh thật trong `assets/real/` |
| Định hướng thiết kế | v1 xanh → v2 đỏ (theo logo) → **v3 XANH thiên nhiên (user chốt)** | 100% | Xem STYLE_GUIDE.md |
| Phiên 1 — Home Page | Toàn bộ section + ảnh thật + responsive | **100%** | ✅ **USER ĐÃ DUYỆT** |
| **Phiên 2 — Danh mục SP** | Grid 30 SP thật, lọc/tìm/sắp xếp/giỏ/yêu thích giả lập chạy thật | **100%** | ✅ Dựng + verify xong. **Chờ user duyệt** |
| Phiên 3–18 | Chi tiết SP → giỏ hàng/thanh toán → auth → tài khoản → đại lý → chính sách → landing → Next.js+backend → SEO/Perf/A11y/Test | 0% | Theo BRIEF §10 |

## Đã hoàn thành (Phiên 1, 2026-07-16)
- Bộ tài liệu: PROJECT_BRIEF, STYLE_GUIDE, SEO_PLAN, PROGRESS, TODO, CHANGELOG.
- Tải 71 ảnh thật từ tranaivang.vn (qua Chrono trong Cốc Cốc của user — phiên đã đăng nhập). Contact sheet: `assets/real/_sheet_banners.jpg`, `_sheet_products.jpg`.
- Chuẩn hoá 13 ảnh web-ready (resize+nén): hero, terroir, story, 5 prod, 2 cert, 3 know.
- Ghép ảnh thật vào Home: hero (người hái trà), 4 SP bao bì thật (Sâm Dứa, Oolong Tứ Quý, Hoa Lài, Cà Gai Leo Tía Tô), terroir, **chứng nhận FSSC 22000 + OCOP 3★ (ảnh giấy thật)**, 3 ảnh kiến thức, float product hero.
- Cập nhật trust/strip theo chứng nhận thật; liên hệ thật trong footer.
- Verify: desktop 1440 (hero/sản phẩm/chứng nhận/kiến thức/newsletter/footer OK, ảnh load 15/15), mobile 375 OK.

## Đang chờ
- ⏳ **User duyệt batch TMĐT** (6 trang mới + luồng mua hàng).
- ⏳ User xác nhận: (1) năm 1982 vs 1945? (2) ISO 22000/HACCP thật không? (3) **GIÁ 30 SP GIẢ LẬP** — cần bảng giá thật; (4) ảnh SP gốc nét hơn (đang thumb 400×400); (5) STK ngân hàng thật (đang mock Vietcombank 0123 456 789).

## Việc ĐẦU TIÊN của phiên tiếp theo
1. Đọc 5 file tài liệu theo thứ tự trong BRIEF §8.
2. Nếu user duyệt bản song ngữ → **batch tiếp: 5 trang chính sách + FAQ + Hướng dẫn mua hàng + Top Banner khuyến mãi + cổng đại lý (cấu trúc)** — dùng site.css/layout.js/i18n.js sẵn có (trang mới viết song ngữ ngay từ đầu); sau đó các trang thương hiệu (giới thiệu/nhà máy/vùng nguyên liệu) + 2 landing.
3. Sau khi TOÀN BỘ thiết kế được duyệt → Phiên Next.js + backend (BRIEF §9–10; i18n.js chuyển thành next-intl/dictionary).

## Điểm dừng hiện tại
9 trang HTML chạy trên `python -m http.server 8931`: index, san-pham, chi-tiet-san-pham, gio-hang, thanh-toan, xac-nhan-don, dang-nhap, tai-khoan (+ assets site.css/store.js/layout.js). Không có việc dang dở giữa chừng.

## Lưu ý kỹ thuật cho phiên sau
- Preview in-app chặn `file://` + localhost gõ tay → dùng preview_start với URL. Screenshot sau nhiều lần scroll có thể trả frame cũ → mở tab preview mới hoặc resize ±1px để ép repaint; scroll bằng JS `scrollBehavior='auto'`.
- KHÔNG chồng nhiều filter blur (đã gây treo renderer).
- Ảnh lazy chưa có width/height → CLS; sẽ xử lý khi vào Next.js.
