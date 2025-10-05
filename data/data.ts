import { ArticlePreview, Navigation, Testimonial } from "@/types/types";
import { ReactNode } from "react";

export const navbarItems:Navigation[] = [
    {
        href: "/",
        children: "Accueil"
    },
    {
        href: "/a-propos",
        children: "À Propos"
    },
    {
        href: "/presence",
        children: "Notre Présence"
    },
    {
        href: "/projets",
        children: "Projets"
    },
    {
        href: "/activites",
        children: "Activités"
    },
    {
        href: "/blog",
        children: "Actualités"
    },
    {
        href: "/contact",
        children: "Contact"
    }
];


export const settings = {
    title: "Réseau des Femmes Bâtisseuses de l'Afrique de Demain",
    defaultTitle: "Le Réseau des Femmes Bâtisseuses de l'Afrique de Demain - Promouvoir le leadership féminin en Afrique"
}

export const stats:{amount:number, title:string}[] = [
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

export const keyActions:{title:string, description:string}[] = [
    {
        title: "Renforcement des capacités",
        description: "Formations, leadership, mentorat"
    },
    {
        title: "Entrepreneuriat & Innovation",
        description: "Accompagnement des femmes entrepreneures"
    },
    {
        title: "Plaidoyer pour l'égalité",
        description: "Sensibilisation, lobbying auprès des institutions"
    },
    {
        title: "Projets communautaires",
        description: "Santé, éducation, environnement, inclusion"
    },
];

export const reviews:Testimonial[] = [
    {
        message: "Grâce au réseau, j’ai pu développer mon projet entrepreneurial et trouver des partenaires stratégiques. ",
        name: "Amina",
        country: "Cameroun"
    },
    {
        message: "J'ai réussi à décrocher un financement pour mon projet et des partenaires solides pour m'accompagner dans ma quête",
        name: "Rapsatou Gueye",
        country: "Sénégal"
    },
];

export const dataArticles:ArticlePreview[] = [
    {
        title: "Lancement du Think Tank International des Femmes Bâtisseuses",
        href: "#",
        img: "/images/articles/one.webp"
    },
    {
        title: "Partenariat avec l’Union Africaine pour la promotion du leadership féminin",
        href: "#",
        img: "/images/articles/two.webp"
    },
    {
        title: "Renforcement des capacités pour 200 femmes entrepreneures au Sénégal",
        href: "#",
        img: "/images/articles/three.webp"
    },
];

export const socials:{icon:string, href:string}[] = [
    {
        icon: "/images/icons/facebook.svg",
        href: "#"
    },
    {
        icon: "/images/icons/linkedin.svg",
        href: "#"
    },
    {
        icon: "/images/icons/instagram.svg",
        href: "#"
    },
]; 

export const partners:{src: string, name: string}[] = [
    {src: "/images/partners/bds.png", name: "BDS Group"},
    {src: "/images/partners/kmertech.png", name: "KmerTech"},
    {src: "/images/partners/ise.png", name: "Ecole Internationale des Entrepreneurs"},
    {src: "/images/partners/africa-startup-studio.png", name: "Africa Startup Studio"},
];
