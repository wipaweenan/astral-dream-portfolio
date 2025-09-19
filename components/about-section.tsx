"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Rocket, Star, Zap } from "lucide-react"

export function AboutSection() {
  const skills = [
    "React",
    "C#",
    "Unity",
    "Next.js",
    "TypeScript",
    "Node.js",
    "SQL",
    "NoSQL",
    "Tailwind CSS",
  ]

  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing for speed and efficiency in every project",
    },
    {
      icon: Star,
      title: "Innovation",
      description: "Staying ahead with cutting-edge technologies and best practices",
    },
    {
      icon: Zap,
      title: "Rapid Development",
      description: "Fast iteration cycles without compromising on quality",
    },
  ]

  return (
    <section id="about" className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            <span className="cosmic-gradient">About Me</span>
          </h2>
          
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="glass-strong rounded-2xl float" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                My passion for technology began with a simple curiosity about how things work behind the screen. 
                Starting as a Support Software Engineer at Gosoft, I gained hands-on experience with POS systems and database troubleshooting. 
                This foundation led me to become a Junior Game Developer at DEMO Corporation, where I created VR RPG games using Unity and C#.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently as a Programmer at NEXT TRIPLE NINE, I'm building contract management systems and trading platforms with React, 
                Express.js, and MySQL. Beyond the keyboard, I'm an avid learner who enjoys exploring new technologies, 
                mentoring fellow developers, and always seeking the next challenge that will push my skills to new heights.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-strong rounded-2xl float" style={{ animationDelay: "0.4s" }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="glass text-sm py-1 px-3 rounded-full border-primary/30"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.title}
                className="glass rounded-2xl hover:glass-strong transition-all duration-300 group cursor-pointer float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
