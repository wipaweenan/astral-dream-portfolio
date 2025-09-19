"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <div className="float">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          <span className="cosmic-gradient">
              Wiphawee Sringern
          </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto text-pretty">
            FullStack Developer
          </p>
          <p className="text-lg mb-12 text-muted max-w-3xl mx-auto text-pretty">
          Hi! I’m Nan, a Fullstack developer building user-centered systems that make life easier. 
        I believe continuous learning is key to creating impactful digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 rounded-2xl border-primary/50 hover:border-primary bg-black/30 backdrop-blur-md text-white hover:bg-black/40 hover:text-yellow-400 transition-all duration-300"
              onClick={scrollToPortfolio}
            >
              View Projects
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <Button
          variant="ghost"
          size="sm"
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-primary hover:text-primary/80 hover:bg-transparent animate-bounce"
        >
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="w-4 h-4" />
        </Button>
      </div>
    </section>
  )
}
