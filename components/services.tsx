"use client"

import { Globe, Code2, Database, LayoutDashboard, Workflow } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/ui/animated-section"
import { StaggerContainer } from "@/components/ui/stagger-container"
import { StaggerItem } from "@/components/ui/stagger-item"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Highlight } from "@/components/ui/highlight"
import { memo } from "react"

const services = [
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Desarrollo Web",
    description: "Sitios web modernos, rápidos y optimizados para SEO que convierten visitantes en clientes.",
    keywords: ["modernos", "rápidos", "optimizados para SEO"],
  },
  {
    icon: <Code2 className="h-10 w-10 text-primary" />,
    title: "Aplicaciones Web",
    description: "Aplicaciones web personalizadas con interfaces intuitivas y experiencias de usuario excepcionales.",
    keywords: ["personalizadas", "intuitivas", "excepcionales"],
  },
  {
    icon: <Database className="h-10 w-10 text-primary" />,
    title: "Integración de APIs",
    description: "Conexión de sistemas y servicios para automatizar procesos y mejorar la eficiencia de tu negocio.",
    keywords: ["automatizar", "eficiencia"],
  },
  {
    icon: <LayoutDashboard className="h-10 w-10 text-primary" />,
    title: "Paneles Administrativos",
    description: "Dashboards personalizados para gestionar tu negocio con datos en tiempo real y métricas clave.",
    keywords: ["tiempo real", "métricas clave"],
  },
  {
    icon: <Workflow className="h-10 w-10 text-primary" />,
    title: "Automatización",
    description: "Optimización de procesos repetitivos para ahorrar tiempo y reducir errores en tu operación.",
    keywords: ["ahorrar tiempo", "reducir errores"],
  },
]

export const Services = memo(function Services() {
  const { theme } = useTheme()

  const highlightKeywords = (text: string, keywords: string[]) => {
    let result = text
    keywords.forEach((keyword) => {
      result = result.replace(keyword, `<span class="text-primary font-medium">${keyword}</span>`)
    })
    return result
  }

  return (
    <section id="servicios" className={`py-20 ${theme === "light" ? "bg-muted/10" : "bg-muted/30"}`}>
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mis <Highlight type="primary">Servicios</Highlight>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            <Highlight type="bold">Soluciones tecnológicas</Highlight> a medida para{" "}
            <Highlight type="primary">impulsar tu negocio</Highlight>
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <Card
                className={`border ${
                  theme === "light" ? "border-border/20 bg-white/80" : "border-border/40 bg-background/60"
                } backdrop-blur-sm hover:border-primary/40 transition-all duration-300 h-full`}
              >
                <CardHeader>
                  <motion.div
                    className="mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {service.icon}
                  </motion.div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: highlightKeywords(service.description, service.keywords),
                      }}
                    />
                  </CardDescription>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
})
