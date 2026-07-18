'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    // 2-second timer to auto-redirect
    const timer = setTimeout(() => {
      router.push('/')
    }, 2000)

    // Cleanup timer if the user navigates away or clicks the button
    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-6 gap-6">
      <h1 className="text-4xl font-bold">Page Not Found</h1>
      <p className="text-lg text-muted-foreground">
        Redirecting you to the calculator dashboard in 2 seconds...
      </p>
      <Button onClick={() => router.push('/')}>
        Go Home Now
      </Button>
    </div>
  )
}
