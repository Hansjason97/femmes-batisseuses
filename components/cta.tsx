import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

function Cta() {
  return (
    <section className='py-6 sm:py-8 md:py-10 lg:py-12 xl:py-15'>
        <div className='mx-auto w-full max-w-7xl px-7 py-8 sm:py-10 md:py-13 rounded-none min-[1304]:rounded-lg flex flex-col items-center gap-6 bg-gradient-to-b from-primary-50 to-primary-100'>
            <div className='flex flex-col gap-3 items-center justify-center text-center'>
                <h2 className='text-primary-400'>{"Vous souhaitez contribuer à l'avenir de l'Afrique"}</h2>
                <p className='text-base md:text-lg'>{"Vous pouvez rejoindre notre réseau ou soutenir notre initiative"}</p>
            </div>
            <span className='flex flex-wrap gap-3'>
                <Link href="#"><Button size={"lg"} variant={"primary"}>{"Rejoindre le réseau"}</Button></Link>
                <Link href="#"><Button size={"lg"} variant={"secondary"}>{"Faire un don"}</Button></Link>
            </span>
        </div>
    </section>
  )
}

export default Cta