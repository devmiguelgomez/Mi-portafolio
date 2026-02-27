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
    title: "Desarrollo Web Profesional",
    description:
      "Sitios web rápidos, modernos y optimizados para SEO que convierten visitantes en clientes. Tu negocio merece una presencia digital que venda sola.",
    keywords: ["rápidos", "optimizados para SEO", "que venda sola"],
  },
  {
    icon: <Code2 className="h-10 w-10 text-primary" />,
    title: "Aplicaciones Web a Medida",
    description:
      "Apps web personalizadas con React y Next.js que resuelven el problema exacto de tu negocio. Si se puede imaginar, se puede construir.",
    keywords: ["personalizadas", "resuelven el problema exacto"],
  },
  {
    icon: <Database className="h-10 w-10 text-primary" />,
    title: "Integración de APIs y Sistemas",
    description:
      "Conecto tu software de facturación, pasarelas de pago y CRMs para que tu negocio funcione en piloto automático. Más eficiencia, menos errores humanos.",
    keywords: ["piloto automático", "Menos errores humanos"],
  },
  {
    icon: <LayoutDashboard className="h-10 w-10 text-primary" />,
    title: "Paneles Administrativos",
    description:
      "Dashboards con datos en tiempo real para que tomes decisiones basadas en métricas, no en suposiciones. Controla toda tu operación desde una sola pantalla.",
    keywords: ["tiempo real", "métricas", "decisiones"],
  },
  {
    icon: <Workflow className="h-10 w-10 text-primary" />,
    title: "Automatización de Procesos",
    description:
      "Elimino las tareas repetitivas que consumen horas de tu equipo. Ahorra tiempo, reduce errores y escala tu negocio sin contratar más personal.",
    keywords: ["Ahorra tiempo", "reduce errores", "escala"],
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
                className={`border ${theme === "light" ? "border-border/20 bg-white/80" : "border-border/40 bg-background/60"
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
