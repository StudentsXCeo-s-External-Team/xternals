export type NewsItem = {
  slug: string;
  category: string;
  title: string;
  date: string;
  author?: string;
  cover: string;
  hero: string;
  images: string[];
  excerpt: string;
  content: string;
};

// Static news data — kept as fallback only.
// Real content is managed via the dashboard (sxcexternal-dashboard).
export const NEWS: NewsItem[] = [];
