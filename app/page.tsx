import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {

  const stats:{amount:number, title:string}[] = [
    {
      amount: 14,
      title: "Pays représentés"
    },
    {
      amount: 2500,
      title: "Membres actifs"
    },
    {
      amount: 50,
      title: "Projets d'impact réalisés"
    }
  ];

  return (
    <main>
      {/**Hero */}
      <section id="hero" className="box-container grid grid-cols-1 gap-7 lg:grid-cols-3 lg:gap-8 xl:gap-10">
        <div className="flex flex-col gap-5 sm:gap-7 md:gap-8 col-span-1 lg:col-span-2">
          <div className="flex flex-col gap-2">
            <h1><span className="text-primary-400">{"Bâtissons ensemble "}</span>{"l'Afrique de Demain"}</h1>
            <p className="text-text-gray subtitle-text">{"Un réseau panafricain qui rassemble, forme et promeut les femmes leaders et bâtisseuses pour un développement inclusif, durable et équitable."}</p>
          </div>
          <div className="flex flex-row gap-3 flex-wrap">
            <Link href={"/"}><Button size={"lg"} variant={"primary"}>{"Rejoindre le réseau"}</Button></Link>
            <Link href={"/"}><Button size={"lg"} variant={"outline"}>{"Découvrir nos projets"}</Button></Link>
          </div>
        </div>
        <img src={"/images/hero.webp"} alt="hero" className="hidden lg:flex w-full max-w-lg h-auto aspect-[4/3] object-cover rounded-sm sm:rounded-md md:rounded-lg"/>
      </section>
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
    </main>
  );
}
