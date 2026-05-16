create table if not exists builder_submissions (
  id            uuid        default gen_random_uuid() primary key,
  full_name     text        not null,
  email         text        not null,
  phone         text        not null,
  preferred_time text        not null,
  portfolio_url text        not null,
  linkedin_id   text        not null,
  avatar_url    text,
  created_at    timestamptz default now() not null
);

-- Deduplicate by LinkedIn member ID (OAuth path)
create unique index if not exists builder_submissions_linkedin_id_idx
  on builder_submissions (linkedin_id)
  where linkedin_id is not null;

-- RLS: only service role can read/write (public can only insert via API)
alter table builder_submissions enable row level security;

create policy "service role full access"
  on builder_submissions
  using (true)
  with check (true);
