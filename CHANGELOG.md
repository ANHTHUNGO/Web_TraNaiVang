# CHANGELOG — Trà Nai Vàng Website

## [v170730] 2026-07-17 — HOÀN THIỆN TOÀN BỘ TRANG FRONT-END (13 trang mới) ✅
Người dùng giao 100% tự làm hết. Bổ sung toàn bộ nhóm trang nội dung + gia công + đại lý + tiện ích còn thiếu (bản thiết kế front-end; phần kết nối backend/thanh toán/CMS/chatbot-thật để giai đoạn sau).

**Trang mới:**
- `gioi-thieu.html` — Giới thiệu: câu chuyện 1982, ý nghĩa tên gọi, tầm nhìn/sứ mệnh/giá trị, năng lực sản xuất, quy trình, chứng nhận, thông tin doanh nghiệp.
- `danh-muc-gia-cong.html` — **Danh mục gia công (OEM/ODM)**: 12 loại trà nền (trà xanh, oolong, hồng trà, bạch trà, shan tuyết…) — ảnh trà trong dĩa để KHÁCH CHỌN GIA CÔNG, không phải hàng bán lẻ; nút "Liên hệ báo giá".
- `day-chuyen-cong-nghe.html` — Nhà máy 11.000m², 1.000 tấn/năm, KCN Lộc Sơn; quy trình 6 bước; chứng nhận FSSC/OCOP.
- `chinh-sach.html` — **Hệ thống 14 chính sách** (điều khoản, bảo mật, dữ liệu cá nhân, cookie, đặt hàng, thanh toán, giao hàng, kiểm hàng, đổi trả, hoàn tiền, đảm bảo chất lượng, KH thân thiết, đại lý, CTV) — chuẩn pháp luật VN (NĐ 52/2013, 85/2021, 13/2023; Luật BVQLNTD 2023); mỗi chính sách có phiên bản + ngày hiệu lực + lịch sử; điều hướng sidebar theo ?p=.
- `faq.html` — FAQ nhóm + accordion. `huong-dan-mua-hang.html` — 4 bước + payment/ship/return.
- `lien-he.html` — form liên hệ (loại yêu cầu, mã hỗ trợ, email xác nhận) + thông tin DN + map placeholder.
- `tra-cuu-don.html` — tra cứu đơn bằng mã đơn + SĐT → timeline trạng thái.
- `khuyen-mai.html` — thẻ ưu đãi (WELCOME15/NAIVANG10/FREESHIP/combo Tết) + Áp dụng ngay.
- `dai-ly.html` — landing đại lý (quyền lợi, nhóm đối tác, chính sách, CTA). `dang-ky-dai-ly.html` — form đăng ký đầy đủ + validate + email. `dang-nhap-dai-ly.html` — cổng đăng nhập đại lý. `he-thong-dai-ly.html` — tìm đại lý theo tỉnh (store locator + Google Maps).
- `kien-thuc.html` — blog/tin tức (lọc danh mục). `bai-viet.html` — chi tiết bài viết + bài liên quan. `404.html`.

**Nền chung nâng cấp (v170730):**
- `assets/layout.js` — header thêm HOTLINE + nút "Đăng ký đại lý" + tìm kiếm; MENU 7 mục (Giới thiệu · Gia công · Dây chuyền · Sản phẩm · Đại lý · Kiến thức · Liên hệ); footer đầy đủ (Mua hàng/Hỗ trợ/Chính sách/Liên hệ + mạng XH + phương thức thanh toán + link cookie); **CHATBOT AI** toàn site (mock, gợi ý sản phẩm/đơn/ưu đãi/chính sách/gặp nhân viên, có disclaimer "trợ lý AI").
- `assets/site.css` — style trang nội dung, chatbot, header/footer mở rộng.
- `assets/i18n.js` — thêm khóa nav.oem/nav.tech/nav.about/nav.promo/nav.guide/nav.faq/h.agentBtn/cb.* …
- `index.html` — menu 7 mục trỏ trang thật, footer link thật + chính sách, thêm section "Nhà máy & dịch vụ gia công".
- Cache-bust đồng bộ **?v=170730** toàn bộ 24 trang.

**Kiểm tra:** 13/13 trang HTTP 200 + có layout.js; chính sách render 14 mục + ?p= đúng; gia công 12 card; home 7 mục menu + 8 SP + OEM section; 0 ảnh lỗi; 0 lỗi console. (Ảnh chụp preview kẹt do renderer chạy lâu — DOM đã verify bằng JS.)

