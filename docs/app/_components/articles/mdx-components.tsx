import { ReactNode } from 'react'

interface HeadingProps {
  children: ReactNode
  id?: string
}

function createHeading(level: number) {
  const Heading = ({ children, ...props }: HeadingProps) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements
    
    // Generate ID from children text if not provided
    let id = props.id
    if (!id && typeof children === 'string') {
      id = children
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '')
    }
    
    return (
      <Tag id={id} {...props}>
        {children}
      </Tag>
    )
  }
  
  Heading.displayName = `Heading${level}`
  return Heading
}

export const mdxComponents = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
}
