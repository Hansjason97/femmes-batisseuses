'use client'
import ArticleCard from "@/components/article-card";
import HeroCarousel from "@/components/hero-carousel";
import Testimonials from "@/components/testimonials";
import { Button } from "@/components/ui/button";
import { dataArticles, keyActions, reviews, stats } from "@/data/data";
import { dataCarousel } from "@/data/heroSections";
import { getSupabaseBrowserClient } from "@/providers/supabase-browser";
import { q_articles } from "@/queries/article";
import { Article } from "@/types/types";
import { useQuery } from "@supabase-cache-helpers/postgrest-react-query";
import Link from "next/link";
import { useMemo } from "react";

export default function Home() {
  const supabase = getSupabaseBrowserClient();
    const query = useMemo(() => q_articles(supabase), [supabase]);
    const { data, isSuccess, isLoading } = useQuery<Article[]>(query, { staleTime: 60 * 1000 }); // récupère le cache hydraté

  return (
    <main>
      {/**Hero */}
      <HeroCarousel items={dataCarousel}/>
      {/**Partners */}
      <div className="w-full h-20 bg-gray-100 flex items-center justify-center">{"Partenaires"}</div>
      {/**About us */}
      <section id="about" className="box-container flex flex-col gap-7 lg:flex-row lg:justify-between">
        <img src="/images/about.webp" alt="about" className="w-full max-w-lg h-auto aspect-video object-cover rounded-sm sm:rounded-md md:rounded-lg" />
        <div className="w-full max-w-2xl flex flex-col gap-6">
          <h2 className="text-secondary-600">{"Qui nous sommes"}</h2>
          <p className="text-base md:text-lg">{"Le "}<strong>{"Réseau des Femmes Bâtisseuses de l'Afrique de Demain "}</strong>{"est une organisation panafricaine qui a pour mission de renforcer le leadership féminin, soutenir l’entrepreneuriat et promouvoir l’égalité des genres."}
          <br/>
          {"Présent dans plusieurs pays d’Afrique et dans la diaspora, le réseau offre un espace de collaboration, de solidarité et d’innovation sociale."}
          </p>
          <Link href={"/a-propos"}><Button>{"En savoir plus"}</Button></Link>
        </div>
      </section>
      {/**Stats */}
      <section id="statistics" className="px-7 w-full flex items-center justify-center">
        <div className="max-w-5xl w-full grid grid-cols-1 divide-x-0 divide-y lg:divide-y-0 lg:divide-x lg:grid-cols-3 bg-white">
          {stats.map((item, id)=>(
            <div key={id} className="py-3 px-5 flex flex-col gap-1 items-center justify-center min-h-[160px]">
              <span className="leading-[125%] tracking-[-2%] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold text-text-default">{item.amount}<span className="text-primary-400">{"+"}</span></span>
              <p className="text-[16px] sm:text-[18px] lg:text-[20px] leading-[150%] text-text-gray font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </section>
      {/**Projets */}
      <section id="projects" className="box-container flex flex-col-reverse gap-7 lg:flex-row lg:justify-between">
        <div className="w-full max-w-2xl flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="text-primary-400">{"Nos actions clés"}</h2>
            <p className="text-base md:text-lg">{"Nous œuvrons sur quatre piliers fondamentaux pour l'autonomisation des femmes africaines"}</p>
          </div>
          <div className="grid grid-cols-1 gap-2 divide-y">
            {keyActions.map((action, id)=>(
              <div key={id} className="flex flex-col gap-0.5 py-4">
                <h3 className="leading-[150%] text-[20px] sm:text-[22px] md:text-[24px] font-semibold">{action.title}</h3>
                <p className="text-text-gray">{action.description}</p>
              </div>
            ))}
          </div>
        </div>
        <img src="/images/about.webp" alt="about" className="w-full max-w-lg aspect-video lg:aspect-square h-auto object-cover rounded-sm sm:rounded-md md:rounded-lg" />
      </section>
      {/**Testimonials */}
      <section id="testimonials" className="bg-secondary-900 text-center relative overflow-hidden">
        <div className="box-container flex flex-col gap-6">
          <h2 className="z-10 text-primary-50">{"Témoignages & success stories"}</h2>
          <span className="z-10">
          <Testimonials items={reviews}/>
          </span>
        </div>
        <img src={"/images/flower.svg"} className="absolute top-full -translate-y-1/2 left-1/2 -translate-x-1/2 w-[80%] max-w-5xl h-auto opacity-10 select-none"/>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-secondary-900"/>
      </section>
      {/**Blog */}
      <section id="blog" className="box-container flex flex-col gap-6 items-center">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-primary-400">{"Dernières actualités"}</h2>
          <p className="text-base md:text-lg">{"Suivez l’actualité du réseau et restez informés sur toutes nos activités en cours"}</p>
        </div>
        <div className="w-full max-w-5xl grid grid-cols-1 gap-3 lg:grid-cols-3">
          {
            isSuccess && !!data &&
          data.map((article, id)=>(
            <ArticleCard key={id} href={`/blog/${article.slug}`} title={article.title} img={article.preview_image?? undefined}/>
          ))}
        </div>
      </section>
    </main>
  );
}
