"use client"

import { StarField } from "@/components/star-field"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <StarField />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-primary/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">© 2025 Wiphawee Sringern. Crafted with love and cosmic inspiration.</p>
        </div>
      </footer>
    </main>
  )
}
