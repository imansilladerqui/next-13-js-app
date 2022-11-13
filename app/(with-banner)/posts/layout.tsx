import React from 'react'

interface Layout {
  children: React.ReactNode
}

export default function PostsLayout ({ children }: Layout) {
  return (
    <div>
      <small>Home &bull; Posts</small>
      {children}
    </div>
  )
}
