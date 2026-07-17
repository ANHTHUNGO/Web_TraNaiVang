# STYLE GUIDE — Trà Nai Vàng (v3 "Xanh thiên nhiên" — ĐÃ DUYỆT)

Nguyên tắc lớn: **logo đỏ là điểm đỏ DUY NHẤT trên nền xanh/kem** → cực nổi bật. Site tươi mát, thoáng, editorial.

## 1. Color Palette (CSS variables trong index.html)
| Token | Hex | Dùng cho |
|---|---|---|
| `--tea` | #5E7C3E | Màu chính: nút primary, giá, accent |
| `--tea-2` | #4A6B2F | Hover primary |
| `--forest` | #2F4A24 | Section tối (heritage/b2b), text đậm |
| `--pine` | #38562A | Gradient section tối |
| `--sage` | #7E9B54 | Phụ |
| `--sage-100` | #E7EEDA | Nền xanh nhạt (announce, newsletter, panel sau hero) |
| `--gold` | #B39247 / `--gold-2` #977A38 / `--gold-light` #D9BE7E | Điểm nhấn sang, eyebrow line, nút phụ |
| `--cream` | #FBFCF7 | Nền body |
| `--off` | #F2F5EA | Nền section xen kẽ |
| `--ink` | #28321F | Chữ chính |
| `--stone` | #6E7563 | Chữ phụ |
| Footer bg | #1E2E16 | |
- KHÔNG dùng đỏ cho UI (đỏ chỉ trong ảnh logo).

## 2. Typography
- **Display/Heading:** Fraunces (Google Fonts, hỗ trợ tiếng Việt) — weight 400–500, italic cho nhấn.
- **Body/UI:** Be Vietnam Pro — 300/400/500/600/700.
- H1 clamp(40px→74px) · H2 clamp(30px→50px) · H3 20–22px · body 14.5–16.5px · eyebrow 12px, letter-spacing .26em, uppercase.
- Eyebrow luôn có gạch vàng 24px phía trước (`.eyebrow::before`).

## 3. Spacing & Grid
- Container: max-width 1260px, padding 28px.
- Section padding: clamp(74px→128px) (`.pad`). Spacious — nhiều khoảng trắng.
- Grid: sản phẩm 4 cột → 2 (≤1080) → 2 nhỏ (≤520); pillars 3→1; footer 4→2→1.

## 4. Components
- **Buttons:** pill (border-radius 40px), padding 15×30. Primary = tea/trắng; Gold = gold-light/nâu; Ghost = viền line; Outline-light trên nền tối. Hover: translateY(-2px)+shadow, 300ms.
- **Cards:** radius 16px, viền `--line-soft`, hover translateY(-6/-7px)+shadow; ảnh thumb 1:1 (SP) / 16:10 (blog), img scale 1.05 khi hover.
- **Tag:** pill nhỏ, tea/trắng; biến thể `.gold`.
- **Hero art:** khung radius 22px viền vàng nhạt + panel sage-100 lệch (inset 24px/-20px) phía sau; seal tròn forest "82"; ảnh SP nổi góc phải.
- **Section tối:** gradient forest→pine, chữ kem, eyebrow gold-light, watermark lá (opacity ≤.1).
- **FAB (nút nổi):** Gọi (tea), Zalo (#0068ff), Messenger (gradient), Back-to-top (gold-light). 52px, phải-dưới.

## 5. Shadow & Radius
- `--shadow` 0 34px 70px -34px rgba(40,60,26,.35); `--shadow-soft` nhẹ hơn. Radius: nút 40px, card 16px, khung hero 22px.

## 6. Animation
- Reveal khi cuộn: opacity+translateY(26px), .9s cubic-bezier(.2,.7,.2,1), IntersectionObserver threshold .14, chạy 1 lần.
- Tôn trọng `prefers-reduced-motion` (đã có).
- ⚠️ PERF: KHÔNG chồng nhiều lớp blur (backdrop-filter + filter:blur) — từng gây treo renderer. Header chỉ 1 backdrop-blur 10px.

## 7. Hình ảnh
- Ảnh thật: `assets/real/` (bản gốc tải từ web cũ) — bản dùng trên site đã resize/nén (xem tên gọn: hero.jpg, terroir.jpg, prod-*.jpg, cert-*.jpg, know-*.jpg, story.jpg).
- Phong cách ảnh: đồi trà xanh mờ sương, tay hái trà, bộ ấm trà mộc, bao bì thật. Tông xanh-nâu mộc.
- Sau này (Next.js): chuyển WebP/AVIF + `next/image`, lazy-load, đặt width/height chống CLS.

## 8. Responsive breakpoints
- ≤1080px: SP 2 cột, footer 2 cột. ≤860px: menu → burger, hero 1 cột (art xuống dưới, max 440px), section tối 1 cột. ≤520px: SP 2 cột hẹp, form newsletter dọc, thu nhỏ seal/float.
- Kiểm tra chuẩn ở: 375, 768, 1024, 1440 (+ FHD/2K/4K khi vào Next.js).

## 9. Song ngữ (i18n)
- Từ điển trung tâm `assets/i18n.js`: `"khóa":["tiếng Việt","English"]` — mọi chữ UI mới PHẢI thêm vào đây, không hardcode.
- Chữ trong HTML tĩnh: gắn `data-i18n="khóa"` (innerHTML) / `data-i18n-ph` (placeholder). Chữ trong template JS: dùng `t('khóa')`.
- Tên SP: trường `en` + `kw` trong `store.js`; hiển thị qua `prodName(p)`, danh mục `catName()`, tag `tagName()`; tìm kiếm qua `searchText(p)` (VI không dấu + EN + keywords).
- Nút chuyển VI|EN: class `.langsw` trong header (layout.js tự gắn; trang có header riêng phải tự gắn `#langSw`).
- Ngôn ngữ lưu `localStorage.nv_lang`; đổi ngôn ngữ = reload trang.

## 10. Giọng viết (copy)
Tiếng Việt trang trọng ấm áp, ngắn gọn, cảm xúc tinh tế ("Mỗi búp trà là một lời hứa..."). CTA động từ rõ: "Khám phá sản phẩm", "Đăng ký làm đại lý". Không hô khẩu hiệu rỗng, không tiếng Anh chen (trừ tagline có chủ đích).
