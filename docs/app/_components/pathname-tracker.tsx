'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export function PathnameTracker() {
  const pathname = usePathname()

  useEffect(() => {
    // Add the current pathname as a data attribute to the body
    document.body.setAttribute('data-pathname', pathname)
    
    // Cleanup function to remove the attribute when component unmounts
    return () => {
      document.body.removeAttribute('data-pathname')
    }
  }, [pathname])

  return null // This component doesn't render anything
}
