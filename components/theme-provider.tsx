'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

// Custom theme context for portfolio themes
type PortfolioTheme = 'cosmic' | 'galaxy'

interface PortfolioThemeContextType {
  theme: PortfolioTheme
  setTheme: (theme: PortfolioTheme) => void
}

const PortfolioThemeContext = React.createContext<PortfolioThemeContextType | undefined>(undefined)

export function PortfolioThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<PortfolioTheme>('cosmic')
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('portfolio-theme') as PortfolioTheme
    if (savedTheme && (savedTheme === 'cosmic' || savedTheme === 'galaxy')) {
      setTheme(savedTheme)
    }
  }, [])

  React.useEffect(() => {
    if (mounted) {
      localStorage.setItem('portfolio-theme', theme)
      document.documentElement.className = theme
    }
  }, [theme, mounted])

  return (
    <PortfolioThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </PortfolioThemeContext.Provider>
  )
}

export function usePortfolioTheme() {
  const context = React.useContext(PortfolioThemeContext)
  if (context === undefined) {
    throw new Error('usePortfolioTheme must be used within a PortfolioThemeProvider')
  }
  return context
}
