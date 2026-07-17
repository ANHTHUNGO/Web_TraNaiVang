# PROJECT PROGRESS — Trà Nai Vàng Website

> Cập nhật lần cuối: **2026-07-17** · Giai đoạn hiện tại: **Giỏ hàng PRO + theo dõi/hủy đơn + trang chủ bán hàng — XONG, chờ user về duyệt**

## ✅ 2026-07-17 — User giao toàn quyền, đã hoàn thành 2 yêu cầu lớn
1. **Giỏ hàng chuẩn TMĐT**: icon xe đẩy mới rõ ràng (mọi nơi), nút giỏ nổi bật (tròn xanh + badge cam); **tiến trình đơn tự chạy theo thời gian** Chờ xác nhận (0′) → Đã xác nhận (2′) → Đang giao (10′) → Hoàn tất (30′); **hủy đơn trong 10 phút** với modal 5 lý do tick; thông báo tự sinh theo đơn (vận chuyển/giao xong/hủy) trong tài khoản; timeline trang xác nhận sáng theo trạng thái thật.
2. **Trang chủ bán hàng**: banner slider ngang full-width 4 slide thay ảnh được (sale/sự kiện/SP nổi bật/quà DN), autoplay + arrows + dots, song ngữ; **8 sản phẩm nổi bật ngay dưới banner**; các section thương hiệu xuống dưới.
- Verify đầy đủ (đặt→hủy, mốc 12′/40′, mobile, 0 lỗi console). Chi tiết: CHANGELOG 2026-07-17.
- ✅ Song ngữ VI/EN: user đã xem ("cũng khá ok").

## ✅ SONG NGỮ VI/EN (2026-07-16 tối) — user duyệt batch TMĐT + yêu cầu song ngữ & tìm kiếm 2 thứ tiếng
- `assets/i18n.js`: từ điển trung tâm ~170 khóa [vi,en] — nền i18n dùng lại cho Next.js.
- Nút **VI|EN** trên header mọi trang (lưu localStorage `nv_lang`).
- 30 SP có tên EN + keywords → **tìm kiếm hiểu cả 2 thứ tiếng** ("jasmine"→3 SP, "sam dua" không dấu→2 SP).
- 9 trang dịch đủ UI chính; nội dung mẫu (review, thông báo) giữ VI → CMS lo sau.
- Verify EN end-to-end: 0 lỗi console.
- ✅ BATCH TMĐT: **USER ĐÃ DUYỆT** ("duyệt cho bạn vào phiên 3").

## ✅ BATCH TMĐT (2026-07-16 chiều tối) — user lệnh "làm hết các trang + giỏ hàng hoàn chỉnh như Shopee, đi sâu từng trang sau"
**Nền dùng chung (cấu trúc mở):**
- `assets/site.css` — design system chung mọi trang mới
- `assets/store.js` — 1 nguồn dữ liệu 30 SP + API giả lập: giỏ hàng {slug:qty}, wishlist, đã xem, voucher (NAIVANG10 -10%, FREESHIP), phí ship (free ≥500k), đơn hàng, user — tất cả localStorage
- `assets/layout.js` — tự sinh header/footer/FAB đồng bộ (sửa 1 chỗ ăn toàn site)

**6 trang mới (đều responsive, đã test):**
1. `chi-tiet-san-pham.html?sp=slug` — gallery+thumbs, rating, qty, Thêm giỏ/Mua ngay, tab Mô tả/Đánh giá/Giao hàng, SP cùng loại, đã xem gần đây
2. `gio-hang.html` — items + stepper + xoá, voucher, gợi ý freeship, tổng tiền, empty state
3. `thanh-toan.html` — form validate (tên/SĐT/địa chỉ), ship tiêu chuẩn/nhanh, COD/chuyển khoản (hiện STK)/ví (chờ), tóm tắt đơn
4. `xac-nhan-don.html?ma=` — timeline 4 bước kiểu Shopee, chi tiết đơn + địa chỉ + thanh toán
5. `dang-nhap.html` — card giữa màn hình, tab Đăng nhập/Đăng ký đủ trường theo spec, social mock
6. `tai-khoan.html` — sidebar 9 mục: hồ sơ (sửa được), địa chỉ (tự lấy từ đơn), đơn hàng (badge số + status chip), yêu thích, voucher (copy mã), điểm thưởng, thông báo, hỗ trợ, đăng xuất; guard chưa login → redirect

**Đã nối mạch:** Home + Danh mục → chi tiết SP; icon tài khoản + giỏ (badge đếm) trên mọi header; `san-pham.html` refactor sang store.js chung.
**E2E test PASS:** thêm giỏ (badge 2, toast) → giỏ 755k freeship → voucher -75.5k → checkout 679.5k → đặt hàng → mã NV02436275 + giỏ tự xoá → xác nhận timeline → đăng ký → tài khoản hiện đơn "Chờ xác nhận" 610k ✓
**Bug đã sửa:** voucher code đè mã đơn (spread order trong thanh-toan.html).

## ✅ PHIÊN 1 — Home Page: USER ĐÃ DUYỆT (2026-07-16 ~15:00)
## ✅ PHIÊN 2 — Danh mục SP: USER ĐÃ DUYỆT (user lệnh "duyệt phiên 2")

## ✅ PHIÊN 2 — Danh mục sản phẩm (`san-pham.html`) — 100% dựng xong, chờ duyệt
- 30 sản phẩm THẬT (ảnh web cũ, slug sạch trong `assets/real/products/`), 7 danh mục.
- Chức năng chạy thật (JS + localStorage): **chip lọc danh mục (có đếm số) · tìm kiếm KHÔNG DẤU ("sam dua" ra "Sâm Dứa") · sắp xếp (nổi bật/giá ↑↓/tên) · thêm giỏ hàng (badge trên header + toast) · yêu thích (tim, lưu localStorage) · trạng thái rỗng**.
- Đồng bộ giao diện Home (token STYLE_GUIDE), breadcrumb, page-head gradient sage, newsletter + footer + FAB.
- Home đã nối link: nav "Sản phẩm", nút "Xem tất cả sản phẩm", cột footer → `san-pham.html`.
- Verify: desktop 1440 + mobile 375; 30/30 card, 0 ảnh hỏng; test tự động: lọc Oolong=6 ✓, search không dấu=2 ✓, sort desc=Phổ Nhĩ 450k ✓, badge giỏ=1 ✓, wishlist toast ✓.

## ⚡ Sự kiện 2026-07-16 14:30
User gửi đặc tả "HOÀN THIỆN CHỨC NĂNG BÁN HÀNG" → đã hấp thụ vào BRIEF §9–10, lộ trình 18 phiên. Nguyên tắc: thiết kế UI duyệt trước → Next.js + backend sau.

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
