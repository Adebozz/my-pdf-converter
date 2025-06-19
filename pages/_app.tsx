'use client'

import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import { ReactNode } from 'react'
import '../styles/globals.css' 

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        {/* This ensures Chakra reads the stored color mode */}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </body>
    </html>
  )
}
