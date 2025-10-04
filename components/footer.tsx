import React from 'react'
import Cta from './cta'
import Link from 'next/link'
import { navbarItems, socials } from '@/data/data'
import { FooterLink } from './navLink'
import NewsletterForm from './newsletterForm'

function Footer() {
  return (
    <div>
      <Cta/>
      <footer className='bg-secondary-900 pt-10 sm:pt-12 md:pt-15'>
        <div className='mx-auto w-full max-w-7xl px-7 min-[1308px]:px-0 flex flex-wrap gap-8 justify-between'>
          {/**1 */}
          <div className='w-full max-w-[312px] flex flex-col gap-3'>
            <Link href={"/"}><img src={"/images/logo_white.png"} className='h-12 w-auto'/></Link>
            <p className='text-sm text-gray-100'>{"Un réseau panafricain qui rassemble, forme et promeut les femmes leaders et bâtisseuses pour un développement inclusif, durable et équitable"}</p>
            <div className='flex flex-col gap-1 text-white'>
              <span>{"Nous suivre"}</span>
              <ul className='flex flex-wrap gap-2'>
                {socials.map((social, id)=>(
                  <li key={id}><Link href={social.href} className='size-8 flex items-center justify-center rounded hover:bg-white/10 transition-all duration-150 ease-out'><img src={social.icon} className='h-6 w-auto'/></Link></li>
                ))}
              </ul>
            </div>
          </div>
          {/**2 */}
          <div className='w-full max-w-[312px] flex flex-col gap-3 text-white'>
            <h5 className='text-base sm:text-lg font-semibold'>{"Liens rapides"}</h5>
            <ul className='flex flex-col gap-2'>
              {navbarItems.map((item, id)=>(
                <li key={id}><FooterLink {...item}/></li>
              ))}
            </ul>
          </div>
          {/**3 */}
          <div className='w-full max-w-[312px] flex flex-col gap-3 text-white'>
            <NewsletterForm/>
            <div className='flex flex-col gap-2'>
              <span className='text-base font-semibold'>{"Assemblée générale"}</span>
              <p className='text-sm text-gray-200'>{"1234 Innovation Drive Suite 567 Cityville, State 89012 Country"}</p>
            </div>
            <div className='flex flex-col gap-2'>
              <span className='text-base font-semibold'>{"Email"}</span>
              <a href='mailto:contact@femmesbatisseuses.com' className='text-sm text-gray-200 hover:text-secondary-100'>{"contact@femmesbatisseuses.com"}</a>
            </div>
            <div className='flex flex-col gap-2'>
              <span className='text-base font-semibold'>{"Téléphone"}</span>
              <a href='tel:+237697890088' className='text-sm text-gray-200 hover:text-secondary-100'>{"+237 697 890 088"}</a>
            </div>
          </div>
        </div>
        <div className='mx-auto w-full max-w-7xl px-7 min-[1308px]:px-0 py-6 text-center text-sm text-gray-200'>
          {"© 2025 Réseau des Femmes Bâtisseuses de l’Afrique de Demain. Tous droits réservés."}
        </div>
      </footer>
    </div>
  )
}

export default Footer