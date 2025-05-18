"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code, Github, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export function Footer() {
  const { theme } = useTheme()

  return (
    <footer className={`border-t ${theme === "light" ? "bg-muted/10" : "bg-muted/30"}`}>
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-2 text-xl font-bold mb-4">
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                <Code className="h-6 w-6" />
              </motion.div>
              <span>Miguel Gómez</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Desarrollador Full Stack especializado en crear soluciones digitales que impulsan el crecimiento de
              negocios.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Github className="h-5 w-5" />, label: "GitHub", href: "https://github.com/devmiguelgomez/" },
                { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "https://www.linkedin.com/in/devmiguelgomez/" },
              ].map((social, index) => (
                <motion.div key={index} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <Link href={social.href} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" aria-label={social.label}>
                      {social.icon}
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-medium text-lg mb-4">Enlaces rápidos</h3>
            <nav className="flex flex-col gap-2">
              {["Servicios", "Sobre Mí", "Proyectos", "Testimonios", "Contacto"].map((item, index) => (
                <motion.div key={item} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="border-t"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="container py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Miguel Gómez. Todos los derechos reservados.
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
