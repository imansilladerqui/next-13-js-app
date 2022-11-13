import React from 'react'
import { Space_Grotesk } from '@next/font/google'
import { Navigation } from '../components/Navigation'
import '../styles/globals.css'

const font = Space_Grotesk({
  weight: ['400', '700'],
  subsets: ['latin']
})

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>My first app with Next 13</title>
      </head>
      <body className={font.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
