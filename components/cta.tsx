"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/ui/animated-section"
import { useTheme } from "next-themes"
import { memo } from "react"

interface CtaProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

export const Cta = memo(function Cta({ title, description, buttonText, buttonLink }: CtaProps) {
  const { theme } = useTheme()

  // Resaltar palabras clave en el título y descripción
  const highlightedTitle = title
    .replace("desarrollador", '<span class="text-primary font-medium">desarrollador</span>')
    .replace("transformar", '<span class="text-primary font-medium">transformar</span>')

  const highlightedDescription = description
    .replace("idea", '<span class="text-primary font-medium">idea</span>')
    .replace("soluciones digitales", '<span class="text-primary font-medium">soluciones digitales</span>')
    .replace("impulsen", '<span class="text-primary font-medium">impulsen</span>')

  return (
    <section
      className={`py-16 ${
        theme === "light" ? "bg-primary/2 border-y border-primary/5" : "bg-primary/5 border-y border-primary/10"
      } relative overflow-hidden`}
    >
      <motion.div
        className={`absolute inset-0 ${
          theme === "light"
            ? "bg-gradient-to-r from-primary/2 via-primary/5 to-primary/2"
            : "bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5"
        }`}
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <div className="container relative z-10">
        <AnimatedSection className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: highlightedTitle }} />
          <p
            className="text-lg text-muted-foreground mb-8 max-w-2xl"
            dangerouslySetInnerHTML={{ __html: highlightedDescription }}
          />
          <Link href={buttonLink}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="relative overflow-hidden group">
                <span className="relative z-10">{buttonText}</span>
                <motion.div
                  className="absolute inset-0 bg-primary/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
})
