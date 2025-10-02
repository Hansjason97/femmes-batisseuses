'use client'
import React from "react";
import NavLink from "./navLink";
import Link from "next/link";
import { navbarItems } from "@/data/data";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  return (
    <div className="h-[72px] w-full sticky top-0 border-b flex items-center justify-center bg-background">
      <nav className="flex items-center justify-between component">
        <Link href={"/"}>
          <img src={"/images/logo.webp"} className="h-8 w-auto" />
        </Link>
        <div className="hidden lg:flex gap-2 items-center">
          {navbarItems.map(({ href, children }, id) => (
            <NavLink key={id} href={href}>
              {children}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="flex lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button size={"icon"} variant={"outline"}>
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>
                    <Link href={"/"}><img src={"/images/logo.webp"} className="h-6 w-auto"/></Link>
                  </SheetTitle>
                  <SheetDescription/>
                </SheetHeader>
                {navbarItems.map((item, id)=>(
                  <Link key={id} href={item.href}>
                    <SheetClose className={cn("w-full px-4 flex items-center h-14 cursor-pointer text-sm capitalize font-medium", pathname===item.href && "bg-primary-400 text-white")}>{item.children}</SheetClose>
                  </Link>
                ))}
              </SheetContent>
            </Sheet>
          </span>
          <Button variant={"primary"}>{"Faire un Don"}</Button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
