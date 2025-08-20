import { getEnhancedPageMap } from '@components/get-page-map'
import type { Metadata } from 'next'
import NextImage from 'next/image'
import Script from 'next/script'
import { Footer, Layout, Link } from 'nextra-theme-docs'
import { Anchor, Head } from 'nextra/components'
import type { FC, ReactNode } from 'react'
import xyflow from './showcase/_logos/xyflow.png'
import { ConditionalNavbar } from './_components/conditional-navbar'
import { FacebookPixelEvents } from './_components/facebook-pixel'
import { MobileDocsNav } from './_components/mobile-docs-nav'
import './globals.css'

export const metadata: Metadata = {
  description: 'Turn the world\'s most powerful psychological frameworks into your hidden advantage. Master ethical influence, persuasion, and charisma through world-class training.',
  metadataBase: new URL('https://thepersuasionacademy.com'),
  icons: {
    icon: 'https://thepersuasionacademycdn.b-cdn.net/Images/TPA%20The%20Power%20Ark%20Logo%20New.png',
    shortcut: 'https://thepersuasionacademycdn.b-cdn.net/Images/TPA%20The%20Power%20Ark%20Logo%20New.png',
    apple: 'https://thepersuasionacademycdn.b-cdn.net/Images/TPA%20The%20Power%20Ark%20Logo%20New.png',
  },
  keywords: [
    'persuasion',
    'influence',
    'charisma',
    'psychological frameworks',
    'communication',
    'leadership',
    'renegade persuaders',
    'dreamstate selling'
  ],
  generator: 'Next.js',
  applicationName: 'The Persuasion Academy',
  appleWebApp: {
    title: 'The Persuasion Academy'
  },
  title: {
    default: 'Home - The Persuasion Academy',
    template: '%s'
  },
  openGraph: {
    url: './',
    siteName: 'The Persuasion Academy',
    locale: 'en_US',
    type: 'website'
  },
  other: {
    'msapplication-TileColor': '#fff'
  },
  twitter: {
    site: 'https://thepersuasionacademy.com'
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
            <a key="privacy-link" href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a key="terms-link" href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              Terms of Service
            </a>
            <a key="refund-link" href="/refund" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              Refund Policy
            </a>
            <a key="contact-link" href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              Contact Us
            </a>
          </div>
          
          {/* Legal Disclaimers */}
          <div className="max-w-4xl mx-auto space-y-4 text-xs text-gray-500 dark:text-gray-500 leading-relaxed">
            {/* Meta Disclaimer */}
            <p key="meta-disclaimer">
              <strong>Meta Disclaimer:</strong> This site is not part of Meta Platforms, Inc. (formerly Facebook, Inc.) or any of its subsidiaries. 
              Additionally, this site is not endorsed by Meta in any way. Meta, Facebook, Instagram, and WhatsApp are trademarks of Meta Platforms, Inc.
            </p>
            
            {/* Google Disclaimer */}
            <p key="google-disclaimer">
              <strong>Google Disclaimer:</strong> This site is not part of Google LLC or Alphabet Inc. Additionally, this site is not endorsed by Google in any way. 
              Google, YouTube, Gmail, and related marks are trademarks of Google LLC.
            </p>
            
            {/* Earnings Disclaimer */}
            <p key="earnings-disclaimer">
              <strong>Earnings Disclaimer:</strong> The results and testimonials shared are not typical and should not be expected. 
              Individual results may vary and depend on many factors including but not limited to background, experience, and work ethic. 
              No express or implied guarantees of income are made.
            </p>
            
            {/* General Disclaimer */}
            <p key="general-disclaimer">
              <strong>General Disclaimer:</strong> The information provided on this website is for educational and informational purposes only. 
              Results may vary based on individual effort, determination, hard work, and ability to follow directions. 
              Past performance does not guarantee future results.
            </p>
            
            {/* Professional Disclaimer */}
            <p key="professional-disclaimer">
              <strong>Professional Disclaimer:</strong> The content provided is not intended as professional advice. 
              Always consult with qualified professionals before making business decisions. 
              The Persuasion Academy disclaims any liability for decisions made based on this information.
            </p>
          </div>
          
          {/* Contact Information */}
          <div className="text-xs text-gray-500 dark:text-gray-500">
            <p key="company-name">The Persuasion Academy, LLC</p>
            <p key="support-email">For support inquiries: <a href="mailto:support@thepersuasionacademy.com" className="text-blue-600 dark:text-blue-400 hover:underline">support@thepersuasionacademy.com</a></p>
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
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-ZQNH6HS272`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZQNH6HS272', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `
        }}
      />

      {/* Facebook Pixel */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2194049730935870');
            fbq('track', 'PageView');
          `
        }}
      />
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=2194049730935870&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
      <body>
        <Layout
          banner={banner}
          navbar={<ConditionalNavbar />}
          pageMap={pageMap}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          editLink={false}
          darkMode={false}
          nextThemes={{
            attribute: 'class',
            defaultTheme: 'system',
            disableTransitionOnChange: true,
            storageKey: 'theme'
          }}
          sidebar={{
            defaultMenuCollapseLevel: 1,
            autoCollapse: false,
            toggleButton: true
          }}
          footer={footer}
          feedback={{ content: null }}
          toc={{
            float: true,
            title: "On This Page"
          }}
        >
          {children}
          <MobileDocsNav />
          <FacebookPixelEvents />
        </Layout>
      </body>
    </html>
  )
}

export default RootLayout
