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
            className='relative grayscale transition-all duration-300 hover:grayscale-0'
          >
            <Link href={`/projects/${project.slug}`}>
              {project.image && (
                <div className='relative h-72 w-full overflow-hidden bg-muted sm:h-60'>
                  <Image
                    src={project.image}
                    alt={project.title || ''}
                    className='rounded-lg object-cover object-center transition-all hover:blur-sm'
                    layout='fill'
                  />
                </div>
              )}
              <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center text-white opacity-0 transition-opacity duration-300 hover:opacity-100'>
                <h2 className='text-xl'>{project.title}</h2>
                <p className='mt-2 text-sm'>{project.summary}</p>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Projects
