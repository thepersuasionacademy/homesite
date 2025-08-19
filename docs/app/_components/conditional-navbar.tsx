'use client'

import { usePathname } from 'next/navigation'
import { NextraLogo } from '@components/icons'
import cn from 'clsx'
import { Link, Navbar } from 'nextra-theme-docs'
import { CustomNavbar } from './custom-navbar'

export const ConditionalNavbar = () => {
  const pathname = usePathname()
  
  // Hide navbar on /offers pages, show on /store/rp
  if (pathname.startsWith('/offers')) {
    return null
  }
  
  // Use custom navbar for all other pages
  return <CustomNavbar />
} 