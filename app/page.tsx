import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Cta } from "@/components/cta"
import { ScrollIndicator } from "@/components/scroll-indicator"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollIndicator />
      <Header />
      <main className="flex-1">
        <Hero />
        <Testimonials />
        <Services />
        <Cta
          title="¿Necesitas un desarrollador para tu próximo proyecto?"
          description="Contáctame para discutir cómo puedo ayudarte a llevar tu idea al siguiente nivel."
          buttonText="Hablemos"
          buttonLink="#contacto"
        />
        <About />
        <Projects />
        <Cta
          title="¿Listo para transformar tu negocio con tecnología?"
          description="Juntos podemos crear soluciones digitales que impulsen tu crecimiento."
          buttonText="Contáctame"
          buttonLink="#contacto"
        />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
