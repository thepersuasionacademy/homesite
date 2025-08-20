'use client'

import { useEffect, useState } from 'react'

interface TOCHeading {
  id: string
  text: string
  level: number
}

interface TOCSidebarProps {
  headings: TOCHeading[]
}

export function TOCSidebar({ headings }: TOCSidebarProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-100px 0px -66%',
        threshold: 0
      }
    )

    const headingElements = headings.map(heading => 
      document.getElementById(heading.id)
    ).filter(Boolean)

    headingElements.forEach(element => {
      if (element) observer.observe(element)
    })

    return () => {
      headingElements.forEach(element => {
        if (element) observer.unobserve(element)
      })
    }
  }, [headings])

  if (headings.length === 0) {
    return null
  }

  const getMarginClass = (level: number) => {
    switch (level) {
      case 1: return 'ml-0'
      case 2: return 'ml-0'
      case 3: return 'ml-4'
      case 4: return 'ml-8'
      case 5: return 'ml-12'
      case 6: return 'ml-16'
      default: return 'ml-0'
    }
  }

  return (
    <div className="toc-sidebar sticky top-20 col-start-1 row-span-1 mr-8 ml-auto hidden h-[calc(100vh-5rem)] max-w-md xl:block">
      <div className="flex max-h-[calc(100vh-8rem)] flex-col overflow-y-auto">
        <div className="flex flex-col gap-2 px-4">
          <span className="text-lg font-medium" style={{ color: 'var(--foreground)' }}>
            Table of Contents
          </span>
          
          {/* Main headings */}
          <ul className="flex list-none flex-col gap-y-2">
            {headings.filter(h => h.level <= 2).map((heading) => (
              <li
                key={heading.id}
                className={`text-sm ${getMarginClass(heading.level)} ${
                  activeId === heading.id 
                    ? 'text-foreground' 
                    : 'text-foreground/60'
                }`}
                style={{ 
                  color: activeId === heading.id 
                    ? 'var(--foreground)' 
                    : 'var(--muted-foreground)'
                }}
              >
                <a
                  href={`#${heading.id}`}
                  className="list-none underline decoration-transparent underline-offset-[3px] transition-colors duration-200 hover:decoration-inherit"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById(heading.id)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>

          {/* Subheadings section */}
          {headings.filter(h => h.level > 2).length > 0 && (
            <>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
                <span className="text-xs font-medium" style={{ color: 'var(--muted-foreground)' }}>
                  Subheadings
                </span>
                <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
              </div>
              
              <div 
                className="rounded-md border p-2"
                style={{ borderColor: 'var(--border)', background: 'var(--muted/50)' }}
              >
                <ul className="flex list-none flex-col gap-y-2">
                  {headings.filter(h => h.level > 2).map((heading) => (
                    <li
                      key={heading.id}
                      className={`text-xs ${getMarginClass(heading.level)} ${
                        activeId === heading.id 
                          ? 'text-foreground' 
                          : 'text-foreground/60'
                      }`}
                      style={{ 
                        color: activeId === heading.id 
                          ? 'var(--foreground)' 
                          : 'var(--muted-foreground)'
                      }}
                    >
                      <a
                        href={`#${heading.id}`}
                        className="list-none underline decoration-transparent underline-offset-[3px] transition-colors duration-200 hover:decoration-inherit"
                        onClick={(e) => {
                          e.preventDefault()
                          const element = document.getElementById(heading.id)
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                          }
                        }}
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
