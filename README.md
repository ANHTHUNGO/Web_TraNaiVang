# TRÀ NAI VÀNG — Website chính thức (Prototype toàn diện)

> Tài liệu này mô tả **toàn bộ** dự án để bất kỳ ai (kể cả AI như GPT) đọc là hiểu ngay đang làm gì, cấu trúc ra sao, tính năng nào đã có, còn lại làm gì. Đọc từ trên xuống.

**Link live:** https://anhthungo.github.io/Web_TraNaiVang/
**Repo:** https://github.com/ANHTHUNGO/Web_TraNaiVang

---

## 1. Dự án là gì?

Website thương mại điện tử + cổng B2B + quản trị cho thương hiệu **Trà Nai Vàng** (Golden Deer Tea) — thương hiệu trà Việt từ cao nguyên **Bảo Lộc, Lâm Đồng**, **Since 1982**.

Mục tiêu: một tài sản số hoàn chỉnh gồm **3 lớp người dùng**:
1. **Khách lẻ** — mua bán lẻ như Shopee/Tiki (giỏ hàng, đặt hàng, theo dõi đơn, tài khoản, ưu đãi).
2. **Đại lý (B2B)** — cổng quản lý kinh doanh sỉ riêng: giá theo cấp, đặt hàng sỉ, công nợ, chiết khấu, báo cáo, đặt hàng qua chatbot.
3. **Admin công ty** — quản lý đại lý, đơn (sỉ + lẻ), công nợ, sản phẩm/giá, nội dung website (CMS), marketing, kết nối Google Sheets.

**Trạng thái hiện tại:** *Prototype front-end hoàn chỉnh* — chạy 100% bằng **HTML/CSS/JS tĩnh**, dữ liệu **mô phỏng bằng `localStorage`** (chưa có backend/database thật). Mọi luồng bấm được, xem được để duyệt UX trước; phần đọc/ghi dữ liệu thật (Google Sheets, thanh toán, kho, đăng nhập server) làm ở **giai đoạn backend** sau.

---

## 2. Thông tin thương hiệu (dữ liệu thật dùng trong site)

- **Công ty:** CÔNG TY TNHH TRÀ NAI VÀNG
- **Địa chỉ nhà máy:** Lô CN7, KCN Lộc Sơn, P. Lộc Sơn, TP. Bảo Lộc, Lâm Đồng (toạ độ ~11.5241, 107.8419)
- **Hotline:** 0855 256 512 · **Email:** info@tranaivang.com
- **Giờ làm việc:** T2–CN, 7h30–21h00
- **Since 1982** · Logo: huy hiệu lục giác **đỏ son**, viền vàng, **nai vàng ngậm lá trà**
- **Nhà máy:** hơn 11.000m², sản lượng ~1.000 tấn/năm, đạt **FSSC 22000**, **OCOP 3 sao**
- **Năng lực:** sản xuất, bán lẻ, và **gia công OEM/ODM**

---

## 3. Công nghệ & kiến trúc

- **Front-end tĩnh:** HTML5 + CSS3 (không framework) + JavaScript thuần (vanilla).
- **Không backend** (bản prototype). Dữ liệu lưu ở **`localStorage`** trình duyệt (mô phỏng database).
- **Font:** `Fraunces` (serif, tiêu đề) + `Be Vietnam Pro` (sans, chuẩn dấu tiếng Việt) — Google Fonts.
- **SEO:** JSON-LD `LocalBusiness/Store` (NAP + toạ độ + giờ mở cửa) nhúng ở tất cả trang public; meta description; Google Maps embed.
- **Cache-busting:** mọi link asset gắn `?v=1707XX`, tăng số mỗi lần sửa để trình duyệt tải bản mới.
- **Host demo:** GitHub Pages (tĩnh). Chạy local: `python -m http.server 8931` trong thư mục dự án.

