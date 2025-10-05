import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

function HeroCarousel({items}:{items:React.ReactNode[]}) {
  return (
    <Carousel  className='w-full' opts={{align: "center"}} plugins={[Autoplay({delay: 7000})]}>
        <CarouselContent>
            {items.map((child, id)=>
            <CarouselItem className='basis-full' key={id}>{child}</CarouselItem>)}
        </CarouselContent>
    </Carousel>
  )
}

export default HeroCarousel