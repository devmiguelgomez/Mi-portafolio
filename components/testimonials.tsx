"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { StaggerContainer } from "@/components/ui/stagger-container"
import { StaggerItem } from "@/components/ui/stagger-item"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Highlight } from "@/components/ui/highlight"
import { memo } from "react"

const testimonials = [
  {
    quote:
      "Miguel transformó nuestra idea en una plataforma web que superó todas nuestras expectativas. Su enfoque técnico y comprensión de nuestras necesidades de negocio fue excepcional.",
    author: "Ana Martínez",
    position: "Comerciante de E-commerce",
    image: "/testimonio-2.png?height=100&width=100",
    highlights: ["transformó", "superó todas nuestras expectativas", "excepcional"],
  },
  {
    quote:
      "Trabajar con Miguel fue una experiencia increíble. Entregó nuestro proyecto a tiempo y dentro del presupuesto, y siempre estuvo disponible para responder nuestras preguntas.",
    author: "Carlos Rodríguez",
    position: "Gerente de Marketing",
    image: "/testimonio-1.png?height=100&width=100",
    highlights: ["experiencia increíble", "a tiempo", "dentro del presupuesto"],
  },
  {
    quote:
      "La aplicación web que Miguel desarrolló para nosotros ha sido fundamental para el crecimiento de nuestro negocio. Su atención al detalle y conocimiento técnico son impresionantes.",
    author: "Laura Sánchez",
    position: "Gerente de Producto",
    image: "/testimonio-3.png?height=100&width=100",
    highlights: ["fundamental", "crecimiento", "impresionantes"],
  },
]

export const Testimonials = memo(function Testimonials() {
  const { theme } = useTheme()

  const highlightKeywords = (text: string, keywords: string[]) => {
    let result = text
    keywords.forEach((keyword) => {
      result = result.replace(keyword, `<span class="text-primary font-medium">${keyword}</span>`)
    })
    return result
  }

  return (
    <section id="testimonios" className="py-20">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lo Que Dicen <Highlight type="primary">Mis Clientes</Highlight>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            <Highlight type="bold">Experiencias reales</Highlight> de personas que han{" "}
            <Highlight type="primary">confiado en mis servicios</Highlight>
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card
                  className={`border ${
                    theme === "light" ? "border-border/20 bg-white/80" : "border-border/40 bg-background/60"
                  } backdrop-blur-sm h-full`}
                >
                  <CardContent className="pt-6">
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="inline-block"
                    >
                      <Quote className="h-8 w-8 text-primary/60 mb-4" />
                    </motion.div>
                    <p className="text-lg mb-6">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: highlightKeywords(`"${testimonial.quote}"`, testimonial.highlights),
                        }}
                      />
                    </p>
                  </CardContent>
                  <CardFooter className="flex items-center gap-4">
                    <motion.div
                      className="relative w-12 h-12 rounded-full overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                        loading="lazy"
                      />
                    </motion.div>
                    <div>
                      <h4 className="font-medium">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
})
