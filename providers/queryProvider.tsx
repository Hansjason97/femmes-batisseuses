'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

export const ReactQueryClientProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 5 * 60 * 1000,      // 5 min = pas de refetch tant que c’est “frais”
            gcTime: 30 * 60 * 1000,        // 30 min en cache avant purge
            refetchOnWindowFocus: false,   // ne pas refetch au focus onglet
            refetchOnReconnect: false,     // ni à la reconnexion réseau
            refetchOnMount: false,         // ne pas refetch au (re)mount si data en cache
            retry: 3,
          },
        },
      })
  )
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}