'use client'

import { useState } from 'react'

interface LikeType {
  id: number;
}

export function LikeButton ({ id }: LikeType) {
  const [liked, setLiked] = useState(false)

  return (
    <button onClick={() => { setLiked(!liked) }}>
      {liked ? '♥' : '♡'}
    </button>
  )
}
