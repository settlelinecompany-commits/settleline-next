'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth'
import { signOut } from '@/lib/auth'

export function UserMenu() {
  const { user, loading } = useAuth()
  const [showProfile, setShowProfile] = useState(false)

  if (loading) {
    return (
      <Button variant="ghost" size="sm" disabled>
        Loading...
      </Button>
    )
  }

  if (!user) {
    return (
      <Button 
        variant="outline" 
        size="sm" 
        asChild
      >
        <Link href="/auth">Sign In</Link>
      </Button>
    )
  }

  const handleSignOut = async () => {
    await signOut()
    setShowProfile(false)
  }

  return (
    <div className="relative">
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={() => setShowProfile(!showProfile)}
        className="flex items-center gap-2"
      >
        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-medium">
          {user.email?.charAt(0).toUpperCase()}
        </div>
        <span className="hidden sm:inline">
          {user.user_metadata?.first_name || user.email?.split('@')[0]}
        </span>
      </Button>

      {showProfile && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-3 border-b border-gray-100">
            <div className="font-medium text-sm">
              {user.user_metadata?.first_name && user.user_metadata?.last_name
                ? `${user.user_metadata.first_name} ${user.user_metadata.last_name}`
                : user.email?.split('@')[0]
              }
            </div>
            <div className="text-xs text-gray-500">{user.email}</div>
          </div>
          
          <div className="p-1">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-left"
              onClick={() => {
                setShowProfile(false)
                // Navigate to dashboard
                window.location.href = '/dashboard'
              }}
            >
              My Consultations
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-left text-red-600 hover:text-red-700"
              onClick={handleSignOut}
            >
              Sign Out
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
