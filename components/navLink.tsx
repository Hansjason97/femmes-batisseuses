'use client'
import { cn } from '@/lib/utils';
import { Navigation } from '@/types/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavLink({children, href}:Navigation) {

    const pathname = usePathname();
    const isActive = pathname === href;

  return (
    <Link href={href} className='relative group'>
        <button className={cn("px-4 py-2 text-sm font-medium text-text-default group-hover:bg-primary-50 transition-all duration-300 ease-out cursor-pointer", isActive && "font-bold text-primary-400")}>{children}</button>
        <span className={cn("absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-primary-400", isActive && "w-full")}/>
    </Link>
  )
}

export function MobileLink({children, href}:Navigation) {
  const pathname = usePathname();
    const isActive = pathname === href
  return (
    <Link href={href} className={cn("w-full px-4 flex items-center h-14 cursor-pointer text-sm capitalize font-medium", isActive && "bg-primary-400 text-white")}>{children}</Link>
  )
};

export function FooterLink({children, href}:Navigation) {
  const pathname = usePathname();
    const isActive = pathname === href;
  return (
    <Link href={href} className={cn("text-sm font-medium text-white transition-all duration-150 ease-out hover:text-secondary-100", isActive && "text-secondary-400 hover:text-secondary-500")}>{children}</Link>
  )
}

export default NavLink