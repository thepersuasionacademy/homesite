'use client'

import { usePathname } from 'next/navigation'
import { NextraLogo } from '@components/icons'
import cn from 'clsx'
import { Link, Navbar } from 'nextra-theme-docs'
import { CustomNavbar } from './custom-navbar'

export const ConditionalNavbar = () => {
  const pathname = usePathname()
  
  // Use custom navbar only for the main homepage
  if (pathname === '/') {
    return <CustomNavbar />
  }
  
  // For docs pages and other pages, use the default Nextra navbar
  return (
    <Navbar
      logo={
        <Link href="/" className="flex items-center hover:opacity-75">
          <NextraLogo
            height="20"
            className={cn(
              'hover:transition-all hover:duration-1000 motion-reduce:hover:transition-none',
              '[mask-image:linear-gradient(60deg,#000_25%,rgba(0,0,0,.2)_50%,#000_75%)] [mask-position:0] [mask-size:400%]',
              'hover:[mask-position:100%]'
            )}
          />
        </Link>
      }
    />
  )
} 