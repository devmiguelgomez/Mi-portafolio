"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, AlertCircle } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Highlight } from "@/components/ui/highlight"
import { memo } from "react"
import { sendEmail } from "@/services/emailService"

export const Contact = memo(function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ success: true, message: '' })
  const { theme } = useTheme()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLInputElement).value
    };

    try {
      const result = await sendEmail(formData);
      setSubmitStatus(result);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error en el envío:', error);
      setSubmitStatus({
        success: false,
        message: 'Ocurrió un error inesperado. Por favor, intenta de nuevo.'
      });
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contacto" className={`py-20 ${theme === "light" ? "bg-muted/10" : "bg-muted/30"}`}>
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hablemos de <Highlight type="primary">Tu Proyecto</Highlight>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estoy listo para ayudarte a llevar tu idea al <Highlight type="bold">siguiente nivel</Highlight>
          </p>
        </AnimatedSection>

        <div className="max-w-2xl mx-auto">
          <AnimatedSection delay={0.2}>
            <Card
              className={`border ${
                theme === "light" ? "border-border/20 bg-white/80" : "border-border/40 bg-background/60"
              } backdrop-blur-sm`}
            >
              <CardHeader>
                <CardTitle>Envíame un mensaje</CardTitle>
                <CardDescription>
                  Completa el formulario y me pondré en contacto contigo{" "}
                  <Highlight type="primary">lo antes posible</Highlight>.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    className="text-center py-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${
                        submitStatus.success ? "bg-primary/20 text-primary" : "bg-destructive/20 text-destructive"
                      } mb-4`}
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      {submitStatus.success ? <Send className="h-8 w-8" /> : <AlertCircle className="h-8 w-8" />}
                    </motion.div>
                    <h3 className="text-xl font-medium mb-2">
                      {submitStatus.success ? "¡Mensaje enviado!" : "No se pudo enviar"}
                    </h3>
                    <p className="text-muted-foreground">
                      {submitStatus.success 
                        ? "Gracias por contactarme. Te responderé a la brevedad." 
                        : submitStatus.message}
                    </p>
                    {!submitStatus.success && (
                      <Button 
                        variant="outline" 
                        className="mt-4"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Intentar de nuevo
                      </Button>
                    )}
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <label htmlFor="name" className="text-sm font-medium">
                          Nombre
                        </label>
                        <Input id="name" required placeholder="Tu nombre" />
                      </motion.div>
                      <motion.div
                        className="space-y-2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input id="email" type="email" required placeholder="tu@email.com" />
                      </motion.div>
                    </div>
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <label htmlFor="subject" className="text-sm font-medium">
                        Asunto
                      </label>
                      <Input id="subject" required placeholder="¿En qué puedo ayudarte?" />
                    </motion.div>
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <label htmlFor="message" className="text-sm font-medium">
                        Mensaje
                      </label>
                      <Textarea id="message" required placeholder="Cuéntame sobre tu proyecto..." rows={5} />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                      </Button>
                    </motion.div>
                  </form>
                )}
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
})