**Cần user xác nhận / giai đoạn sau:** tách hẳn trà lá rời (dĩa) khỏi catalog bán lẻ (hiện còn xuất hiện ở cả 2 nơi); ảnh nhà máy thật; bảng giá thật; STK thật; backend (giỏ/đơn/đại lý/CMS/thanh toán/chatbot thật).


## 2026-07-17 — TỐI ƯU CHUYỂN ĐỔI: WELCOME15 + email có link đơn + tìm kiếm trang chủ ✅
- **Voucher WELCOME15 (-15% đơn đầu cho thành viên mới)** + hàm `applyVoucher()`: mọi nơi hiện mã đều có nút **"Áp dụng ngay"** → mã kích hoạt, tự trừ tiền ở giỏ/thanh toán, chuyển tới trang mua sắm.
- **Email đơn hàng nâng cấp**: ảnh sản phẩm từng món + nút "Theo dõi đơn hàng →" mở trang tiến trình (xac-nhan-don.html?ma=...). Email chào mừng có khối quà WELCOME15 + nút "Áp dụng ngay & mua sắm" (link san-pham.html?ap=WELCOME15).
- **Chuông**: thông báo "Bạn nhận được mã giảm 15% cho lần đầu đăng ký! 🎁" kèm nút Áp dụng ngay.
- **Màn hình đăng ký thành công mới**: hộp quà WELCOME15 + nút áp dụng + "Vào tài khoản" + lưới "Dành riêng cho bạn" 4 SP gợi ý chọn ngay.
- **Tài khoản > Mã giảm giá**: 3 voucher (WELCOME15 nổi bật + NAIVANG10 + FREESHIP), mỗi mã có nút Áp dụng ngay + Sao chép.
- **Trang chủ**: thanh tìm kiếm bên phải "Bộ sưu tập tuyển chọn" — gõ ra dropdown 6 gợi ý (ảnh+tên+giá, song ngữ, không dấu), Enter → trang danh mục ?q=; san-pham nhận ?q= và ?ap=.
- i18n +13 khóa. Cache-bust ?v=170729.
- Verify: search "oolong"=6 gợi ý ✓; đăng ký → màn hình quà + 4 SP ✓; Áp dụng ngay → giỏ tự trừ −48.000₫/320.000₫ ✓; đặt đơn NV61775552 → email có ảnh + link theo dõi + tổng 302.000₫ ✓; chuông có nút áp mã ✓.


## 2026-07-17 — EMAIL TỰ ĐỘNG CHO MỌI SỰ KIỆN ✅
- `store.js`: hệ email mô phỏng (outbox localStorage `nv_emails`, tối đa 60): `sendEmail()`, `syncOrderEmails()` chạy mỗi lần tải trang — phát hiện đơn CHUYỂN TRẠNG THÁI và gửi email tương ứng (đặt hàng → xác nhận → đang giao → giao xong → hủy, theo `nv_email_stage`).
- Email tự gửi tại: đăng ký (chào mừng + xác nhận quyền đã đồng ý), đặt hàng (chi tiết đơn), mỗi bước tiến trình đơn, hủy đơn (kèm lý do), chiến dịch khuyến mãi (1 lần/tài khoản), cập nhật chính sách (1 lần/tài khoản — mô phỏng thông báo thay đổi chính sách theo NĐ 13/2023).
- `tai-khoan.html`: tab mới **"Email đã nhận"** (badge số lượng) — danh sách email có phân loại (Đơn hàng/Khuyến mãi/Chính sách/Hệ thống), bấm mở đọc nội dung; ghi chú rõ đây là mô phỏng, bản thật gửi qua máy chủ email.
- i18n +16 khóa (em.*). Cache-bust ?v=170728.
- Verify: đăng ký → email chào mừng; reload → email chính sách + khuyến mãi (1 lần); đặt đơn NV60229160 → email xác nhận; hủy → email hủy kèm lý do; tab Email hiện 4 thư, mở đọc được chi tiết.
- GHI CHÚ backend: khi vào Next.js thay outbox bằng dịch vụ email thật (Resend/SendGrid) — cùng các điểm gọi sendEmail() này.


