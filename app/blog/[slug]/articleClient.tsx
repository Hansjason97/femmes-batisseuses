// app/blog/[slug]/ArticleClient.tsx (Client Component)
"use client";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import useSupabaseBrowser from "@/providers/supabase-browser";
import { q_articleBySlug } from "@/queries/article";

export default function ArticleClient({ slug }: { slug: string }) {
  const supabase = useSupabaseBrowser();
  const { data: a } = useQuery(q_articleBySlug(supabase, slug));
  if (!a) return null;

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 prose dark:prose-invert">
      <h1>{a.title as string}</h1>
      <p className="text-sm text-zinc-500">
        Publié le {new Date(a.date_published as any).toLocaleDateString()}
        {a.date_updated && ` • MAJ ${new Date(a.date_updated as any).toLocaleDateString()}`}
      </p>
      {a.preview_image && <img src={a.preview_image as string} alt="" className="my-6 rounded-xl" />}
      <div dangerouslySetInnerHTML={{ __html: a.content as string }} />
    </article>
  );
}
