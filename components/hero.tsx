"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Highlight } from "@/components/ui/highlight"
import { memo } from "react"

export const Hero = memo(function Hero() {
  const { theme } = useTheme()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className={`absolute inset-0 z-0 overflow-hidden ${theme === "light" ? "opacity-50" : "opacity-40"}`}>
        <img
          src="/200w.gif"
          alt="Background animation"
          className="absolute w-full h-full object-cover"
          style={{ filter: "blur(2px)" }}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-b ${
            theme === "light"
              ? "from-background/90 via-background/70 to-background/90"
              : "from-background/90 via-background/70 to-background/90"
          }`}
        ></div>
      </div>
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Highlight type="gradient">Transformando Ideas</Highlight> en{" "}
            <Highlight type="bold">Soluciones Digitales</Highlight>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            Desarrollo <Highlight type="primary">aplicaciones web</Highlight> y{" "}
            <Highlight type="primary">sitios a medida</Highlight> que impulsan el{" "}
            <Highlight type="bold">crecimiento de tu negocio</Highlight>
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <Link href="#contacto">
              <Button size="lg" className="gap-2 relative overflow-hidden group">
                <span className="relative z-10">Hablemos de tu proyecto</span>
                <motion.div
                  className="absolute inset-0 bg-primary/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <ArrowRight className="h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#proyectos">
              <Button size="lg" variant="outline" className="relative overflow-hidden group">
                <span className="relative z-10">Ver mi trabajo</span>
                <motion.div
                  className="absolute inset-0 bg-primary/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground/80" />
        </motion.div>
      </motion.div>
    </section>
  )
})