### Kiến trúc dùng chung (assets/)
| File | Vai trò |
|---|---|
| `assets/site.css` | Design system + toàn bộ style (biến màu, component, responsive) |
| `assets/store.js` | Dữ liệu sản phẩm (30 SP) + logic giỏ hàng/đơn/voucher/wishlist/email/thông báo; hàm `fmt`, `prodImg`, `orderStatus`, `applyVoucher`… |
| `assets/i18n.js` | Từ điển song ngữ **VI/EN** (~170 khoá), hàm `t(key)`, `getLang/setLang`; áp qua `data-i18n` |
| `assets/layout.js` | Tự sinh **header (menu 7 mục) + footer + nút nổi (FAB) + chatbot** cho các trang con |
| `assets/cms.js` | Áp nội dung admin chỉnh (`nv_cms`) lên trang chủ (câu chữ + ảnh banner) |
| `assets/lead.js` | Bắt số điện thoại (lead) qua **Zalo/Chat** → lưu + mô phỏng gửi ưu đãi Zalo/Email |
| `assets/real/` | Ảnh thật (sản phẩm, banner, nhà máy, 31 ảnh máy móc `machines/m01..m31.jpg`) |
| `assets/templates/` | File mẫu Google Sheets chuẩn cho đại lý (input + output) |
| `assets/logo-full.png` | Logo thật render từ PDF |

---

## 4. Danh sách toàn bộ trang

### A. Website chính (khách lẻ + thương hiệu)
| Trang | File | Nội dung |
|---|---|---|
| Trang chủ | `index.html` | Banner slider, SP nổi bật (8 SP đóng gói), khối gia công, khối "Vị trí nhà máy" + Google Maps, footer. Có header/footer riêng (không dùng layout.js) |
| Giới thiệu | `gioi-thieu.html` | Câu chuyện thương hiệu, di sản, giá trị |
| Sản phẩm | `san-pham.html` | Catalog lọc theo danh mục — **chỉ 8 SP bán lẻ đóng gói** |
| Chi tiết SP | `chi-tiet-san-pham.html` | Thông tin SP, thêm giỏ, ảnh, mô tả |
| Danh mục gia công | `danh-muc-gia-cong.html` | **22 loại trà nhận gia công** (trà lá rời) — 1 lưới 4 cột, "Liên hệ báo giá" |
| Dây chuyền công nghệ | `day-chuyen-cong-nghe.html` | Nhà máy 11.000m² + hero, gallery ảnh thật, **lưới 31 máy móc** đúng thứ tự, quy trình 6 bước, bản đồ |
| Kiến thức | `kien-thuc.html` + `bai-viet.html` | Blog/bài viết về trà |
| Liên hệ | `lien-he.html` | Form liên hệ + thông tin + Google Maps |
| Chính sách | `chinh-sach.html` | 14 chính sách (router `?p=...`), chuẩn pháp luật VN |
| FAQ / Hướng dẫn / Khuyến mãi | `faq.html`, `huong-dan-mua-hang.html`, `khuyen-mai.html` | Hỗ trợ khách |
| 404 | `404.html` | Trang lỗi |

### B. E-commerce khách lẻ
| Trang | File | Nội dung |
|---|---|---|
| Giỏ hàng | `gio-hang.html` | Giỏ hàng, cập nhật SL, áp voucher |
| Thanh toán | `thanh-toan.html` | Nhập địa chỉ, chọn thanh toán, đặt hàng → gửi email xác nhận |
| Xác nhận đơn | `xac-nhan-don.html` | Timeline theo dõi đơn (pending/confirm/shipping/done) |
| Tra cứu đơn | `tra-cuu-don.html` | Tra đơn bằng mã + SĐT |
| Đăng nhập/Đăng ký | `dang-nhap.html` | 2 lối đăng ký (khách lẻ / đại lý), consent NĐ13/2023, tặng WELCOME15, email chào mừng |
| Tài khoản | `tai-khoan.html` | Hồ sơ, địa chỉ, **đơn hàng (lọc trạng thái)**, wishlist, voucher, điểm, thông báo, email đã nhận |

