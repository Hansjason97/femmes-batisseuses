import { HeaderProps } from '@/types/types'
import React from 'react'

function PageHeader({title, description, img}:HeaderProps) {
  return (
    <section className='bg-primary-50 py-10 sm:py-12 md:py-15 relative overflow-hidden flex flex-col gap-6 sm:gap-8 items-center justify-center text-center'>
        <h2 className='z-10 text-primary-400 max-w-2xl'>{title}</h2>
        {description && <p className='z-10 max-w-2xl text-text-gray tracking-[-2%] leading-[125%] text-[14px] sm:text-[16px]'>{description}</p>}
        <img src={img ?? "/images/femmes.webp" } className='absolute top-0 left-0 w-full h-full object-cover opacity-5 mix-blend-luminosity'/>
    </section>
  )
}

export default PageHeader