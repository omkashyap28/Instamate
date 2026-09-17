"use client"

import { useState, useEffect } from "react"
import { Button } from "../../ui/button"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

const META_THEME: Record<"dark" | "light", string> = {
  dark: "#000",
  light: "#fff",
}

export const ThemeButton = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ;(() => setMounted(true))()
  }, [])

  useEffect(() => {
    if (!resolvedTheme) return

    const theme = META_THEME[resolvedTheme as "light" | "dark"]

    let meta = document.querySelector("meta[name='theme-color']")

    if (!meta) {
      meta = document.createElement("meta")
      meta.setAttribute("name", "theme-color")
      document.head.appendChild(meta)
    }

    meta.setAttribute("content", theme)
    document.head.appendChild(meta)

    return () => {
      document.head.removeChild(meta)
    }
  }, [resolvedTheme])

  if (!mounted) return

  return (
    <Button
      aria-label="Toggle theme"
      role="button"
      variant="ghost"
      size="icon-lg"
      title="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className="text-muted-foreground" />
      ) : (
        <MoonIcon className="text-muted-foreground" />
      )}
    </Button>
  )
}
