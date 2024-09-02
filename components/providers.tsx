'use client'

import React from 'react'

import { ThemeProvider, useTheme } from 'next-themes'
import { Toaster } from 'sonner'

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      enableSystem
      attribute='class'
      defaultTheme='system'
      disableTransitionOnChange
    >
      {children}
      <ToasterProvider />
    </ThemeProvider>
  )
}

const ToasterProvider = () => {
  const { resolvedTheme } = useTheme()
  return (
    <Toaster
      position='top-right'
      theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
    />
  )
}

export default Providers
