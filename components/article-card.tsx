import { ArticlePreview } from "@/types/types";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

function ArticleCard({ img, title, href }: ArticlePreview) {
  return (
    <div className="w-full max-w-sm mx-auto flex flex-col border">
      <Link href={href}>
        <img
          src={img ?? "/images/no-article.webp"}
          alt={title}
          className="w-full aspect-[4/3] h-auto object-cover"
        />
      </Link>
      <div className="flex flex-col gap-4 p-5">
        <h4 className="font-medium leading-[125%] text-[16px] md:text-[18px] line-clamp-2">
          {title}
        </h4>
        <Link href={href}>
          <Button>
            {"En savoir plus"}
            <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export function ArticleSkeletonCard() {
  return (
    <div className="w-full max-w-sm mx-auto flex flex-col border">
      <Skeleton className="w-full aspect-[4/3] h-auto object-cover" />
      <div className="flex flex-col gap-4 p-5">
        <Skeleton className="w-full h-12" />
        <Skeleton className="w-32 h-10" />
      </div>
    </div>
  );
}

export default ArticleCard;
