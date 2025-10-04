import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "À propos du Réseau qui unit les femmes leaders",
    description: "Un mouvement panafricain qui unit les femmes leaders et entrepreneures pour bâtir un avenir équitable, durable et inclusif."
}

export default function Layout({children}:{children: React.ReactNode}) {
  return (
    <div>{children}</div>
  )
}