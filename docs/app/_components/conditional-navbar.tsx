'use client'

import { usePathname } from 'next/navigation'
import { NextraLogo } from '@components/icons'
import cn from 'clsx'
import { Link, Navbar } from 'nextra-theme-docs'
import { CustomNavbar } from './custom-navbar'

export const ConditionalNavbar = () => {
  const pathname = usePathname()
  
  // Use custom navbar for all pages
  return <CustomNavbar />
} 