# SEO PLAN — Trà Nai Vàng

## 1. Sitemap / URL (thân thiện, không dấu, có gạch nối)
```
/                         Trang chủ
/gioi-thieu               + /lich-su, /gia-tri-cot-loi (hoặc anchor trong 1 trang)
/vung-nguyen-lieu         Vùng trà Bảo Lộc (terroir)
/nha-may                  Nhà máy & quy trình + chứng nhận
/san-pham                 Danh mục  → /san-pham/tra-uop-huong, /tra-oolong, /tra-thao-moc, /tra-xanh...
/san-pham/[slug]          Chi tiết sản phẩm
/ca-gai-leo-tia-to        Landing Ads (P4)
/tam-nguyen-duong-tra     Landing Ads (P5)
/qua-tang-doanh-nghiep    B2B quà tặng
/dai-ly                   Đăng ký đại lý/phân phối
/kien-thuc-tra            Blog  → /kien-thuc-tra/[slug]
/lien-he                  Liên hệ
/faq                      Câu hỏi thường gặp (schema FAQPage)
/huong-dan-mua-hang       Hướng dẫn mua hàng
/chinh-sach-giao-hang     /chinh-sach-doi-tra  /chinh-sach-thanh-toan
/chinh-sach-bao-mat       /dieu-khoan-su-dung
/dang-nhap  /dang-ky      Auth (noindex)
/tai-khoan/*              Tài khoản KH (noindex, yêu cầu đăng nhập)
/dai-ly-portal/*          Cổng đại lý (noindex, phân quyền)
/gio-hang  /thanh-toan  /xac-nhan-don   Luồng mua (noindex trừ khi cần)
/en/...                   Bản tiếng Anh (hreflang) — giai đoạn sau
```
- Trang chính sách/FAQ: index bình thường (tăng trust + long-tail); trang auth/tài khoản/giỏ hàng: `noindex,follow`.
- Đánh giá sản phẩm thật → schema `Review`/`AggregateRating` (chỉ khi có dữ liệu thật).

## 2. Từ khóa chủ lực (VN)
- Thương hiệu: "trà nai vàng", "nai vang tea", "trà thiên thành".
- Sản phẩm: "trà sâm dứa", "trà oolong bảo lộc", "trà lài", "trà hoa sói", "cà gai leo tía tô", "hồng trà", "bạch trà", "trà shan tuyết".
- B2B: "gia công trà", "trà xuất khẩu", "đại lý trà", "trà quà tặng doanh nghiệp", "nhà máy sản xuất trà".
- Địa phương: "trà bảo lộc", "trà lâm đồng".
- Mỗi trang 1 từ khóa chính + 2-4 phụ; title ≤60 ký tự dạng "{Từ khóa} | Trà Nai Vàng".

## 3. Metadata & Social
- Title/description riêng từng trang; canonical; OG (og:title/description/image 1200×630/type) + Twitter Card summary_large_image.
- Ảnh OG mặc định: hero đồi trà + logo.

## 4. Schema.org (JSON-LD)
- Toàn site: `Organization` (logo, foundingDate 1982, address KCN Lộc Sơn, contactPoint 0855 256 512, sameAs FB/YouTube/Zalo) + `WebSite`.
- Trang SP: `Product` + `Offer` (+ `AggregateRating` khi có review thật — KHÔNG bịa).
- Blog: `Article`; FAQ: `FAQPage`; điều hướng: `BreadcrumbList`; Liên hệ/Đại lý: `LocalBusiness` (giờ mở cửa T2–CN 7:30–21:00).

## 5. Internal linking
- Home → 4 SP nổi bật, vùng trà, đại lý, 3 bài blog.
- Bài blog → SP liên quan (contextual). SP → danh mục, SP cùng loại, landing tương ứng, đại lý.
- Breadcrumb mọi trang con.

## 6. EEAT (bằng chứng thật — đã có ảnh)
- Chứng nhận **FSSC 22000**, **OCOP 3 sao** (ảnh trong `assets/real/cert-*.jpg`) — hiển thị ở Home + trang Nhà máy.
- Since 1982, địa chỉ nhà máy thật, ảnh đội ngũ/nhà máy thật, trang giới thiệu có câu chuyện + con người.
- ⚠️ Không tự nhận chứng chỉ chưa xác minh (ISO 22000/HACCP web cũ có nhắc — chờ user xác nhận trước khi đưa lên).

## 7. Technical (P12–P13)
- Semantic HTML5, heading đúng tầng (1 H1/trang), alt có nghĩa cho mọi ảnh.
- sitemap.xml + robots.txt; 301 map từ URL web cũ (.html) sang URL mới khi go-live.
- Ảnh WebP/AVIF, lazy-load dưới fold, width/height chống CLS; font display:swap, preconnect.
- Core Web Vitals mục tiêu: LCP <2.5s, CLS <0.1, INP <200ms. Lighthouse: Perf ≥95, SEO/A11y/BP 100.
- hreflang vi/en khi có bản EN.

## 8. Landing Pages Ads (P4, P5)
- 1 mục tiêu chuyển đổi duy nhất/trang, form ngắn + gọi + Zalo; social proof + cam kết; tốc độ tối đa (ảnh nhẹ, ít JS); UTM-ready; Pixel/GTM/GA4 + Meta CAPI (khi vào Next.js).
