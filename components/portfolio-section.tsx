"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function PortfolioSection() {
  const projects = [

 
  
    {
      title: "rock-paper-scissors",
      description:
        "Rock–Paper–Scissors — A classic game with switchable themes:  Halloween (Pumpkin,  Bat) and Galaxy (Star, Planet).",
      image: "/battle.png",
      technologies: ["React", "Node.js","Tailwind CSS","supabase"],
      liveUrl: "https://rock-paper-scissors-battles.netlify.app/",
      githubUrl: "https://github.com/wipaweenan/rock-paper-scissors",
    },
    {
      title: "minishop",
      description:
        "MiniShop — A mock-up online store where users can browse, search, and select products easily.",
      image: "/minishop.png",
      technologies: ["React", "Node.js","Tailwind CSS"],
      liveUrl: "https://68ca3fab437189000d57dfe3--stately-biscochitos-05f8e5.netlify.app/",
      githubUrl: "https://github.com/wipaweenan/minishop",
    },
    {
      title: "advice-generator",
      description:
        "Advice Generator is a simple app that gives users random advice for motivation, productivity, or self-improvement.",
      image: "/advice-generator.png",
      technologies: ["Vue.js", "Node.js"],
      liveUrl: "https://advice-generator-app-main-plum.vercel.app/",
      githubUrl: "https://github.com/wipaweenan/advice-generator-app-main",
    },
  ]

  return (
    <section id="portfolio" className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="glass-strong rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300 float"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-primary/80 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="glass text-xs py-1 px-2 rounded-full border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button size="sm" className="flex-1 glass glow rounded-xl text-white hover:text-yellow-400 transition-all duration-300" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="glass rounded-xl border-primary/50 bg-transparent text-white hover:text-yellow-400 transition-all duration-300"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 " />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