## 2026-07-17 — CHUÔNG THÔNG BÁO + XIN QUYỀN KHI ĐĂNG KÝ ✅
- **Chuông cạnh giỏ hàng** (mọi trang, tự gắn qua store.js `mountBell()`): badge đỏ số chưa đọc; dropdown liệt kê thông báo theo tài khoản — cập nhật tiến trình đơn (đặt/xác nhận/vận chuyển/giao xong/hủy) + ưu đãi; nút "Đánh dấu đã đọc" (localStorage `nv_noti_read`); chưa đăng nhập → mời Đăng nhập/Đăng ký.
- **Bước xin quyền khi đăng ký** (modal sau khi bấm Đăng ký, theo chính sách sàn TMĐT + Nghị định 13/2023/NĐ-CP): ① Bật chuông thông báo — BẮT BUỘC mọi tài khoản (checked+disabled); ② Truy cập vị trí (tuỳ chọn, gọi Geolocation thật nếu tick); ③ Cookie & cá nhân hoá (tuỳ chọn). Đồng ý → lưu `user.consent{noti,loc,track,at}` + gọi Notification.requestPermission (guarded).
- **Tài khoản > Hồ sơ**: thêm khối "Quyền & thông báo" — xem/đổi 2 quyền tuỳ chọn, lưu cùng hồ sơ.
- i18n +17 khóa (bell.*, cs.*, pm.title). Cache-bust ?v=170727 (8 trang).
- Verify: chưa login → panel mời đăng nhập ✓; đăng ký → modal quyền → đồng ý → consent lưu đúng ✓; badge 2 → mở panel 2 mục unread ✓ → đánh dấu đã đọc → badge ẩn ✓.


## 2026-07-17 — Đưa dự án lên Git + GitHub ✅
- `git init` (branch main), .gitignore, commit đầu 144 files.
- Remote: https://github.com/ANHTHUNGO/Web_TraNaiVang.git — push thành công (3b58282).
- Quy trình mới (BRIEF §8.6): cuối mỗi phiên commit + push để không mất phiên bản.


## 2026-07-17 (sáng, theo feedback user xem trên Cốc Cốc)
- **Fix "lỗi font" banner (bn.1t/hm.feat hiện khóa thô):** nguyên nhân trình duyệt user cache `i18n.js` cũ → gắn version `?v=170726` cho i18n/store/layout.js + site.css trên cả 8 trang (từ nay đổi asset phải tăng version).
- **Mũi tên banner đẩy vào trong** (16px → 36px).
- **Khối B2B "Trở thành đại lý" chuyển lên NGAY DƯỚI Sản phẩm nổi bật.** Thứ tự mới: Banner → Sản phẩm → Đại lý → Giá trị cốt lõi → Câu chuyện → Vùng trà → Chứng nhận → Kiến thức → Newsletter → Footer.
- Quy tắc mới của user đã ghi BRIEF §8.0: **chỉ tối ưu desktop**, mobile/tablet chờ lệnh từng bước.
- Verify desktop 1440: caption banner hiện đúng chữ, arrows inset, order section chuẩn.

## 2026-07-17 — GIỎ HÀNG PRO + THEO DÕI/HỦY ĐƠN + TRANG CHỦ BÁN HÀNG ✅ (user giao toàn quyền)
**Yêu cầu user (trước khi đi công việc):** (1) icon giỏ hàng rõ như xe đẩy mẫu + quản lý tiến trình đơn (đặt→vận chuyển→giao xong) + hủy đơn có khung thời gian + tick lý do; (2) trang chủ ưu tiên bán hàng: banner ngang lớn thay được ảnh (sale/sự kiện) → sản phẩm ngay dưới → các phần khác xuống dưới.
**Đã làm:**
- **Icon xe đẩy mới** (nan giỏ + 2 bánh, giống mẫu) trên mọi header + nút thêm-giỏ trên card; **nút giỏ hàng nổi bật**: tròn xanh trà + badge CAM #F2A93B viền kem (site.css + index).
- **Tiến trình đơn theo thời gian thật** (`store.js`): đặt 0′ Chờ xác nhận → 2′ Đã xác nhận → 10′ Đang giao → 30′ Hoàn tất (`ORDER_FLOW`, `orderStatus()`); đơn lưu `ts`.
- **Hủy đơn**: cho phép trong 10 phút đầu (trước "Đang giao") — `canCancel/cancelOrder/openCancelModal` + modal 5 lý do tick (đổi ý/đặt nhầm/đổi địa chỉ/giá tốt hơn/khác), nút Giữ đơn / Xác nhận hủy (đỏ). Trạng thái "Đã hủy" chip đỏ + banner lý do trên trang xác nhận.
- `xac-nhan-don.html`: timeline 4 bước **tự sáng theo trạng thái thật**, nút hủy + ghi chú khung 10′, banner đã hủy.
- `tai-khoan.html`: đơn hàng hiện trạng thái tính theo thời gian + nút hủy (tự ẩn khi hết hạn) + render lại sau hủy; **tab Thông báo tự sinh báo cáo theo đơn** (đang vận chuyển 🚚 / đã giao ✅ / đã hủy ✕).
- `gio-hang.html`: icon trống mới + link "Quản lý đơn hàng".
- **Trang chủ mới**: HERO cũ → **BANNER SLIDER full-width** 4 slide (Tết sale/thiên nhiên/organic/quà DN — ảnh thay trong assets/real, caption+CTA song ngữ, autoplay 5s, mũi tên+chấm, pause hover, mobile caption xuống đáy); **Sản phẩm nổi bật (8 SP, render động song ngữ) chuyển lên NGAY DƯỚI banner**; pillars/heritage/terroir... xuống dưới.
- i18n: +40 khóa (bn.*, od.*, cx.*, noti.*, st.cancelled, hm.feat*).
**Verify:** banner autoplay ✓; 8 card + xe đẩy ✓; đặt đơn NV56978758 → timeline bước 1 ✓ → hủy với lý do "Đặt nhầm" → banner đỏ ✓; đơn giả lập 12′/40′ → chip "Đang giao"/"Hoàn tất" đúng, nút hủy tự ẩn ✓; thông báo tự sinh ✓; mobile ✓; 0 lỗi console.
**Dang dở:** Không. Chờ user về duyệt.

