import React from 'react'

interface LayoutType {
  children: React.ReactNode
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      marquee: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export default function Layout ({ children }: LayoutType) {
  return (
    <div>
      <marquee>
        Inserte publicidad aqui
      </marquee>
      {children}
    </div>
  )
}
