'use client'
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Cross2Icon } from '@radix-ui/react-icons'
import Posts from './posts'
import { PostMetaData } from '@/lib/posts'
const PostsWithSearch = ({ posts }: { posts: PostMetaData[] }) => {
  const [query, setQuery] = React.useState('')
  const isFiltered = query.length > 0
  const filteredPosts = posts.filter(post => {
    return post.title?.toLowerCase().includes(query.toLowerCase())
  })
  const resetFilter = () => {
    setQuery('')
  }
  return (
    <div>
      <div className='mb-12 flex items-center gap-3'>
        <Input
          type='text'
          placeholder='Search posts...'
          className='h-9 w-full sm:w-1/2'
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        {isFiltered && (
          <Button
            size='sm'
            variant='secondary'
            onClick={resetFilter}
            className='h-8 animate-bounce px-2 hover:animate-none focus:animate-none lg:px-3'
          >
            Reset
            <Cross2Icon className='ml-2 h-4 w-4' />
          </Button>
        )}
      </div>
      <Posts posts={filteredPosts} />
    </div>
  )
}

export default PostsWithSearch
