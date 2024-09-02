import React from 'react'
import Projects from './projects'
import { getProjects } from '@/lib/projects'
import Link from 'next/link'
const RecentProjects = async () => {
  const projects = await getProjects(2)
  return (
    <section className='pb-24'>
      <div>
        <h2 className='title mb-12'>Recent projects</h2>
        <Projects projects={projects} />
        <Link
          href='/projects'
          className='mt-8 inline-flex items-center gap-2 text-muted-foreground underline transition-colors hover:text-blue-600'
        >
          <span>All projects</span>
        </Link>
      </div>
    </section>
  )
}

export default RecentProjects
