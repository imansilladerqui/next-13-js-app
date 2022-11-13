import React from 'react'
import Link from 'next/link'
import { LikeButton } from './likebutton'

interface PostType {
  id: number;
  title: string;
  body: string;
}

// getstaticprops

// const fetchPosts = () => {
//   return fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
// }

// getserversideprops

// const fetchPosts = () => {
//   return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })
//     .then(res => res.json())
// }

// Incremental static regeneration

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts',
    {
      next: {
        revalidate: 60
      }
    })
    .then(res => res.json())
}

export default async function PostsPage () {
  const posts = await fetchPosts()
  return (
    <section>
      {posts.map((post:PostType) => (
        <article key={post.id}>
          <Link href={`posts/${post.id}`}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </Link>
          <LikeButton id={post.id} />
        </article>
      ))}
    </section>
  )
}
