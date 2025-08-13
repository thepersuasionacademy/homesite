'use client'

import { NextraLogo } from '@components/icons'
import cn from 'clsx'
import { Link } from 'nextra-theme-docs'
import { useEffect, useState } from 'react'

export const CustomNavbar = () => {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Check current theme from document class
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    
    checkTheme()
    
    // Watch for changes to the dark class
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    return () => observer.disconnect()
  }, [])

  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <nav className="nextra-nav-container sticky top-0 z-20 w-full bg-transparent print:hidden">
      <div className="nextra-nav-container-blur pointer-events-none absolute z-[-1] h-full w-full bg-white dark:bg-[#0b0e16]" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06)' }}></div>
      <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between gap-2 pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center hover:opacity-75">
            {/* Light mode logo */}
            <img 
              src="https://thepersuasionacademycdn.b-cdn.net/Images/The%20TPA%20Logo%20New%20Black.png" 
              alt="The Persuasion Academy"
              height="32"
              className="h-8 dark:hidden"
            />
            {/* Dark mode logo */}
            <img 
              src="https://thepersuasionacademycdn.b-cdn.net/Images/TPA%20The%20Power%20Ark%20Logo%20New.png" 
              alt="The Persuasion Academy"
              height="32"
              className="h-8 hidden dark:block"
            />
          </Link>
        </div>

        {/* Centered Navigation Items */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-6">
          {/* Home */}
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white no-underline">
            Home
          </Link>

          {/* Store */}
          <Link href="/store" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white no-underline">
            Store
          </Link>

          {/* Services */}
          <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white no-underline">
            Services
          </Link>

          {/* Docs */}
          <Link href="/docs" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white no-underline">
            Docs
          </Link>
        </div>

        {/* Right Side Items */}
        <div className="flex items-center gap-4">
          {/* Sign In */}
          <Link 
            href="https://app.thepersuasionacademy.com" 
            className="text-white px-4 py-2 rounded-md text-sm font-medium transition-colors no-underline hover:opacity-90"
            style={{ backgroundColor: '#2960f6' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign In
          </Link>

          {/* Dark Mode Toggle */}
          <button
            className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={toggleDarkMode}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                className={isDark ? 'hidden' : 'block'} 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
              />
              <path 
                className={isDark ? 'block' : 'hidden'} 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
} 