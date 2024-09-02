import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

export type Project = {
  metadata: ProjectMetaData
  content: string
}

export type ProjectMetaData = {
  title?: string
  summary?: string
  date?: string
  image?: string
  author?: string
  slug: string
}

const rootDirectory = path.join(process.cwd(), 'content', 'projects')
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(filePath, { encoding: 'utf-8' })

    const { data, content } = matter(fileContents)

    return { metadata: { ...data, slug }, content }
  } catch (error) {
    return null
  }
}

export async function getProjects(limit?: number): Promise<ProjectMetaData[]> {
  const files = fs.readdirSync(rootDirectory)

  const projects = files
    .map(file => getProjectMetadata(file))
    .sort((a, b) => {
      if (new Date(a.date ?? '') < new Date(b.date ?? '')) {
        return 1
      } else {
        return -1
      }
    })
  if (limit) {
    return projects.slice(0, limit)
  }

  return projects
}

export function getProjectMetadata(fileName: string): ProjectMetaData {
  const slug = fileName.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, fileName)
  const fileContents = fs.readFileSync(filePath, { encoding: 'utf-8' })
  const { data } = matter(fileContents)

  return { ...data, slug }
}
