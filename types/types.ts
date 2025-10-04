import { ReactNode } from "react";


export type Navigation = {
    children: ReactNode;
    href: string;
}

export type Testimonial = {
    message: string;
    name: string;
    country: string;
    img?: string; 
}

export type ArticlePreview = {
    img: string;
    title: string;
    href: string;
}

export type HeaderProps = {
    title: string;
    description?: string;
    img?: string;
}