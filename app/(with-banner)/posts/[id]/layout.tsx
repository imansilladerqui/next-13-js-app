import Link from 'next/link'
import React from 'react'

interface ParamsType{
    params: {
      id: number
    }
    children: React.ReactNode
}

const fetchSinglePost = (id:number) => {
  // Incremental static regeneration

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60
      }
    })
    .then(res => res.json())
}

export default async function PostLayout ({ params, children }:ParamsType) {
  const { id } = params
  const post = await fetchSinglePost(id)

  return (
    <article key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link href={`posts/${id}/comments`}> Ver comentarios </Link>
      {children}
    </article>
  )
}
