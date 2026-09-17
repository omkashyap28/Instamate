"use client"

import { motion } from "motion/react"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export const LoadingIndicator = () => {
  const pathname = usePathname()

  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)

  const previousPathname = useRef(pathname)
  const progressInterval = useRef<NodeJS.Timeout | null>(null)

  const startLoading = () => {
    if (progressInterval.current) {
      clearInterval(progressInterval.current)
    }

    setLoading(true)
    setProgress(10)

    progressInterval.current = setInterval(() => {
      setProgress((current) => {
        if (current >= 90) return current

        const increment = Math.random() * 8

        return Math.min(current + increment, 90)
      })
    }, 100)
  }

  const finishLoading = () => {
    if (progressInterval.current) {
      clearInterval(progressInterval.current)
      progressInterval.current = null
    }

    setProgress(100)

    setTimeout(() => {
      setLoading(false)
      setProgress(0)
    }, 250)
  }

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const link = target.closest("a")

      if (!link) return

      const href = link.getAttribute("href")

      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
      ) {
        return
      }

      const url = new URL(href, window.location.href)

      if (url.pathname === window.location.pathname) {
        return
      }

      startLoading()
    }

    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [])

  useEffect(() => {
    if (pathname !== previousPathname.current) {
      previousPathname.current = pathname

      if (loading) {
        ;(() => finishLoading())()
      }
    }
  }, [pathname, loading])

  useEffect(() => {
    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current)
      }
    }
  }, [])

  if (!loading) return null

  return (
    <motion.div
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Loading progress"
      className="fixed top-0 left-0 z-9999 h-1 bg-primary"
      initial={{
        width: "0%",
      }}
      animate={{
        width: `${progress}%`,
      }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
    />
  )
}
