// app/blog/ArticlesList.tsx  (Client Component)
"use client";
import Link from "next/link";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import  useSupabaseBrowser  from "@/providers/supabase-browser";
import { q_articles } from "@/queries/article";

export default function ArticlesList() {
  const supabase = useSupabaseBrowser();
  const { data } = useQuery(q_articles(supabase),{staleTime: 60 * 1000,}); // récupère le cache hydraté

  return (
    <div className="mt-8 space-y-8">
      {data?.map((a) => (
        <article key={a.slug}>
          <Link href={`/blog/${a.slug}`} className="text-2xl font-semibold hover:underline">
            {a.title}
          </Link>
          <p className="text-sm text-zinc-500">
            {a.date_published ? new Date(a.date_published as any).toLocaleDateString() : ""}
          </p>
          {a.preview_image && <img src={a.preview_image as string} alt="" className="my-3 rounded-lg" />}
          <p>{a.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
