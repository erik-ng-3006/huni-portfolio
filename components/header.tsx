import Link from 'next/link'
import React from 'react'
import ThemeToggle from './theme-toggle'

const navigation = ['Posts', 'Projects', 'Contact']
const Header = () => {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
      <nav className='container flex max-w-3xl items-center justify-between'>
        <Link href='/' className='font-serif text-2xl font-bold'>
          Huni
        </Link>
        <ul className='flex items-center gap-6 text-sm font-light text-muted-foreground'>
          {navigation.map(nav => (
            <li
              key={nav}
              className='text-md font-semibold transition-colors hover:text-blue-600'
            >
              <Link href={`/${nav.toLowerCase()}`}>{nav}</Link>
            </li>
          ))}
        </ul>
        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Header
