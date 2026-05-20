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
