import PageHeader from "@/components/page-header";
import React from "react";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { prefetchQuery } from "@supabase-cache-helpers/postgrest-react-query";
import { supabaseServer } from "@/lib/supabase-server";
import { q_articles } from "@/queries/article";
import ArticlesList from "./articlesList";

export const revalidate = 60;

async function Page() {
  const supabase = await supabaseServer();
  const qc = new QueryClient();
  await prefetchQuery(qc, q_articles(supabase)); // remplit le cache serveur

  return (
    <main>
      <PageHeader
        title="Actualités"
        description="Suivez nos dernières nouvelles et histoires inspirantes"
      />
      <div className="box-container grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <HydrationBoundary state={dehydrate(qc)}>
          <ArticlesList />
        </HydrationBoundary>
      </div>
    </main>
  );
}

export default Page;
