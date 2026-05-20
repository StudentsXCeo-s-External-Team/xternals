const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL ?? "https://sxcexternal-dashboard.vercel.app";

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

type ApiResponse<T> = {
  success: boolean;
  data: T[];
  pagination?: { page: number; limit: number; total: number; totalPages: number };
};

async function get<T>(path: string): Promise<T[]> {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(`${DASHBOARD_URL}${path}`, {
      cache: "no-store",
      signal: controller.signal,
    });
    clearTimeout(timer);
    if (!res.ok) return [];
    const json: ApiResponse<T> = await res.json();
    return json.success ? (json.data ?? []) : [];
  } catch {
    return [];
  }
}

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
  return get<DashboardNews>(`/api/news?limit=${limit}`);
}

export async function getNewsBySlug(slug: string): Promise<DashboardNews | null> {
  const items = await get<DashboardNews>(`/api/news?slug=${encodeURIComponent(slug)}`);
  return items[0] ?? null;
}

export async function getEventsList(limit = 20): Promise<DashboardEvent[]> {
  return get<DashboardEvent>(`/api/events?limit=${limit}`);
}
