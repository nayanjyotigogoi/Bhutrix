"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Add a class to the html element during theme transitions to prevent layout shift
  const handleThemeChange = React.useCallback((theme: string | undefined) => {
    const html = document.documentElement
    html.classList.add("transitioning")

    // Remove the class after the transition is complete
    setTimeout(() => {
      html.classList.remove("transitioning")
    }, 300)
  }, [])

  return (
    <NextThemesProvider {...props} onValueChange={handleThemeChange}>
      {children}
    </NextThemesProvider>
  )
}
