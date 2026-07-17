# PROJECT BRIEF — Website chính thức TRÀ NAI VÀNG

> Tài sản số quan trọng nhất của thương hiệu trong 10 năm tới. Đọc file này ĐẦU TIÊN mỗi phiên làm việc.

## 1. Thương hiệu
- **Tên:** Trà Nai Vàng — CÔNG TY TNHH TRÀ NAI VÀNG (liên quan: Trà Thiên Thành).
- **Logo:** huy hiệu lục giác ĐỎ, viền vàng, nai vàng ngậm lá trà, chữ "NAI VANG — Since 1982".
  File gốc: `D:\A. BINH\2026\WEB\logo trà nai vàng.pdf` → PNG: `assets/logo-full.png`.
- **Năm:** dùng **Since 1982** (theo logo). ⚠️ Web cũ phần giới thiệu ghi "1945" — CHỜ CHỦ THƯƠNG HIỆU XÁC NHẬN.
- **Xuất xứ:** cao nguyên Bảo Lộc, Lâm Đồng.
- **Chứng nhận THẬT (có ảnh):** FSSC 22000, OCOP 3 sao (`assets/real/cert-*.jpg`).

## 2. Liên hệ chính thức (user cung cấp 2026-07-16 — dùng bản này)
- Địa chỉ: Lô CN7, KCN Lộc Sơn, P. Lộc Sơn, TP. Bảo Lộc, Lâm Đồng
- Email: info@tranaivang.com · SĐT: 0855 256 512
- Giờ làm việc: Thứ 2 – CN (7h30 – 21h00)
- (Web cũ ghi T2–T7 8h30–17h30 — dùng bản user cung cấp.)

## 3. Định vị & cảm giác
Nhà trà Việt lâu đời, **uy tín – cao cấp – tự nhiên – sạch – hiện đại**. 5 giây đầu: "thương hiệu trà lớn, đáng tin".

## 4. Hướng thiết kế ĐÃ CHỐT (user duyệt)
- **XANH thiên nhiên tươi mát** (logo đỏ nhưng site XANH — đỏ CHỈ xuất hiện trong logo).
- Gu tham khảo: OSULLOC, Tea Ceremony, trà cao sơn Đài Loan — trắng/kem + xanh trà, nhiều khoảng trắng, editorial, ảnh thiên nhiên.
- Chi tiết: xem `STYLE_GUIDE.md`.

## 5. Đối tượng
Khách lẻ · Đại lý · Nhà phân phối · DN mua quà tặng · Khách quốc tế · Đối tác xuất khẩu (site có VI/EN về sau).

## 6. Công nghệ
- Prototype hiện tại: HTML tĩnh (`index.html`) để duyệt thiết kế.
- Bản chính thức: **Next.js + TypeScript + Tailwind CSS**, CMS quản trị được, AI/CRM/analytics-ready.
- CHỈ khởi tạo Next.js sau khi user phê duyệt thiết kế (quy trình 11 giai đoạn của brief gốc).

## 7. Mục tiêu chất lượng
Lighthouse: Performance ≥95, A11y/SEO/Best Practices = 100. Mobile-first, đẹp từ 375px đến 4K. Kiến trúc mở rộng 10 năm.

## 8. Quy tắc làm việc (BẮT BUỘC)
0. **(User lệnh 2026-07-17): CHỈ tối ưu bản PC/LAPTOP (desktop) trước.** Không chỉnh mobile/iPad/màn hình khác cho đến khi user xem xét OK toàn bộ desktop và ra lệnh từng bước. (CSS responsive sẵn có cứ giữ nguyên, nhưng mọi tinh chỉnh/kiểm tra tập trung desktop.)
1. Mỗi phiên CHỈ MỘT mục tiêu (xem lộ trình trong `TODO.md`). Không sang phiên sau khi user chưa duyệt.
2. Đầu phiên đọc: BRIEF → PROGRESS → TODO → STYLE_GUIDE → SEO_PLAN.
3. Cuối phiên cập nhật: PROGRESS, TODO, CHANGELOG; ghi rõ điểm dừng + việc đầu tiên phiên sau.
4. Không suy đoán khi thiếu thông tin — hỏi user. Có nhiều phương án → phân tích ưu/nhược + đề xuất.
5. KHÔNG đụng/sửa/xoá gì trên web đang chạy tranaivang.vn (chỉ được xem/lấy ảnh).
6. **GIT (từ 2026-07-17):** Laptop (local) → commit → push **GitHub: https://github.com/ANHTHUNGO/Web_TraNaiVang.git** (branch `main`). CUỐI MỖI PHIÊN: `git add -A && git commit` (message tiếng Việt không dấu, kết bằng dòng Co-Authored-By Claude) `&& git push`. Danh tính local đã cấu hình: ANHTHUNGO / atdesign.ngo@gmail.com.

