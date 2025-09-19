"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { usePortfolioTheme } from "@/components/theme-provider"
import { Palette, Sparkles } from "lucide-react"

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false)
  
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <ThemeToggleContent />
}

function ThemeToggleContent() {
  const { theme, setTheme } = usePortfolioTheme()

  const toggleTheme = () => {
    setTheme(theme === 'cosmic' ? 'galaxy' : 'cosmic')
  }

  return (
    <div className="fixed top-6 right-6 z-50 flex flex-col items-end gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={toggleTheme}
        className="glass rounded-full p-3 hover:glass-strong transition-all duration-300 group"
      >
        {theme === 'cosmic' ? (
          <Sparkles className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
        ) : (
          <Palette className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
        )}
        <span className="sr-only">
          Switch to {theme === 'cosmic' ? 'Galaxy' : 'Cosmic'} theme
        </span>
      </Button>
      <div className="glass rounded-lg px-3 py-1 text-xs font-medium text-primary/80">
        {theme === 'cosmic' ? 'Cosmic' : 'Galaxy'}
      </div>
    </div>
  )
}
