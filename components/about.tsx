"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { StaggerContainer } from "@/components/ui/stagger-container"
import { StaggerItem } from "@/components/ui/stagger-item"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Highlight } from "@/components/ui/highlight"
import { memo } from "react"

export const About = memo(function About() {
  const { theme } = useTheme()

  return (
    <section id="sobre-mi" className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Sobre <Highlight type="primary">Mí</Highlight>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Soy Miguel Gómez, <Highlight type="bold">desarrollador Full Stack</Highlight> con más de{" "}
                <Highlight type="primary">2 años de experiencia</Highlight> creando soluciones digitales para empresas
                de todos los tamaños.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Mi enfoque combina <Highlight type="primary">excelencia técnica</Highlight> con una{" "}
                <Highlight type="bold">comprensión profunda</Highlight> de los objetivos de negocio, lo que me permite
                entregar proyectos que no solo funcionan perfectamente, sino que también generan{" "}
                <Highlight type="primary">resultados tangibles</Highlight>.
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <StaggerItem>
                <Card
                  className={`${
                    theme === "light" ? "bg-muted/50" : "bg-muted/30"
                  } border-none hover:bg-muted/70 transition-colors duration-300`}
                >
                  <CardContent className="p-4 flex items-start gap-3">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    </motion.div>
                    <div>
                      <h3 className="font-medium">Desarrollo Frontend</h3>
                      <p className="text-sm text-muted-foreground">
                        <Highlight type="primary">React</Highlight>, Next.js, Vue
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card
                  className={`${
                    theme === "light" ? "bg-muted/50" : "bg-muted/30"
                  } border-none hover:bg-muted/70 transition-colors duration-300`}
                >
                  <CardContent className="p-4 flex items-start gap-3">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    </motion.div>
                    <div>
                      <h3 className="font-medium">Desarrollo Backend</h3>
                      <p className="text-sm text-muted-foreground">
                        <Highlight type="primary">Node.js</Highlight>, Express, Python
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card
                  className={`${
                    theme === "light" ? "bg-muted/50" : "bg-muted/30"
                  } border-none hover:bg-muted/70 transition-colors duration-300`}
                >
                  <CardContent className="p-4 flex items-start gap-3">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    </motion.div>
                    <div>
                      <h3 className="font-medium">Bases de Datos</h3>
                      <p className="text-sm text-muted-foreground">
                        MongoDB, <Highlight type="primary">PostgreSQL</Highlight>, MySQL
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card
                  className={`${
                    theme === "light" ? "bg-muted/50" : "bg-muted/30"
                  } border-none hover:bg-muted/70 transition-colors duration-300`}
                >
                  <CardContent className="p-4 flex items-start gap-3">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    </motion.div>
                    <div>
                      <h3 className="font-medium">DevOps</h3>
                      <p className="text-sm text-muted-foreground">
                        Docker, <Highlight type="primary">AWS</Highlight>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            </StaggerContainer>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${
                theme === "light" ? "border-primary/10" : "border-primary/20"
              }`}
            >
              <Image
                src="/mi-foto.jpg?height=320&width=320"
                alt="Miguel Gómez"
                fill
                className="object-cover"
                loading="eager"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
})
