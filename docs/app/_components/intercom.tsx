'use client'

import { useEffect } from 'react'
import Intercom from '@intercom/messenger-js-sdk'

declare global {
  interface Window {
    Intercom: any
  }
}

export interface IntercomUser {
  user_id?: string
  name?: string
  email?: string
  created_at?: number
  [key: string]: any
}

interface IntercomProviderProps {
  user?: IntercomUser
}

export function IntercomProvider({ user }: IntercomProviderProps = {}) {
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Prepare Intercom settings
      const intercomSettings: any = {
        app_id: 'lkn5t8ql',
      }

      // Add user data if provided
      if (user) {
        if (user.user_id) intercomSettings.user_id = user.user_id
        if (user.name) intercomSettings.name = user.name
        if (user.email) intercomSettings.email = user.email
        if (user.created_at) intercomSettings.created_at = user.created_at
        
        // Add any additional user properties
        Object.keys(user).forEach(key => {
          if (!['user_id', 'name', 'email', 'created_at'].includes(key)) {
            intercomSettings[key] = user[key]
          }
        })
      }

      // Initialize Intercom with the official SDK
      Intercom(intercomSettings)

      // Additional delay to ensure launcher is visible
      setTimeout(() => {
        // Force launcher visibility by accessing the window.Intercom if available
        if (window.Intercom) {
          window.Intercom('update')
        }
      }, 500)
    }, 100)

    return () => clearTimeout(timer)
  }, [user])

  return null // This component doesn't render anything
}

// Optional: Intercom methods you can use throughout your app
export const intercomMethods = {
  // Show the messenger
  show: () => {
    if (window.Intercom) {
      window.Intercom('show')
    }
  },
  
  // Hide the messenger
  hide: () => {
    if (window.Intercom) {
      window.Intercom('hide')
    }
  },
  
  // Update user information
  update: (data: Record<string, any>) => {
    if (window.Intercom) {
      window.Intercom('update', data)
    }
  },

  // Update user identity (for login/logout)
  updateUser: (user: IntercomUser) => {
    if (window.Intercom) {
      const intercomSettings: any = {}
      
      if (user.user_id) intercomSettings.user_id = user.user_id
      if (user.name) intercomSettings.name = user.name
      if (user.email) intercomSettings.email = user.email
      if (user.created_at) intercomSettings.created_at = user.created_at
      
      // Add any additional user properties
      Object.keys(user).forEach(key => {
        if (!['user_id', 'name', 'email', 'created_at'].includes(key)) {
          intercomSettings[key] = user[key]
        }
      })

      window.Intercom('update', intercomSettings)
    }
  },

  // Shutdown Intercom (useful for logout)
  shutdown: () => {
    if (window.Intercom) {
      window.Intercom('shutdown')
    }
  },

  // Boot Intercom with new user (useful for login)
  boot: (user: IntercomUser) => {
    if (window.Intercom) {
      const intercomSettings: any = {
        app_id: 'lkn5t8ql',
      }
      
      if (user.user_id) intercomSettings.user_id = user.user_id
      if (user.name) intercomSettings.name = user.name
      if (user.email) intercomSettings.email = user.email
      if (user.created_at) intercomSettings.created_at = user.created_at
      
      // Add any additional user properties
      Object.keys(user).forEach(key => {
        if (!['user_id', 'name', 'email', 'created_at'].includes(key)) {
          intercomSettings[key] = user[key]
        }
      })

      window.Intercom('boot', intercomSettings)
    }
  },
  
  // Track events
  trackEvent: (eventName: string, metadata?: Record<string, any>) => {
    if (window.Intercom) {
      window.Intercom('trackEvent', eventName, metadata)
    }
  },
  
  // Show a specific message
  showMessages: () => {
    if (window.Intercom) {
      window.Intercom('showMessages')
    }
  },
  
  // Show help articles
  showNewMessage: (prePopulatedContent?: string) => {
    if (window.Intercom) {
      window.Intercom('showNewMessage', prePopulatedContent)
    }
  }
}