### C. Cổng đại lý (B2B)
| Trang | File | Nội dung |
|---|---|---|
| Trang đại lý | `dai-ly.html` | Quyền lợi, cấp đại lý, CTA đăng ký/đăng nhập |
| Đăng ký đại lý | `dang-ky-dai-ly.html` | Form: **Tên đại lý → tự sinh `@daily_<tên>`**, mật khẩu (nút con mắt), chủ/người đại diện, **2 địa chỉ tách biệt** (GPKD + nhận hàng), cấp **mã tự động `TNV-<KV>-<TÊN>`**, trạng thái Chờ duyệt |
| Đăng nhập đại lý | `dang-nhap-dai-ly.html` | Đăng nhập bằng @username / mã / email + mật khẩu (có kiểm tra) |
| Dashboard đại lý | `dashboard-dai-ly.html` | **Cổng B2B đầy đủ** (xem mục 5) |
| Hệ thống đại lý | `he-thong-dai-ly.html` | Store locator (lọc tỉnh, chỉ đường, bản đồ) |

### D. Quản trị (Admin)
| Trang | File | Nội dung |
|---|---|---|
| Đăng nhập admin | `dang-nhap-admin.html` | admin / admin123 |
| Dashboard admin | `dashboard-admin.html` | **Cổng quản trị** (xem mục 6) |

---

## 5. Cổng đại lý B2B — `dashboard-dai-ly.html` (chi tiết)

Sau khi đăng nhập, đại lý thấy sidebar + **banner ưu đãi ~5cm** (chương trình chính sách áp cho đại lý) và các mục:

- **Tổng quan:** KPI doanh số tháng/năm, công nợ hiện tại, hạn mức còn lại, chiết khấu, điểm; tiến độ mục tiêu tháng (progress bar) + biểu đồ 6 tháng; cảnh báo (công nợ quá hạn, sắp đạt thưởng, đơn đang giao). *Đại lý mới thấy lời chào, không thấy dữ liệu demo.*
- **Đặt hàng sỉ:** bảng giá sỉ theo cấp (`giá sỉ = giá lẻ × (1 − chiết khấu)`), SKU, quy cách thùng (30 hộp/thùng), MOQ, tồn kho, khuyến mãi; nhập số thùng vào giỏ.
- **Đặt hàng qua chat (AI):** khung chat có **auto-chatbot** — chọn SP → số thùng → áp mã → **chốt đơn** → tạo đơn kênh "Chatbot" + đồng bộ (mô phỏng) về Google Sheets cho sản xuất. Bot cũng trả lời từ khoá (giá, khuyến mãi, ship) và **bắt SĐT** thành lead.
- **Giỏ hàng sỉ:** tự tính Tạm tính → chiết khấu sản lượng (≥20 thùng −2%) → mã giảm giá → VAT 8% → phí ship (freeship ≥30 triệu) → tổng; hiển thị hạn mức công nợ khả dụng; ô nhập mã giảm giá.
- **Đơn hàng & lưu trữ:** lọc theo **năm/tháng** + trạng thái; mỗi đơn **tải phiếu**: CSV (đúng cột GG Sheet) + In/PDF (read-only để lưu trữ); xuất Excel theo kỳ. Ghi chú: mỗi đơn đồng bộ 1 dòng vào sheet "Đơn hàng".
- **Thanh toán & công nợ:** hạn mức, đã dùng, còn lại; danh sách khoản nợ với **màu cảnh báo** (xanh chưa đến hạn / vàng sắp đến / đỏ quá hạn); các hình thức thanh toán.
- **Ưu đãi & mã của tôi:** mã giảm giá riêng của đại lý; **tự thêm mã** được cấp (giống khách lẻ); dùng mã khi đặt.
- **Mục tiêu & thưởng:** tiến độ, mốc thưởng (đạt mục tiêu +2%, vượt 20% +3%), điểm thưởng.
- **Báo cáo mua hàng:** KPI năm, sản phẩm mua nhiều nhất, tỷ trọng.
- **Hồ sơ đại lý:** mã, tên, người đại diện, **2 địa chỉ (GPKD + nhận hàng)**, cấp, chiết khấu, hạn mức, NV phụ trách.
- **Hỗ trợ & khiếu nại:** tạo ticket (mã, loại, phản hồi).

**Cách ly dữ liệu:** mỗi đại lý chỉ thấy đơn của chính mình (`order.dealer === code`).

---

## 6. Cổng Admin — `dashboard-admin.html` (chi tiết)

