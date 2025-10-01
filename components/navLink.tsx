'use client'
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
    href: string;
}

function NavLink({children, href}:Props) {

    const pathname = usePathname();
    const isActive = pathname === href;

  return (
    <Link href={href} className='relative group'>
        <button className={cn("px-4 py-2 text-sm font-medium text-text-default group-hover:bg-primary-50 transition-all duration-300 ease-out cursor-pointer", isActive && "font-bold text-primary-400")}>{children}</button>
        <span className={cn("absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-primary-400", isActive && "w-full")}/>
    </Link>
  )
}

export default NavLink