import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

function Placeholder() {
  return (
    <div className='box-container flex flex-col gap-3 items-center text-center'>
        <h2>{"Page en construction"}</h2>
        <p className='text-text-gray'>{"Cette page est en construction pour l'instant"}<br/>{"N'hésitez pas à parcourir d'autres pages en attend."}</p>
        <Link href={"/"}><Button variant={"outline"}>{"Retour à l'accueil"}</Button></Link>
    </div>
  )
}

export default Placeholder