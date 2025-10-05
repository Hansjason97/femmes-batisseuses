// app/blog/[slug]/page.tsx (Server Component)
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { prefetchQuery } from "@supabase-cache-helpers/postgrest-react-query";
import { supabaseServer } from "@/lib/supabase-server";
import { q_articleBySlug } from "@/queries/article";
import ArticleClient from "./articleClient";

export const revalidate = 60;

export async function generateStaticParams() {
  // build params côté serveur (optionnel) – tu peux aussi le zapper et laisser ISR
  return [];
}

export default async function Page({ params }: { params: { slug: string } }) {
  const supabase = supabaseServer();
  const qc = new QueryClient();
  const query = q_articleBySlug(await supabase, params.slug);
  const { data } = await query; // pour 404 si besoin
  if (!data) return notFound();

  await prefetchQuery(qc, query);
  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <ArticleClient slug={params.slug} />
    </HydrationBoundary>
  );
}
