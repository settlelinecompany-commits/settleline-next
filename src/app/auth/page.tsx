'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/layout/container'
import { signIn, signUp, resetPassword, signInWithGoogle } from '@/lib/auth'
import { useAuth } from '@/lib/auth'
import Link from 'next/link'

export default function AuthPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { user, loading } = useAuth()
  
  const [mode, setMode] = useState<'signin' | 'signup' | 'reset'>('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [authLoading, setAuthLoading] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  // Get redirect URL from query params
  const redirectTo = searchParams.get('redirect') || '/dashboard'

  // Redirect if already authenticated
  useEffect(() => {
    if (user && !loading) {
      router.push(redirectTo)
    }
  }, [user, loading, router, redirectTo])

  // Set mode from query params
  useEffect(() => {
    const modeParam = searchParams.get('mode')
    if (modeParam === 'signup' || modeParam === 'signin' || modeParam === 'reset') {
      setMode(modeParam)
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setAuthLoading(true)
    setError('')
    setMessage('')

    try {
      if (mode === 'signin') {
        const { error } = await signIn(email, password)
        if (error) {
          setError(error.message)
        } else {
          setMessage('Signed in successfully! Redirecting...')
          setTimeout(() => router.push(redirectTo), 1000)
        }
      } else if (mode === 'signup') {
        if (password !== confirmPassword) {
          setError('Passwords do not match')
          setAuthLoading(false)
          return
        }
        
        const { error } = await signUp(email, password, firstName, lastName)
        if (error) {
          setError(error.message)
        } else {
          setMessage('Account created! Please check your email for a confirmation link.')
        }
      } else if (mode === 'reset') {
        const { error } = await resetPassword(email)
        if (error) {
          setError(error.message)
        } else {
          setMessage('Password reset email sent! Check your inbox.')
        }
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setAuthLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setAuthLoading(true)
    setError('')
    
    try {
      const { error } = await signInWithGoogle(redirectTo)
      if (error) {
        setError(error.message)
        setAuthLoading(false)
      }
      // If successful, user will be redirected automatically
    } catch (err) {
      setError('An unexpected error occurred')
      setAuthLoading(false)
    }
  }

  if (loading) {
    return (
      <Container className="py-16">
        <div className="max-w-md mx-auto text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </Container>
    )
  }

  if (user) {
    return (
      <Container className="py-16">
        <div className="max-w-md mx-auto text-center">
          <p className="text-gray-600">Already signed in. Redirecting...</p>
        </div>
      </Container>
    )
  }

  return (
    <Container className="py-16">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {mode === 'signin' && 'Welcome Back'}
            {mode === 'signup' && 'Create Account'}
            {mode === 'reset' && 'Reset Password'}
          </h1>
          <p className="text-gray-600">
            {mode === 'signin' && 'Sign in to access your consultation history and dashboard'}
            {mode === 'signup' && 'Create an account to track your consultations and payments'}
            {mode === 'reset' && 'Enter your email to receive a password reset link'}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>
              {mode === 'signin' && 'Sign In'}
              {mode === 'signup' && 'Sign Up'}
              {mode === 'reset' && 'Reset Password'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'signup' && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required={mode === 'signup'}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required={mode === 'signup'}
                    />
                  </div>
                </div>
              )}

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {mode !== 'reset' && (
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                  />
                </div>
              )}

              {mode === 'signup' && (
                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    minLength={6}
                  />
                </div>
              )}

              {error && (
                <div className="text-red-600 text-sm bg-red-50 p-3 rounded">
                  {error}
                </div>
              )}

              {message && (
                <div className="text-green-600 text-sm bg-green-50 p-3 rounded">
                  {message}
                </div>
              )}

              <Button type="submit" className="w-full" disabled={authLoading}>
                {authLoading ? 'Loading...' : 
                  mode === 'signin' ? 'Sign In' : 
                  mode === 'signup' ? 'Create Account' : 
                  'Send Reset Email'
                }
              </Button>
            </form>

            {mode !== 'reset' && (
              <>
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={handleGoogleSignIn}
                  disabled={authLoading}
                >
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Continue with Google
                </Button>
              </>
            )}

            <div className="mt-6 space-y-4">
              {mode === 'signin' && (
                <>
                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => setMode('reset')}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      Forgot your password?
                    </button>
                  </div>
                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => setMode('signup')}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      Don't have an account? Sign up
                    </button>
                  </div>
                </>
              )}

              {mode === 'signup' && (
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setMode('signin')}
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    Already have an account? Sign in
                  </button>
                </div>
              )}

              {mode === 'reset' && (
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setMode('signin')}
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    Remember your password? Sign in
                  </button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <div className="text-sm text-gray-500 mb-4">
            By creating an account, you can:
          </div>
          <div className="grid grid-cols-1 gap-2 text-sm text-gray-600">
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Track your consultation history</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-500">✓</span>
              <span>View payment status and receipts</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Get personalized recommendations</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Access exclusive resources</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link href="/">← Back to Home</Link>
          </Button>
        </div>
      </div>
    </Container>
  )
}
