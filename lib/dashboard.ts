import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export type DashboardNews = {
  id: string;
  title: string;
  content: string;
  image_url: string | null;
  author: string | null;
  slug: string;
  images: string[];
  is_published: boolean;
  published_at: string | null;
  created_at: string;
};

export type DashboardEvent = {
  id: string;
  title: string;
  description: string | null;
  image_url: string | null;
  start_date: string;
  end_date: string | null;
  location: string | null;
  registration_url: string | null;
  is_published: boolean;
  created_at: string;
};

export function excerptFromContent(content: string, maxLen = 200): string {
  const stripped = content.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
  return stripped.length <= maxLen ? stripped : stripped.slice(0, maxLen).trimEnd() + "…";
}

export function formatDate(iso: string | null): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function getNewsList(limit = 10): Promise<DashboardNews[]> {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("is_published", true)
    .order("published_at", { ascending: false, nullsFirst: false })
    .limit(limit);
  if (error) return [];
  return (data as DashboardNews[]) ?? [];
}

export async function getNewsBySlug(slug: string): Promise<DashboardNews | null> {
  const { data, error } = await supabase
    .from("news")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();
  if (error || !data) return null;
  return data as DashboardNews;
}

export async function getEventsList(limit = 20): Promise<DashboardEvent[]> {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("is_published", true)
    .order("start_date", { ascending: false })
    .limit(limit);
  if (error) return [];
  return (data as DashboardEvent[]) ?? [];
}

export type DashboardProgram = {
  id: string;
  slug: string;
  badge: string;
  category: string;
  title: string;
  month: string;
  audience: string;
  cover: string;
  hero: string;
  images: string[];
  excerpt: string;
  content: string;
  highlights: string[];
  is_published: boolean;
  sort_order: number;
  created_at: string;
};

export type DashboardPartner = {
  id: string;
  name: string;
  logo_url: string;
  partner_type: "corporate" | "media" | "community";
  website_url: string | null;
  sort_order: number;
  is_published: boolean;
};

export type DashboardMember = {
  id: string;
  name: string;
  role_type: "executive" | "management" | "associate";
  position: string | null;
  department: string | null;
  photo_url: string | null;
  period: string | null;
  bio: string | null;
  social_url: string | null;
  sort_order: number;
};

export type DashboardResource = {
  id: string;
  slug: string;
  badge: string;
  category: string;
  title: string;
  month: string;
  audience: string;
  cover: string;
  hero: string;
  excerpt: string;
  content: string;
  highlights: string[];
  is_published: boolean;
  sort_order: number;
  created_at: string;
};

export async function getProgramsList(limit = 50): Promise<DashboardProgram[]> {
  const { data, error } = await supabase
    .from("programs")
    .select("*")
    .eq("is_published", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false })
    .limit(limit);
  if (error) return [];
  return (data as DashboardProgram[]) ?? [];
}

export async function getProgramBySlug(slug: string): Promise<DashboardProgram | null> {
  const { data, error } = await supabase
    .from("programs")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();
  if (error || !data) return null;
  return data as DashboardProgram;
}

export async function getPartnersList(partnerType?: "corporate" | "media" | "community"): Promise<DashboardPartner[]> {
  let query = supabase
    .from("partners")
    .select("*")
    .eq("is_published", true)
    .order("sort_order", { ascending: true })
    .order("name", { ascending: true });
  if (partnerType) query = query.eq("partner_type", partnerType);
  const { data, error } = await query;
  if (error) return [];
  return (data as DashboardPartner[]) ?? [];
}

export async function getMembersList(roleType?: "executive" | "management" | "associate"): Promise<DashboardMember[]> {
  let query = supabase
    .from("members")
    .select("*")
    .order("sort_order", { ascending: true })
    .order("name", { ascending: true });
  if (roleType) query = query.eq("role_type", roleType);
  const { data, error } = await query;
  if (error) return [];
  return (data as DashboardMember[]) ?? [];
}

export async function getResourcesList(limit = 50): Promise<DashboardResource[]> {
  const { data, error } = await supabase
    .from("resources")
    .select("*")
    .eq("is_published", true)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false })
    .limit(limit);
  if (error) return [];
  return (data as DashboardResource[]) ?? [];
}

export async function getResourceBySlug(slug: string): Promise<DashboardResource | null> {
  const { data, error } = await supabase
    .from("resources")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();
  if (error || !data) return null;
  return data as DashboardResource;
}
