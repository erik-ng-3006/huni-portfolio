import React from 'react'
import authorImage from '@/public/images/authors/erik.jpg'
import Image from 'next/image'
const Intro = () => {
  return (
    <section className='mb-24 flex flex-col-reverse items-center gap-x-10 gap-y-4 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title animate-typing overflow-hidden whitespace-nowrap no-underline'>
          Hello, I'm Erik Nguyen.
        </h1>
        <p className='text-muted-foreground'>
          I'm a software engineer and a full stack developer. I'm passionate
          about building products that make a difference.
        </p>
      </div>
      <div className='relative'>
        <Image
          src={authorImage}
          alt='Erik Nguyen'
          width={175}
          height={175}
          className='flex-1 rounded-lg grayscale'
          priority
        />
      </div>
    </section>
  )
}

export default Intro
