import Projects from '@/components/projects'
import { getProjects } from '@/lib/projects'
import React from 'react'

const ProjectPage = async () => {
  const projects = await getProjects()

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Projects</h1>
        <Projects projects={projects} />
      </div>
    </section>
  )
}

export default ProjectPage
