// app/blog/ArticlesList.tsx  (Client Component)
"use client";
import ArticleCard, { ArticleSkeletonCard } from "@/components/article-card";
import { getSupabaseBrowserClient } from "@/providers/supabase-browser";
import { q_articles } from "@/queries/article";
import { Article } from "@/types/types";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import { useMemo } from 'react';

export default function ArticlesList() {
  const supabase = getSupabaseBrowserClient();
  const query = useMemo(() => q_articles(supabase), [supabase]);
  const { data, isSuccess, isLoading } = useQuery<Article[]>(query, { staleTime: 60 * 1000 }); // récupère le cache hydraté

  return (
    <>
    {isLoading && Array.from({length: 8}).map((_,id)=>(<ArticleSkeletonCard key={id}/>))}
      {isSuccess && data && data.map((a) => (
        <ArticleCard key={a.slug} href={`/blog/${a.slug}`} img={a.preview_image??"/images/no-article.webp"} title={a.title}/>
      ))}
    </>
  );
}
