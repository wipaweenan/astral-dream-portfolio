"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react"

export function ContactSection() {
  const socialLinks = [
    { icon: Mail, href: "mailto:nanwipawee2545@gmail.com", label: "Email" },
    { icon: Github, href: "https://github.com/wipaweenan", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/wipawee-sringern-653142317/", label: "LinkedIn" },
  ]

  return (
    <section id="contact" className="py-20 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">Let's Connect</span>
          </h2>
        </div>

        {/* Map Section - Moved to top */}
        <div className="mb-16">
          <Card className="glass-strong rounded-2xl float" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Find Me Here</h3>
              <div className="rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.1234567890!2d100.5167!3d13.8667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29c8b8b8b8b8b%3A0x1234567890abcdef!2sNonthaburi%2C%20Thailand!5e0!3m2!1sen!2sth!4v1234567890123!5m2!1sen!2sth"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
              Nonthaburi, Thailand 
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          <div className="space-y-8">
            <Card className="glass-strong rounded-2xl float" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Get in Touch</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I'm always excited to work on new projects and collaborate with amazing people. Whether you have a
                  project in mind or just want to say hello, feel free to reach out!
                </p>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-primary">Location:</strong> Nonthaburi, Thailand
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-primary">Availability:</strong> Open for new opportunities
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-primary">Response Time:</strong> Usually within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-strong rounded-2xl float" style={{ animationDelay: "0.4s" }}>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Follow Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon
                    return (
                      <Button
                        key={link.label}
                        variant="outline"
                        className="glass rounded-xl border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 group bg-transparent"
                        asChild
                      >
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 py-6"
                        >
                          <Icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                          <span className="text-sm font-medium w-5 h-5 group-hover:text-primary transition-colors">{link.label}</span>
                        </a>
                      </Button>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
