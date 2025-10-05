// app/blog/[slug]/ArticleClient.tsx (Client Component)
"use client";
import { getSupabaseBrowserClient } from "@/providers/supabase-browser";
import { q_articleBySlug } from "@/queries/article";
import { Article } from "@/types/types";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import { useMemo } from "react";

export default function ArticleClient({ slug }: { slug: string }) {
  const supabase = getSupabaseBrowserClient();
    const query = useMemo(() =>q_articleBySlug(supabase, slug), [supabase]);
  const { data: a } = useQuery<Article>(query);
  if (!a) return <div>Article introuvable</div>;

  return (
    <article className="box-container prose dark:prose-invert flex flex-col gap-7 sm:gap-10 items-center justify-center">
      <div className="flex flex-col gap-3 sm:gap-5">
        <h1 className="text-center">{a.title}</h1>
        {a.preview_image && <img src={a.preview_image} className="w-full aspect-video h-auto object-cover rounded-sm sm:rounded-lg" />}
      </div>
      <p className="text-sm text-zinc-500">
        {`Publié le ${new Date(a.date_published).toLocaleDateString()}`}
      </p>
      <div dangerouslySetInnerHTML={{ __html: a.content as string }} />
    </article>
  );
}