## 2026-07-16 20:30 — SONG NGỮ VI/EN toàn site + tìm kiếm song ngữ ✅
**User duyệt batch TMĐT + yêu cầu mới:** tìm kiếm tối ưu cả tiếng Anh lẫn tiếng Việt; website song ngữ.
**Tạo mới:** `assets/i18n.js` — từ điển trung tâm ~170 khóa `key:[vi,en]`, `t()`, `getLang/setLang` (localStorage `nv_lang`), `applyI18n()` quét `[data-i18n]`/`[data-i18n-ph]`.
**Nâng cấp:** `store.js` — 30 SP thêm **tên EN + từ khóa song ngữ** (`en`, `kw`), helpers `prodName/catName/tagName/searchText`; toast song ngữ. `layout.js` — header/footer render bằng `t()` + **nút chuyển VI|EN**. `site.css` — style `.langsw`.
**Các trang:** index (data-i18n toàn bộ nội dung chính + dịch tên SP bằng JS), san-pham (chuyển sang chrome chung layout.js + toàn bộ UI song ngữ + **tìm kiếm khớp VI không dấu + EN + keywords**: "jasmine" → 3 SP), chi-tiet (mô tả/tab/nút/cùng loại), gio-hang, thanh-toan (form+lỗi+phương thức), xac-nhan-don (timeline+chi tiết), dang-nhap (toàn form), tai-khoan (sidebar+hồ sơ+trạng thái đơn).
**Verify:** EN end-to-end 0 lỗi console — catalog "The Nai Vang Tea Collection"/chips EN/search jasmine=3; Home hero EN; detail "Four Seasons Oolong · Add to cart"; cart "Your cart · Add 402.000₫ more for free shipping"; nút VI|EN chuyển 2 chiều.
**Ghi chú:** nội dung mẫu (review khách, thông báo, mô tả voucher) tạm giữ VI ở bản EN — sẽ do CMS quản lý khi vào Next.js.
**Dang dở:** Không.

## 2026-07-16 19:05 — BATCH TMĐT: luồng mua hàng A→Z như Shopee ✅
**User duyệt Phiên 2 + lệnh:** "hoàn thiện hết thiết kế các trang + giả lập giỏ hàng hoàn chỉnh, đi sâu từng trang sau".
**Tạo mới:** `assets/site.css` (design system chung) · `assets/store.js` (data 30 SP + giỏ/wishlist/voucher/đơn/user localStorage) · `assets/layout.js` (header/footer/FAB tự sinh) · `chi-tiet-san-pham.html` · `gio-hang.html` · `thanh-toan.html` · `xac-nhan-don.html` · `dang-nhap.html` · `tai-khoan.html`.
**Sửa:** `san-pham.html` (dùng store.js chung, card link chi tiết, header icon tài khoản+giỏ) · `index.html` (icon tài khoản + giỏ badge, 4 card link chi tiết, store.js) · fix bug voucher đè mã đơn trong thanh-toan.html.
**E2E test PASS:** chi tiết → giỏ (badge/toast) → voucher NAIVANG10 → checkout validate → đặt hàng NV02436275 → xác nhận timeline → đăng ký → tài khoản hiện đơn.
**Dang dở:** Không. Chờ user duyệt batch. Batch kế: chính sách+FAQ+top banner+cổng đại lý.