- **Dashboard:** tổng đại lý, tổng đơn, giá trị/đã thu, công nợ; cảnh báo cần xử lý.
- **Đại lý (mã & duyệt):** **danh sách TẤT CẢ mã đại lý** (sheet "Đại lý"), duyệt hồ sơ chờ, gán cấp/chiết khấu/hạn mức.
- **Đơn hàng đại lý (sỉ)** + **Đơn khách lẻ:** quản lý cả hai; duyệt đơn → chuyển kho sản xuất.
- **Công nợ:** tổng công nợ, theo đơn, tuổi nợ.
- **Sản phẩm & giá:** bảng giá lẻ + sỉ theo cấp (Tiêu chuẩn −25% / Cấp 1 −35% / NPP −40%); thứ tự ưu tiên áp giá.
- **Nội dung website (CMS):** sửa câu chữ (freeship, hotline, footer) + **thay ảnh banner** (upload) → lưu `nv_cms` → áp NGAY lên trang chủ; nút "Xem trước".
- **Zalo & Marketing:** danh sách **SĐT/lead** đã thu; **soạn & gửi** poster/khuyến mãi/sự kiện tới toàn bộ liên hệ qua **Email + Zalo** (mô phỏng); **sửa banner ưu đãi đại lý**.
- **Kết nối Google Drive:** dán **link 4 sheet** (Đại lý in/out + Khách lẻ in/out) — chỗ công ty gắn Drive vào; tải file mẫu.
- **Cấu hình chatbot:** bot đại lý & bot khách lẻ dùng **nguồn training KHÁC nhau**.

---

## 7. Chatbot & Bắt lead (Zalo/Chat)

- **Chatbot khách lẻ** (`layout.js`, hiện ở góc phải mọi trang con): tư vấn SP, tra đơn, ưu đãi, chính sách, gặp nhân viên. Tự **nhận diện SĐT** trong tin nhắn → ghi lead + hẹn gửi ưu đãi Zalo/Email.
- **Chatbot đại lý** (trong dashboard): đặt & chốt đơn sỉ; cũng bắt SĐT.
- **Nút Zalo** (`lead.js`): bấm mở form **"Nhận ưu đãi qua Zalo"** (SĐT + email) → lưu `nv_leads` + mô phỏng gửi poster/khuyến mãi + mở `zalo.me/0855256512`.
- Toàn bộ lead vào sheet **"Lead"** để admin chăm sóc & gửi marketing.

---

## 8. Mô hình dữ liệu (localStorage keys)

| Key | Ý nghĩa |
|---|---|
| `nv_cart`, `nv_orders` | Giỏ & đơn khách lẻ (đơn có `ts`; trạng thái tính theo phút: pending 0 / confirm 2 / shipping 10 / done 30; hủy = `status==='cancelled'`) |
| `nv_user`, `nv_wishlist`, `nv_emails` | Tài khoản lẻ, yêu thích, hộp thư mô phỏng |
| `nv_dealer` | Phiên đại lý đang đăng nhập |
| `nv_dealer_accounts` | **Registry mọi tài khoản đại lý** (key theo mã / @username / email / SĐT) |
| `nv_dorders` | Đơn sỉ (mỗi đơn gắn `dealer` = mã đại lý) |
| `nv_dcart`, `nv_dvcodes` | Giỏ sỉ, ví mã giảm giá của đại lý |
| `nv_ggsync` | Log mô phỏng đồng bộ đơn về Google Sheets |
| `nv_leads`, `nv_promo_outbox` | Danh sách SĐT/lead + nhật ký gửi marketing |
| `nv_dealer_promo` | Nội dung banner ưu đãi đại lý (admin sửa) |
| `nv_cms` | Nội dung/ảnh trang chủ (admin CMS) |
| `nv_admin` (session) | Phiên admin; `nv_admin_drive` = link Google Sheets đã kết nối |

