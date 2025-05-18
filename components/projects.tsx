"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { StaggerContainer } from "@/components/ui/stagger-container"
import { StaggerItem } from "@/components/ui/stagger-item"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Highlight } from "@/components/ui/highlight"
import { memo } from "react"

const projects = [
  {
    title: "Plataforma E-learning(Pronto)",
    description:
      "Desarrollo de una plataforma completa de cursos online con sistema de pagos, gestión de contenido y analíticas para una academia de programación.",
    image: "/coming-soon.jpg?height=400&width=600",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    highlights: ["cursos online", "sistema de pagos", "analíticas"],
  },
  {
    title: "Dashboard Empresarial(En desarrollo)",
    description:
      "Panel administrativo para visualización de métricas de ventas y gestión de inventario para una empresa de retail con múltiples sucursales.",
    image: "/Dashboard-empresarial.png?height=400&width=600",
    tags: ["React", "Express", "PostgreSQL", "Chart.js"],
    link: "",
    highlights: ["métricas de ventas", "gestión de inventario", "múltiples sucursales"],
  },
  {
    title: "App de Gestión de Proyectos(Pronto)",
    description:
      "Aplicación web para la gestión de proyectos, tareas y equipos con funcionalidades de colaboración en tiempo real.",
    image: "/coming-soon.jpg?height=400&width=600",
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
    link: "#",
    highlights: ["gestión de proyectos", "colaboración en tiempo real"],
  },
]

export const Projects = memo(function Projects() {
  const { theme } = useTheme()

  const highlightKeywords = (text: string, keywords: string[]) => {
    let result = text
    keywords.forEach((keyword) => {
      result = result.replace(keyword, `<span class="text-primary font-medium">${keyword}</span>`)
    })
    return result
  }

  return (
    <section id="proyectos" className={`py-20 ${theme === "light" ? "bg-muted/10" : "bg-muted/30"}`}>
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proyectos <Highlight type="primary">Destacados</Highlight>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            <Highlight type="bold">Soluciones</Highlight> que he desarrollado para clientes reales con{" "}
            <Highlight type="primary">resultados tangibles</Highlight>
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <Card
                className={`overflow-hidden border ${
                  theme === "light" ? "border-border/20 bg-white/80" : "border-border/40 bg-background/60"
                } backdrop-blur-sm hover:border-primary/40 transition-all duration-300 h-full`}
              >
                <motion.div
                  className="aspect-video relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </motion.div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.div key={tagIndex} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                        <Badge variant="secondary">{tag}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: highlightKeywords(project.description, project.highlights),
                      }}
                    />
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="gap-2 group">
                      Ver proyecto
                      <ExternalLink className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection className="text-center mt-12" delay={0.4}>
          <Link href="#contacto">
            <Button size="lg" className="relative overflow-hidden group">
              <span className="relative z-10">Hablemos sobre tu proyecto</span>
              <motion.div
                className="absolute inset-0 bg-primary/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
})