## 9. Phạm vi TMĐT ĐẦY ĐỦ (đặc tả bổ sung 2026-07-16 chiều — user yêu cầu)
Website phải đạt trải nghiệm mua hàng ngang Shopee/Tiki nhưng giữ bản sắc thương hiệu:
- **5 trang chính sách:** giao hàng, đổi trả, thanh toán, bảo mật, điều khoản sử dụng (nội dung đầy đủ theo spec trong `TODO.md`).
- **Đăng nhập/Đăng ký:** card giữa màn hình, kiểu TMĐT lớn; đăng ký có họ tên/SĐT/email/mật khẩu (+ ngày sinh, giới tính tùy chọn) + checkbox đồng ý điều khoản.
- **Trang tài khoản khách hàng:** thông tin cá nhân, đổi mật khẩu, địa chỉ, đơn hàng + trạng thái, lịch sử mua, đã xem, yêu thích, điểm thưởng (cấu trúc), voucher, thông báo, hỗ trợ, đăng xuất.
- **Cổng đại lý (cấu trúc riêng):** hồ sơ, mã/cấp đại lý, khu vực, đơn hàng, doanh số, chiết khấu, công nợ, báo cáo, tài liệu bán hàng, banner, catalogue.
- **Top Banner khuyến mãi** (40–60px, trên cùng): bật/tắt, đổi nội dung/màu/link trong quản trị, hỗ trợ slider/marquee.
- **Trải nghiệm TMĐT trọn bộ:** giỏ hàng, thanh toán, xác nhận đơn, theo dõi đơn, email/thông báo đơn hàng, tìm kiếm, bộ lọc, SP liên quan, đã xem gần đây, đánh giá, yêu thích, mã giảm giá, phiếu quà tặng (cấu trúc), FAQ, hướng dẫn mua hàng.
- ⚠️ **Kiến trúc:** các chức năng này cần backend + DB → prototype tĩnh chỉ để DUYỆT THIẾT KẾ; chức năng thật triển khai ở giai đoạn Next.js (dự kiến Next.js + TypeScript + Tailwind + PostgreSQL/Prisma, cấu trúc module mở; thanh toán: COD + chuyển khoản trước, chừa cổng VNPay/MoMo).

## 10. Lộ trình phiên (ĐÃ MỞ RỘNG theo phạm vi TMĐT)
**Khối thiết kế UI (prototype tĩnh, duyệt từng phiên):**
P1 ✅ Home ✦ P2 Danh mục SP (+tìm kiếm, bộ lọc) ✦ P3 Chi tiết SP (+đánh giá, SP liên quan/đã xem) ✦ P4 Giỏ hàng → Thanh toán → Xác nhận đơn ✦ P5 Đăng nhập/Đăng ký ✦ P6 Tài khoản khách hàng ✦ P7 Cổng đại lý ✦ P8 Bộ trang chính sách (5) + FAQ + Hướng dẫn mua hàng ✦ P9 Landing Cà Gai Leo Tía Tô ✦ P10 Landing Tam Nguyên Dưỡng Trà ✦ P11 Giới thiệu + Nhà máy + Vùng nguyên liệu ✦ P12 Đại lý (marketing) + Liên hệ ✦ P13 Blog/Kiến thức.
**Khối triển khai:** P14 Khởi tạo Next.js + backend + CMS ✦ P15 SEO Technical ✦ P16 Performance ✦ P17 Accessibility ✦ P18 Kiểm thử toàn site.
(Top Banner khuyến mãi: gộp vào phiên chỉnh Home gần nhất.)

## 10. Đường dẫn quan trọng
- Project: `D:\A. BINH\2026\WEB\tra-nai-vang\`
- Ảnh thật đã tải từ web cũ: `assets/real/` (71 ảnh; 2 contact sheet `_sheet_*.jpg` để xem nhanh)
- Ảnh placeholder SVG tự vẽ: `assets/*.svg` (script: `assets/gen_assets.py`)
- Preview local: `python -m http.server 8931` trong thư mục project → mở qua preview_start `http://127.0.0.1:8931` (trình duyệt in-app chặn `file://` và gõ localhost trực tiếp).
