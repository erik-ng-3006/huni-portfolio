import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import React, { JSX } from 'react'
import { highlight } from 'sugar-high'
import Counter from '@/components/counter'
import Alert from './alert'
import Quiz from './quiz'
import ExpandableSection from './expandable-section'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
//import SchemaVisualizer from './schema-visualizer'
//import InteractiveCodeSnippet from './interactive-code-snippet'
function Code({ children, ...props }: any) {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

const components = {
  code: Code,
  Counter,
  Alert,
  Quiz,
  ExpandableSection,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
  //SchemaVisualizer,
  //InteractiveCodeSnippet
}

const MDXContent = (props: JSX.IntrinsicAttributes & MDXRemoteProps) => {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}

export default MDXContent
