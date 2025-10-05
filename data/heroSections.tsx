import { Button } from "@/components/ui/button";
import { Globe, Heart, Users } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

    function MainCarouselItem ():ReactNode{
    return (
        <div className="relative overflow-hidden">
            <div className="box-container grid grid-cols-1 gap-7 lg:grid-cols-3 lg:gap-8 xl:gap-10">
            <div className="z-10 flex flex-col gap-5 sm:gap-7 md:gap-8 col-span-1 lg:col-span-2">
                <div className="flex flex-col gap-2">
                <h1><span className="text-primary-400">{"Bâtissons ensemble "}</span>{"l'Afrique de Demain"}</h1>
                <p className="text-text-gray subtitle-text">{"Un réseau panafricain qui rassemble, forme et promeut les femmes leaders et bâtisseuses pour un développement inclusif, durable et équitable."}</p>
                </div>
                <div className="flex flex-row gap-3 flex-wrap">
                <Link href={"/"}><Button size={"lg"} variant={"primary"}>{"Rejoindre le réseau"}</Button></Link>
                <Link href={"/"}><Button size={"lg"} variant={"outline"}>{"Découvrir nos projets"}</Button></Link>
                </div>
            </div>
            <div className="flex w-full max-w-lg h-auto aspect-[4/3] relative">
                <div className="absolute top-1/2 right-0 translate-x-7 p-4 py-3 rounded-sm bg-white w-fit flex items-center gap-2 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
                    <Users size={16} className="text-primary-400"/><span className="text-sm font-semibold">{"+2500 Membres"}</span>
                </div>
                <div className="absolute bottom-0 left-2 translate-y-2 p-4 py-3 rounded-sm bg-white w-fit flex items-center gap-2 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
                    <Globe size={16} className="text-secondary-400"/><span className="text-sm font-semibold">{"+14 Pays"}</span>
                </div>
                <img src={"/images/woman.webp"} alt="hero" className="w-full h-full object-cover rounded-sm sm:rounded-md md:rounded-lg"/>
            </div>
            </div>
        </div>
    )
}


export const dataCarousel = [
    <MainCarouselItem/>
];