import { PostMetaData } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const Posts = ({ posts }: { posts: PostMetaData[] }) => {
  return (
    <ul className='flex flex-col gap-8'>
      {posts.map(post => {
        return (
          <li
            key={post.slug}
            className='transform rounded-xl transition duration-300 hover:scale-105'
          >
            <Link
              href={`/posts/${post.slug}`}
              className='flex flex-col justify-between gap-x-4 gap-y-1 sm:flex-row'
            >
              <div className='max-w-lg'>
                <p className='text-lg font-semibold'>{post.title}</p>
                <p className='mt-1 line-clamp-2 text-sm font-light text-muted-foreground'>
                  {post.summary}
                </p>
              </div>
              {post.date && (
                <p className='mt-1 text-sm font-light'>
                  {formatDate(post.date)}
                </p>
              )}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Posts
