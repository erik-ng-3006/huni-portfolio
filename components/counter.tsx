'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'

const Counter = () => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }
  return (
    <div className='flex items-center gap-3'>
      <Button onClick={decrement}>
        <MinusIcon />
      </Button>
      <p>Current vote: {count}</p>
      <Button onClick={increment}>
        <PlusIcon />
      </Button>
    </div>
  )
}

export default Counter
