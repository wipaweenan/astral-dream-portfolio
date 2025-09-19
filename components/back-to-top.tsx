"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import { usePortfolioTheme } from "@/components/theme-provider"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const { theme } = usePortfolioTheme()

  // Show button when page is scrolled down 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 750) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 glass-strong rounded-full w-14 h-14 p-0 shadow-lg hover:shadow-xl transition-all duration-300 group ${
            theme === 'cosmic' ? 'glow' : 'galaxy-glow'
          }`}
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6 group-hover:scale-110 transition-transform duration-200 text-white" />
        </Button>
      )}
    </>
  )
}