## 2026-07-16 15:20 — Phiên 2: Trang danh mục sản phẩm ✅
**User duyệt Home + lệnh Phiên 2** (dùng ảnh SP đã tải, TMĐT giả lập như thật).
**Thay đổi:**
- Tạo `assets/real/products/` — 30 ảnh SP thật slug sạch (480px JPG, từ ảnh web cũ trong Downloads/assets/real).
- Tạo **`san-pham.html`**: catalog 30 SP / 7 danh mục; chip lọc (đếm số), tìm kiếm không dấu, sắp xếp 4 kiểu, thêm giỏ (badge + toast, localStorage `nv_cart`), yêu thích (localStorage `nv_wish`), empty-state; breadcrumb + page head; đồng bộ header/footer/FAB với Home.
- `index.html`: nối link nav "Sản phẩm" + nút "Xem tất cả sản phẩm" + cột footer → `san-pham.html`.
- Verify desktop 1440 + mobile 375 + test tự động chức năng (lọc=6 oolong, search "sam dua"=2, sort desc=Phổ Nhĩ, badge=1, toast wishlist).
**File sửa/tạo:** san-pham.html (mới) · index.html (3 link) · assets/real/products/*.jpg (30 mới) · PROGRESS/TODO/CHANGELOG.
**Dang dở:** Không. Điểm dừng: chờ duyệt Phiên 2 → mở Phiên 3 (chi tiết SP).

## 2026-07-16 14:40 — Tiếp nhận đặc tả mở rộng TMĐT
- User yêu cầu hoàn thiện chức năng bán hàng chuẩn Shopee/Tiki: 5 trang chính sách, đăng nhập/đăng ký, tài khoản KH, cổng đại lý, top banner khuyến mãi (bật/tắt, quản trị được), trọn bộ trải nghiệm TMĐT (giỏ hàng→thanh toán→xác nhận→theo dõi đơn, đánh giá, yêu thích, voucher, FAQ...).
- Cập nhật: PROJECT_BRIEF.md (§9 phạm vi TMĐT + §10 lộ trình 18 phiên), TODO.md (lộ trình mới), SEO_PLAN.md (URL mới + quy tắc noindex trang auth/tài khoản/giỏ hàng).
- Chưa code gì thêm — chờ user duyệt Home + chốt mục tiêu phiên tiếp theo.
- File sửa: PROJECT_BRIEF.md, TODO.md, SEO_PLAN.md, PROJECT_PROGRESS.md, CHANGELOG.md.

## 2026-07-16 (chiều) — Phiên 1: Home Page hoàn chỉnh với ảnh thật ✅
**Thay đổi:**
- Tạo bộ tài liệu quản trị dự án: PROJECT_BRIEF.md, PROJECT_PROGRESS.md, TODO.md, CHANGELOG.md, STYLE_GUIDE.md, SEO_PLAN.md.
- Chuẩn hoá 13 ảnh thật web-ready trong `assets/real/` (hero.jpg, terroir.jpg, story.jpg, prod-{samdua,oolong,lai,gaileo,soi}.jpg, cert-{fssc,ocop}.jpg, know-{1,2,3}.jpg) — resize + nén từ ảnh gốc tải web cũ.
- `index.html`: thay toàn bộ SVG placeholder bằng ảnh thật (hero người hái trà, 4 SP bao bì thật, terroir đồi trà, 3 ảnh kiến thức, float product); đổi tên SP theo SP thật (Oolong Tứ Quý, Trà Xanh Hoa Lài); hero-trust & strip đổi sang chứng nhận thật FSSC 22000 + OCOP 3★; thêm khối `.cert-strip` hiển thị 2 ảnh giấy chứng nhận + CSS.
- Verify desktop 1440 + mobile 375: ảnh 15/15 load OK, các section hiển thị đúng.

**File đã sửa/tạo:** index.html · 6 file .md · assets/real/*.jpg (13 file mới) · assets/real/_sheet_*.jpg (contact sheet)

**Dang dở:** Không. Điểm dừng: Home xong, **chờ user duyệt**. Việc đầu tiên phiên sau: xem PROJECT_PROGRESS.md §"Việc đầu tiên".

---

## 2026-07-16 (trưa) — Thu thập dữ liệu web cũ
- Lấy ảnh thật từ tranaivang.vn qua Cốc Cốc (user đăng nhập, em điều khiển có kiểm soát + Chrono Sniffer): 71 ảnh gồm 16 banner, ~34 ảnh SP, chứng nhận FSSC 22000 + OCOP 3★, ảnh hái trà/bộ ấm.
- Phát hiện: web cũ vốn tông XANH; hero carousel đẹp; phần giới thiệu ghi "1945" (lệch với logo "Since 1982") — cần user xác nhận.
- KHÔNG chỉnh sửa/xoá bất kỳ dữ liệu nào trên web đang chạy.

## 2026-07-16 (sáng) — Định hướng thiết kế
- v1: prototype xanh rừng+vàng (trước khi thấy logo) → v2: đỏ sơn mài theo logo thật (render logo từ PDF) → **v3: user chốt hướng XANH thiên nhiên tươi mát** (logo đỏ chỉ là điểm nhấn), tham khảo OSULLOC/Tea Ceremony.
- Tự vẽ bộ SVG placeholder (đồi trà, lon trà) — nay đã thay bằng ảnh thật, giữ file trong `assets/` làm dự phòng.
- Liên hệ chính thức do user cung cấp: Lô CN7 KCN Lộc Sơn, Bảo Lộc · info@tranaivang.com · 0855 256 512 · T2–CN 7h30–21h00.

## [v170732] 2026-07-24
- Dây chuyền công nghệ: thay toàn bộ ảnh placeholder bằng 8 ẢNH THẬT lấy từ site chính tranaivang.vn (toàn cảnh nhà máy 11.000m², phòng nghiên cứu/kiểm định, chế biến, máy móc, đóng gói túi lọc, in tem nhãn, kho phân phối). Bố cục mới: hero toàn cảnh + số liệu, gallery 6 ảnh "Bên trong nhà máy", quy trình 6 bước, CTA hợp tác gia công.
- Trang chủ: ảnh teaser khối OEM -> factory-aerial.jpg (nhà máy thật).
- Danh mục gia công: ảnh intro -> factory-lab.jpg (phòng nghiên cứu thật).
- CSS: thêm .btn-outline-light (nút viền sáng trên nền xanh). Cache-bust -> v170732 (24 trang).
- (Đã xong trước đó trong batch này) Bỏ ảnh dĩa trà khỏi SP bán lẻ (RETAIL 8 SP đóng gói); header 2 tầng topbar+main gọn đẹp.

## [v170733] 2026-07-24 — Bổ sung đầy đủ ảnh/thứ tự + bản đồ + SEO địa phương
- DÂY CHUYỀN CÔNG NGHỆ: bổ sung **lưới 31 máy móc/thiết bị** (cắt từng ô từ ảnh gốc tranaivang.vn, đúng thứ tự trang cũ) kèm chú thích: máy tách màu, tách tạp chất, ướp hương, dàn sấy, băng tải, định lượng 14 đầu cân, các máy đóng gói túi lọc/PE/5in1, hút chân không, in date, dây chuyền đóng gói tự động, bồn chứa, kho nguyên liệu…
- GIA CÔNG: liệt kê **đầy đủ 22 loại trà** (trước chỉ 12), nhóm theo danh mục (Trà xanh 3 · Ướp hương 2 · Oolong 5 · Trà đen 2 · Trà quý 7 · Thảo mộc 1 · Pha chế 2), ảnh trà lá rời thật + mô tả từng loại.
- BẢN ĐỒ ĐỊNH VỊ: nhúng Google Maps thật (nhà máy KCN Lộc Sơn, Bảo Lộc) vào Liên hệ, Dây chuyền, Hệ thống đại lý và Trang chủ (khối "Vị trí nhà máy").
- SEO ĐỊA PHƯƠNG: chèn **JSON-LD LocalBusiness/Store** (NAP + toạ độ 11.5241,107.8419 + giờ mở cửa + logo/ảnh nhà máy) vào **toàn bộ 24 trang** để Google hiển thị đúng địa điểm Trà Nai Vàng.
- Kiểm thử: 24/24 trang HTTP 200; 31/31 ảnh máy 200; render động 31 máy đúng thứ tự + 22 gia công; giỏ hàng/voucher WELCOME15/tìm kiếm song ngữ/email/đơn hàng chạy OK; không ảnh vỡ. Cache-bust v170733.
