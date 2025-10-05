import { ReactNode } from "react";
import { SupabaseClient } from '@supabase/supabase-js'
import type { Database } from '@/types/database'

export type TypedSupabaseClient = SupabaseClient<Database>


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
    img?: string;
    title: string;
    href: string;
}

export type HeaderProps = {
    title: string;
    description?: string;
    img?: string;
}

export type Article = {
          content: string
          date_published: string
          date_updated: string
          excerpt: string
          id: string
          preview_image: string | null
          slug: string
          title: string
        };