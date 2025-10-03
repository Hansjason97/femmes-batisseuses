'use client'
import { Testimonial } from '@/types/types'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import Autoplay from "embla-carousel-autoplay"

function Testimonials({items}:{items:Testimonial[]}) {
  return (
    <Carousel className='w-full' opts={{align: "center"}} plugins={[Autoplay({delay: 5000})]}>
        <CarouselContent>
            {items.map((item, id)=>(
                <CarouselItem key={id} className='basis-full flex flex-col gap-4 items-center justify-center'>
                    <p className='leading-[150%] text-[20px] sm:text-[24px] lg:text-[28px] text-white font-medium'>{`"${item.message}"`}</p>
                    <span className='text-base sm:text-lg lg:text-xl text-gray-100'>{`${item.name}, ${item.country}`}</span>
                    {item.img && <img src={item.img} alt={item.name} className='w-full max-w-[60px] sm:max-w-[80px] lg:max-w-[100px] aspect-square h-auto object-cover rounded-full'/>}
                </CarouselItem>
            ))}
        </CarouselContent>
    </Carousel>
  )
}

export default Testimonials