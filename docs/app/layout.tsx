import { getEnhancedPageMap } from '@components/get-page-map'
import type { Metadata } from 'next'
import NextImage from 'next/image'
import { Footer, Layout, Link } from 'nextra-theme-docs'
import { Anchor, Head } from 'nextra/components'
import type { FC, ReactNode } from 'react'
import xyflow from './showcase/_logos/xyflow.png'
import { ConditionalNavbar } from './_components/conditional-navbar'
import './globals.css'

export const metadata: Metadata = {
  description: 'Make beautiful websites with Next.js & MDX.',
  metadataBase: new URL('https://nextra.site'),
  keywords: [
    'Nextra',
    'Next.js',
    'React',
    'JavaScript',
    'MDX',
    'Markdown',
    'Static Site Generator'
  ],
  generator: 'Next.js',
  applicationName: 'Nextra',
  appleWebApp: {
    title: 'Nextra'
  },
  title: {
    default: 'Nextra – Next.js Static Site Generator',
    template: '%s | Nextra'
  },
  openGraph: {
    url: './',
    siteName: 'Nextra',
    locale: 'en_US',
    type: 'website'
  },
  other: {
    'msapplication-TileColor': '#fff'
  },
  twitter: {
    site: 'https://nextra.site'
  },
  alternates: {
    canonical: './'
  }
}

const banner = null

const footer = (
  <div style={{backgroundColor: '#ffffff'}} className="dark:[background-color:#0b0e16!important]">
    <Footer className="!bg-white dark:!bg-[#0b0e16] border-t border-gray-200 dark:border-gray-800" style={{backgroundColor: 'inherit'}}>
      <div className="w-full max-w-6xl mx-auto px-6 py-2 pb-12">
        <div className="text-center space-y-6">
          {/* Copyright */}
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            © {new Date().getFullYear()} The Persuasion Academy, LLC. All rights reserved.
          </p>
          
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="/refund" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              Refund Policy
            </a>
            <a href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              Contact Us
            </a>
          </div>
          
          {/* Legal Disclaimers */}
          <div className="max-w-4xl mx-auto space-y-4 text-xs text-gray-500 dark:text-gray-500 leading-relaxed">
            {/* Meta Disclaimer */}
            <p>
              <strong>Meta Disclaimer:</strong> This site is not part of Meta Platforms, Inc. (formerly Facebook, Inc.) or any of its subsidiaries. 
              Additionally, this site is not endorsed by Meta in any way. Meta, Facebook, Instagram, and WhatsApp are trademarks of Meta Platforms, Inc.
            </p>
            
            {/* Google Disclaimer */}
            <p>
              <strong>Google Disclaimer:</strong> This site is not part of Google LLC or Alphabet Inc. Additionally, this site is not endorsed by Google in any way. 
              Google, YouTube, Gmail, and related marks are trademarks of Google LLC.
            </p>
            
            {/* Earnings Disclaimer */}
            <p>
              <strong>Earnings Disclaimer:</strong> The results and testimonials shared are not typical and should not be expected. 
              Individual results may vary and depend on many factors including but not limited to background, experience, and work ethic. 
              No express or implied guarantees of income are made.
            </p>
            
            {/* General Disclaimer */}
            <p>
              <strong>General Disclaimer:</strong> The information provided on this website is for educational and informational purposes only. 
              Results may vary based on individual effort, determination, hard work, and ability to follow directions. 
              Past performance does not guarantee future results.
            </p>
            
            {/* Professional Disclaimer */}
            <p>
              <strong>Professional Disclaimer:</strong> The content provided is not intended as professional advice. 
              Always consult with qualified professionals before making business decisions. 
              The Persuasion Academy disclaims any liability for decisions made based on this information.
            </p>
          </div>
          
          {/* Contact Information */}
          <div className="text-xs text-gray-500 dark:text-gray-500">
            <p>The Persuasion Academy, LLC</p>
            <p>For support inquiries: <a href="mailto:support@thepersuasionacademy.com" className="text-blue-600 dark:text-blue-400 hover:underline">support@thepersuasionacademy.com</a></p>
          </div>
        </div>
      </div>
    </Footer>
  </div>
)

const RootLayout: FC<{
  children: ReactNode
}> = async ({ children }) => {
  const pageMap = await getEnhancedPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            try {
              const theme = localStorage.getItem('theme')
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
              if (theme === 'dark' || (!theme && prefersDark)) {
                document.documentElement.classList.add('dark')
              }
            } catch (e) {}
          `,
        }}
      />
      <body>
        <Layout
          banner={banner}
          navbar={<ConditionalNavbar />}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          editLink="Edit this page on GitHub"
          sidebar={{
            defaultMenuCollapseLevel: 1,
            autoCollapse: false,
            toggleButton: true
          }}
          footer={footer}
          toc={{
            float: true,
            title: "On This Page",
            extraContent: (
              <>
                <b className="mt-2 text-xs">Sponsored by:</b>
                <Anchor href="https://xyflow.com?utm_source=nextra.site&utm_campaign=nextra&utm_content=sidebarLink">
                  <NextImage
                    src={xyflow}
                    alt="Wire your ideas with xyflow!"
                    className="nextra-border rounded-sm border"
                  />
                </Anchor>
              </>
            )
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}

export default RootLayout
