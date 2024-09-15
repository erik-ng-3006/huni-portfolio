import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import React, { JSX } from 'react'
import { highlight } from 'sugar-high'
import Counter from '@/components/counter'
import Alert from './alert'
import Quiz from './quiz'
//import SchemaVisualizer from './schema-visualizer'
import ExpandableSection from './expandable-section'
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
  //SchemaVisualizer,
  ExpandableSection
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
