-- ============================================================
-- TRÀ NAI VÀNG — Supabase schema (PostgreSQL)
-- Chạy trong Supabase → SQL Editor → New query → Run.
-- Sau đó điền SUPABASE_URL + anon key vào assets/config.js.
-- ============================================================

-- 1) FORM CÔNG KHAI (khách/đại lý gửi lên — cho phép anon INSERT)
create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  code text, name text, phone text, email text, type text, msg text,
  status text default 'Mới'
);

create table if not exists public.subscribers (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  email text not null, source text
);

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  phone text, email text, source text, note text, channel text,
  status text default 'Mới'
);

create table if not exists public.dealer_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  code text, username text, name text, rep text, phone text, email text,
  biz_addr text, addr text, city text, district text, tax text,
  biz text, channel text,
  status text default 'Chờ duyệt'
);

-- 2) DỮ LIỆU VẬN HÀNH (đơn hàng — chỉ tài khoản đăng nhập mới ghi/đọc của mình)
create table if not exists public.dealer_orders (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  code text, dealer text, channel text,
  total bigint, paid bigint, status text, note text,
  items jsonb
);

create table if not exists public.retail_orders (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  code text, name text, phone text, email text, address text,
  total bigint, status text, items jsonb
);

-- ============================================================
-- RLS (Row Level Security)
-- ============================================================
alter table public.contacts            enable row level security;
alter table public.subscribers         enable row level security;
alter table public.leads               enable row level security;
alter table public.dealer_applications enable row level security;
alter table public.dealer_orders       enable row level security;
alter table public.retail_orders       enable row level security;

-- Form công khai: cho phép anon GHI (insert) nhưng KHÔNG cho đọc (chỉ admin/service role đọc)
create policy "anon insert contacts"     on public.contacts            for insert to anon with check (true);
create policy "anon insert subscribers"  on public.subscribers         for insert to anon with check (true);
create policy "anon insert leads"        on public.leads               for insert to anon with check (true);
create policy "anon insert applications" on public.dealer_applications for insert to anon with check (true);
create policy "anon insert retail order" on public.retail_orders       for insert to anon with check (true);
create policy "anon insert dealer order" on public.dealer_orders       for insert to anon with check (true);

-- ĐỌC dữ liệu: chỉ service_role (Admin dùng service key phía server) — KHÔNG cấp cho anon.
-- (Không tạo policy select cho anon => anon không đọc được. Admin đọc qua Edge Function/service key.)

-- ============================================================
-- GHI CHÚ BẢO MẬT (khi lên production)
-- - KHÔNG kiểm tra mật khẩu bằng JS phía trình duyệt: dùng Supabase Auth.
-- - Admin/nhân viên/đại lý: phân quyền qua bảng profiles + auth.uid() trong policy.
-- - Không lưu công nợ/đơn hàng/chiết khấu trong localStorage khi đã có DB này.
-- - Anon key chỉ được GHI form công khai; đọc dữ liệu nhạy cảm phải qua service role.
-- ============================================================
