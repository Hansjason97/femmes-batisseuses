// app/blog/[slug]/page.tsx (Server Component)
import { Button } from "@/components/ui/button";
import { supabaseServer } from "@/lib/supabase-server";
import { getSupabaseBrowserClient } from "@/providers/supabase-browser";
import { q_articleBySlug } from "@/queries/article";
import { prefetchQuery } from "@supabase-cache-helpers/postgrest-react-query";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { ArrowRight, HomeIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import ArticleClient from "./articleClient";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const supabase = getSupabaseBrowserClient();
  const { data: article } = await q_articleBySlug(supabase, params.slug);

  if (!article) {
    return {
      title: "Article introuvable",
      description: "Cet article n'existe pas.",
    };
  }

  return {
    title: article.title,
    description: article.excerpt || article.content?.slice(0, 160),
    openGraph: {
      title: article.title,
      description: article.excerpt || article.content?.slice(0, 160),
      images: article.preview_image ? [article.image] : [],
    },
  };
}

export default async function Page({ params }: { params: { slug: Promise<string>} }) {
  const slug = await params.slug;
  const supabase = supabaseServer();
  const qc = new QueryClient();
  const query = q_articleBySlug(await supabase, slug);
  const { data } = await query; // pour 404 si besoin
  if (!data)
    return (
      <div className="box-container flex flex-col gap-4 sm:gap-6 items-start justify-center">
        <div className="flex flex-col gap-2">
          <h1>{"Article Introuvable"}</h1>
          <p className="text-text-gray max-w-5xl">
            {
              "Nous sommes dans l'impossibilité de trouver cet article. Recharger la page ou retournez à notre actualité."
            }
          </p>
        </div>
        <div className="flex gap-3 items-center flex-wrap">
          <Link href="/blog">
            <Button size={"lg"} variant={"primary"}>
              {"Actualités"}
              <ArrowRight size={20}/>
            </Button>
          </Link>
          <Link href="/">
            <Button size={"lg"} variant={"outline"}>
              {"Accueil"}
              <HomeIcon size={20}/>
            </Button>
          </Link>
        </div>
      </div>
    );

  await prefetchQuery(qc, query);
  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <ArticleClient slug={slug} />
    </HydrationBoundary>
  );
}
