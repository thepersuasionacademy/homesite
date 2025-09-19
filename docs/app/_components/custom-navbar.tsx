'use client'

import { NextraLogo } from '@components/icons'
import cn from 'clsx'
import { Link, useTheme } from 'nextra-theme-docs'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { OptimizedImage } from './optimized-image'
import Image from 'next/image'

export const CustomNavbar = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

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
      <div
        className="nextra-nav-container-blur pointer-events-none absolute z-[-1] h-full w-full bg-white dark:bg-[#0a0a0a]"
        style={{
          boxShadow: isDark
            ? '0 1px 4px rgba(255, 255, 255, 0.07)'
            : '0 4px 12px rgba(0, 0, 0, 0.1)'
        }}
      ></div>
      <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between gap-2 pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center hover:opacity-75">
            {/* Logo Container - Fixed dimensions to prevent cutoff */}
            <div className="w-28 h-6 flex items-center justify-start overflow-hidden">
              {/* Light mode logo */}
              <Image
                src="https://thepersuasionacademycdn.b-cdn.net/Images/The%20TPA%20Logo%20New%20Black.png"
                alt="The Persuasion Academy"
                width={112}
                height={24}
                priority={true}
                className="dark:hidden"
                sizes="112px"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
              {/* Dark mode logo */}
              <Image
                src="https://thepersuasionacademycdn.b-cdn.net/Images/TPA%20The%20Power%20Ark%20Logo%20New.png"
                alt="The Persuasion Academy"
                width={112}
                height={24}
                priority={true}
                className="hidden dark:block"
                sizes="112px"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Items - Hidden on Mobile */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-4">
          <Link href="/" className={`nav-pill text-sm font-medium no-underline ${pathname === '/' ? 'active' : ''}`}>
            Home
          </Link>
          <Link href="/store" className={`nav-pill text-sm font-medium no-underline ${pathname === '/store' ? 'active' : ''}`}>
            Store
          </Link>
          <Link href="/services" className={`nav-pill text-sm font-medium no-underline ${pathname === '/services' ? 'active' : ''}`}>
            Services
          </Link>
          <Link href="/articles" className={`nav-pill text-sm font-medium no-underline ${pathname === '/articles' ? 'active' : ''}`}>
            Articles
          </Link>
        </div>

        {/* Right Side Items */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Sign In Dropdown */}
          <div className="relative group">
            <div className="group-hover:opacity-90 transition-opacity duration-150">
              <Link 
                href="https://app.thepersuasionacademy.com" 
                className="signin-button text-white px-2 sm:px-4 py-3 rounded-full text-xs sm:text-sm font-bold no-underline will-change-transform transition-all duration-300 ease-out hover:transform hover:-translate-y-0.5"
                style={{ 
                  background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 40%, #b91c1c 100%)',
                  boxShadow: '0 4px 8px rgba(220, 38, 38, 0.3), 0 2px 4px rgba(220, 38, 38, 0.2), inset 0 2px 0 rgba(255, 255, 255, 0.3), inset 0 -2px 0 rgba(0, 0, 0, 0.2)',
                  border: '1px solid rgba(185, 28, 28, 0.8)'
                }}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 6px 12px rgba(220, 38, 38, 0.4), 0 3px 6px rgba(220, 38, 38, 0.3), inset 0 2px 0 rgba(255, 255, 255, 0.4), inset 0 -2px 0 rgba(0, 0, 0, 0.3)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(220, 38, 38, 0.3), 0 2px 4px rgba(220, 38, 38, 0.2), inset 0 2px 0 rgba(255, 255, 255, 0.3), inset 0 -2px 0 rgba(0, 0, 0, 0.2)'
                }}
              >
                <span className="hidden sm:inline">Sign In</span>
                <span className="sm:hidden">Sign In</span>
              </Link>
            </div>
            
            {/* Dropdown Menu */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-56 bg-white dark:bg-[#0a0a0a] rounded-md shadow-lg border border-gray-300 dark:border-gray-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible will-change-transform transition-opacity duration-150 ease-out z-50" style={{ 
              '--tw-prose-links': 'none'
            } as React.CSSProperties}>
              <div className="py-1">
                <Link
                  href="https://app.thepersuasionacademy.com"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-red-900 hover:text-red-800 dark:hover:text-red-200 no-underline text-center transition-colors duration-150 ease-out"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    textDecoration: 'none',
                    backgroundImage: 'none'
                  }}
                >
                  <span className="inline-block" style={{ 
                    position: 'relative'
                  }}>
                    The Ark
                  </span>
                </Link>
                <div className="border-t border-gray-300 dark:border-gray-500 my-1"></div>
                <Link
                  href="https://my.thepowerark.com"
                  className="block px-4 py-2 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 hover:text-red-600 dark:hover:bg-gray-700 dark:hover:text-red-400 no-underline text-center italic transition-colors duration-150 ease-out"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    textDecoration: 'none',
                    backgroundImage: 'none'
                  }}
                >
                  <span className="inline-block" style={{ 
                    position: 'relative'
                  }}>
                    The Old Ark
                  </span>
                </Link>
              </div>
            </div>
          </div>

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
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-[#0a0a0a] border-t border-gray-300 dark:border-gray-500 shadow-lg">
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
            <Link 
              href="/articles" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md no-underline text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Articles
            </Link>
            
            {/* Mobile Sign In Options */}
            <div className="border-t border-gray-300 dark:border-gray-500 mt-2 pt-2">
              <div className="text-xs font-medium text-gray-500 dark:text-gray-400 px-3 py-1 uppercase tracking-wide">
                Sign In Options
              </div>
              <Link 
                href="https://app.thepersuasionacademy.com" 
                className="block px-3 py-2 text-base font-medium text-white hover:opacity-90 rounded-md no-underline text-center mx-2 my-1 transition-colors"
                style={{ backgroundColor: '#dc2626', background: '#dc2626' }}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                The Ark
              </Link>
              <Link 
                href="https://my.thepowerark.com" 
                className="block px-3 py-2 text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-50 hover:text-red-600 dark:hover:bg-gray-800 dark:hover:text-red-400 rounded-md no-underline text-center mx-2 italic transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                The Old Ark
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
} 