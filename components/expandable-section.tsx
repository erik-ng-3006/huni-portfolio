'use client'

import React, { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'

interface ExpandableSectionProps {
  title: string
  children: React.ReactNode
  defaultExpanded?: boolean
  className?: string
}

export default function ExpandableSection({
  title,
  children,
  defaultExpanded = false,
  className
}: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  return (
    <div className={cn('mb-4 rounded-lg border', className)}>
      <h3>
        <button
          className='flex w-full items-center justify-between p-4 text-left font-bold'
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-controls={`content-${title.replace(/\s+/g, '-').toLowerCase()}`}
        >
          <span>{title}</span>
          {isExpanded ? (
            <ChevronUpIcon className='h-5 w-5' aria-hidden='true' />
          ) : (
            <ChevronDownIcon className='h-5 w-5' aria-hidden='true' />
          )}
        </button>
      </h3>
      <div
        id={`content-${title.replace(/\s+/g, '-').toLowerCase()}`}
        className={cn(
          'overflow-hidden transition-all duration-300 ease-in-out',
          isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className='border-t p-4'>{children}</div>
      </div>
    </div>
  )
}
