import { Navigation } from "@/types/types";

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
        href: "/evenements",
        children: "Évènements"
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
    defaultTitle: "Le Réseau des Femmes Bâtisseuses de l'Afrique de Demain - "
}