import MDXContent from '@/components/mdx-content'
import { getPostBySlug, getPosts } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

export const generateStaticParams = async () => {
  const posts = await getPosts()

  const slugs = posts.map(post => ({ slug: post.slug }))

  return slugs
}
const Post = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params

  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { metadata, content } = post

  const { title, date, image, author } = metadata

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <Link
          href='/posts'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to posts</span>
        </Link>
        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
            />
          </div>
        )}
        <header>
          <h1 className='title'>{title}</h1>
          <p className='mb-3 text-xs text-muted-foreground'>
            {author} / {formatDate(date ?? '')}
          </p>
        </header>
        <main className='prose mt-16 dark:prose-invert'>
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  )
}

export default Post
