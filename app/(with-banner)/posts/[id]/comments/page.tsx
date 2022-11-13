import Image from 'next/image'

interface CommentType {
  id: number;
  name: string;
  email: string;
  body: string;
}

interface ParamsType{
    params: {
      id: number
    }
}

const fetchPostComments = async (id:number) => {
  await new Promise(resolve => setTimeout(resolve, 3000))
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    {
      next: {
        revalidate: 60
      }
    })
    .then(res => res.json())
    .catch(() => { throw new Error('Error al cargar los comentarios') })
}

export default async function CommentPage ({ params }:ParamsType) {
  const { id } = params
  const comments = await fetchPostComments(id)

  return (
    <ul style={{ fontSize: '12px' }}>
      {comments.map((comment:CommentType) => (
        <li key={comment.id}>
          <Image width='50' height='50' alt={comment.name} src={`https://avatars.dicebear.com/api/pixel-art-neutral/${comment.email}.svg`} />
          <h4>{comment.name}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>

  )
}
