'use client'

import { NextraLogo } from '@components/icons'
import cn from 'clsx'
import { Link, useTheme } from 'nextra-theme-docs'
import { useEffect, useState } from 'react'
import { OptimizedImage } from './optimized-image'

export const CustomNavbar = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleDarkMode = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  if (!mounted) {
    return null
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <nav className="nextra-nav-container sticky top-0 z-20 w-full bg-transparent print:hidden">
      <div className="nextra-nav-container-blur pointer-events-none absolute z-[-1] h-full w-full bg-white dark:bg-[#0b0e16]" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06)' }}></div>
      <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between gap-2 pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center hover:opacity-75">
            {/* Light mode logo */}
            <OptimizedImage
              src="https://thepersuasionacademycdn.b-cdn.net/Images/The%20TPA%20Logo%20New%20Black.png"
              alt="The Persuasion Academy"
              width={120}
              height={32}
              priority={true}
              className="h-6 sm:h-8 dark:hidden"
              sizes="120px"
              quality={90}
            />
            {/* Dark mode logo */}
            <OptimizedImage
              src="https://thepersuasionacademycdn.b-cdn.net/Images/TPA%20The%20Power%20Ark%20Logo%20New.png"
              alt="The Persuasion Academy"
              width={120}
              height={32}
              priority={true}
              className="h-6 sm:h-8 hidden dark:block"
              sizes="120px"
              quality={90}
            />
          </Link>
        </div>

        {/* Desktop Navigation Items - Hidden on Mobile */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-6">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white no-underline">
            Home
          </Link>
          <Link href="/store" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white no-underline">
            Store
          </Link>
          <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white no-underline">
            Services
          </Link>

          <Link href="/articles" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white no-underline">
            Articles
          </Link>
        </div>

        {/* Right Side Items */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Sign In - Hidden text on mobile */}
          <Link 
            href="https://app.thepersuasionacademy.com" 
            className="signin-button text-white px-2 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors no-underline hover:opacity-90"
            style={{ backgroundColor: '#2960f6', background: '#2960f6' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="hidden sm:inline">Sign In</span>
            <span className="sm:hidden">Sign In</span>
          </Link>

          {/* Dark Mode Toggle */}
          <button
            className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={toggleDarkMode}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <svg className="w-4 sm:w-5 h-4 sm:h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                className={isMobileMenuOpen ? 'hidden' : 'block'} 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
              <path 
                className={isMobileMenuOpen ? 'block' : 'hidden'} 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-[#0b0e16] border-t border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="px-4 py-2 space-y-1">
            <Link 
              href="/" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md no-underline text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/store" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md no-underline text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Store
            </Link>
            <Link 
              href="/services" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md no-underline text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>

          </div>
        </div>
      )}
    </nav>
  )
} 