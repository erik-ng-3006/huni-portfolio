import React from 'react'
import Link from 'next/link'
import { ArrowLeftIcon } from '@radix-ui/react-icons'

const NotFound = () => {
  return (
    <section className='pb-24 pt-40'>
      <div className='min-h-full px-4 sm:px-6 sm:py-24 md:grid md:place-items-center'>
        <div className='mx-auto max-w-max'>
          <main className='sm:flex'>
            <p className='text-4xl font-bold tracking-tight text-muted-foreground'>
              404
            </p>
            <div className='sm:ml-6'>
              <div className='sm:border-l sm:border-gray-200 sm:pl-6'>
                <h1 className='text-3xl font-bold tracking-tight sm:text-5xl'>
                  Page not found
                </h1>
                <p className='mt-3 text-base text-muted-foreground'>
                  Sorry, we couldn’t find the page you’re looking for.
                </p>
              </div>
              <div className='sm:border-1 mt-10 flex space-x-3 sm:border-transparent'>
                <Link
                  href='/'
                  className='inline-flex items-center gap-3 text-muted-foreground transition-colors hover:text-blue-600'
                >
                  <ArrowLeftIcon className='h-5 w-5' />
                  <span>Go back home</span>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  )
}

export default NotFound