### Schema Google Sheets (mô phỏng cột thật để nối backend)
- **Đơn hàng:** Thời gian · Kênh · Trang · Tên khách · SĐT · Địa chỉ · Sản phẩm · Số lượng · Ghi chú · Trạng thái
- **Đại lý:** Mã đại lý · Tên · Người đại diện · SĐT · Email · Địa chỉ · Tỉnh · Quận · MST · Cấp · Chiết khấu · Hạn mức · NV phụ trách · Ngày ĐK · Trạng thái
- **Lead:** Thời gian · Kênh · Tên/Nick · SĐT · Email · Nội dung quan tâm · Nguồn · Trạng thái
- File mẫu: `assets/templates/GG-SHEET-DAI-LY-INPUT.xlsx` (training bot) & `GG-SHEET-DAI-LY-OUTPUT.xlsx` (bot ghi ra).

---

## 9. Hệ thống thiết kế

- **Hướng:** xanh trà tự nhiên, tươi mát, editorial (tham khảo OSULLOC/Tea Ceremony). Nền trắng-kem, xanh trà là màu chính, vàng kim điểm nhấn; **đỏ chỉ nằm trong logo**.
- **Màu:** `--tea #5E7C3E` (nút chính), `--forest #2F4A24` (section tối), `--gold-light #D9BE7E`, nền `--cream #FBFCF7`.
- Nút bo tròn pill, thẻ bo góc mềm, nhiều khoảng trắng.
- **Chỉ tối ưu desktop/laptop trước** (mobile/tablet làm sau khi có lệnh).

---

## 10. Tài khoản demo

- **Khách lẻ:** đăng ký mới bất kỳ, hoặc đăng nhập với email/SĐT bất kỳ (mô phỏng).
- **Đại lý:** mã **DL0001** / mật khẩu **123456** (hoặc nút "Đăng nhập nhanh"); hoặc tự đăng ký để nhận mã riêng.
- **Admin:** **admin** / **admin123**.

---

## 11. Đã xong ✓ / Còn lại (backend)

**Đã xong (front-end):** toàn bộ 27 trang, e-commerce lẻ, cổng đại lý B2B (đăng ký→mã→đăng nhập→đặt hàng thủ công & qua chat→đơn theo năm/tháng + tải file→công nợ→mã riêng→báo cáo), cổng admin (đại lý/đơn/công nợ/giá/CMS/marketing/kết nối Drive), chatbot + bắt lead Zalo, banner ưu đãi đại lý, song ngữ VI/EN, SEO JSON-LD, ảnh thật nhà máy/máy móc/sản phẩm, file mẫu Google Sheets.

**Nền backend đã dựng sẵn (chỉ cần cấu hình để chạy thật):** `db/schema.sql` (bảng + RLS Supabase), `assets/backend.js` (lớp `NV.push/NV.list`), `assets/config.js` (điền URL+anon key). Form (Liên hệ, Nhận tin, Bắt SĐT/Zalo, Đăng ký đại lý, Đơn hàng lẻ+sỉ) **tự đẩy lên Supabase khi cấu hình**; để trống thì chạy demo localStorage. Hướng dẫn: [`db/DEPLOY.md`](db/DEPLOY.md).

**Còn lại (giai đoạn backend — cần server/DB):**
- Đọc/ghi Google Sheets **thật** qua Google API / Apps Script (đồng bộ đơn, đại lý, lead).
- Đăng nhập/tài khoản thật (server auth), multi-tenant thật.
- Thanh toán thật (VNPAY/MoMo/QR/thẻ), quản lý kho & giao hàng thật.
- Zalo OA + email marketing thật để gửi poster/khuyến mãi.
- Publish CMS cho mọi khách truy cập; trang Admin đầy đủ phân quyền, nhật ký, cảnh báo tự động.
- Tối ưu mobile/tablet; chuyển sang Next.js + DB + CMS nếu cần mở rộng.

---

## 12. Chạy local

```bash
cd tra-nai-vang
python -m http.server 8931
# mở http://127.0.0.1:8931
```

Xem thêm: [PROJECT_BRIEF.md](PROJECT_BRIEF.md) · [PROJECT_PROGRESS.md](PROJECT_PROGRESS.md) · [CHANGELOG.md](CHANGELOG.md) · [STYLE_GUIDE.md](STYLE_GUIDE.md) · [SEO_PLAN.md](SEO_PLAN.md) · [TODO.md](TODO.md)
