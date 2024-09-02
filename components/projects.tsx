import { ProjectMetaData } from '@/lib/projects'
import { formatDate } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = ({ projects }: { projects: ProjectMetaData[] }) => {
  return (
    <ul className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
      {projects.map(project => {
        return (
          <li
            key={project.slug}
            className='grayscale transition-all duration-300 hover:grayscale-0'
          >
            <h2>{project.title}</h2>
            <Link href={`/projects/${project.slug}`}>
              {project.image && (
                <div className='h-72 w-full overflow-hidden bg-muted sm:h-60'>
                  <Image
                    src={project.image}
                    alt={project.title || ''}
                    className='rounded-lg object-cover object-center transition-all'
                    fill
                  />
                </div>
              )}
              {/*  <div className='absolute inset-[-1px] rounded-lg'></div>
              <div className='absolute inset-x-0 bottom-0 translate-y-2 px-6 py-5'>
                <h2 className='title line-clamp-1 text-xl no-underline'>
                  {project.title}
                </h2>
                <p className='line-clamp-1 text-sm font-light text-muted-foreground'>
                  {project.summary}
                </p>
              </div>
              {project.date && (
                <p className='mt-1 text-sm font-light text-muted-foreground'>
                  {formatDate(project.date)}
                </p>
              )} */}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Projects
