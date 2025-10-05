// queries/articles.ts
import type { SupabaseClient } from "@supabase/supabase-js";

// Liste
export function q_articles(client: SupabaseClient) {
  return client
    .from("articles")
    .select("*")
    .lte("date_published", new Date().toISOString())
    .order("date_published", { ascending: false });
}

// Détail par slug
export function q_articleBySlug(client: SupabaseClient, slug: string) {
  return client
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .lte("date_published", new Date().toISOString())
    .single();
}
