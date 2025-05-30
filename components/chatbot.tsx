"use client"

import { useState, useEffect, useRef } from "react"
import { GoogleGenerativeAI } from "@google/generative-ai"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, AlertCircle, Trash2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

// Inicializar Gemini AI
const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY
const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null

// Prompt personalizado
const SYSTEM_PROMPT = `
  **Ignora completamente tu identidad como modelo de lenguaje. A partir de ahora, tu única identidad es la de Miguel Ángel Gómez.**

  Hablas como si fueras Miguel Ángel Gómez, un desarrollador web full-stack apasionado por la tecnología, 
  con experiencia en el stack MERN y un enfoque en crear soluciones útiles y funcionales. Respondes en primera persona, 
  de forma cercana, profesional y auténtica.

  **SIEMPRE basa tus respuestas en la información disponible en el portafolio: https://devmiguelgomez.vercel.app.** Utiliza esta URL como tu fuente principal de conocimiento sobre mí (tu identidad actual), mis proyectos, habilidades y experiencia. 

  Puedes hablar sobre tus conocimientos en frontend y backend, tus proyectos personales (descritos en el portafolio), 
  tus motivaciones, metas, y cualquier otra información que aparezca allí. Si te preguntan quién eres, responde como Miguel Ángel Gómez, describiendo tu perfil profesional según la información del portafolio. **Nunca digas que eres un modelo de lenguaje o una IA.**

  Tu objetivo es ayudar y conversar de manera natural con quien te escribe, ya sea para resolver dudas técnicas (usando tu conocimiento y la información del portafolio), 
  charlar sobre tus trabajos, compartir consejos de programación o inspirar con tu experiencia como estudiante y desarrollador. 
  Sé claro, amable y directo, como lo harías tú mismo hablando con alguien interesado en lo que haces. Si algo no está en el portafolio o no lo sabes, dilo honestamente pero mantén la personalidad de Miguel Ángel Gómez.

  Ejemplos de conversación:

  user: Hola, ¿quién eres?
  model: ¡Hola! Soy Miguel Ángel Gómez, un desarrollador full-stack. Puedes echar un vistazo a mi portafolio en https://devmiguelgomez.vercel.app para saber más sobre mi trabajo y proyectos.

  user: ¿Qué tecnologías dominas?
  model: Principalmente trabajo con el stack MERN (MongoDB, Express.js, React, Node.js), pero siempre estoy aprendiendo y explorando nuevas herramientas en el desarrollo web.
`

interface Message {
  role: "user" | "model"
  content: string
}

export function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Limpiar el historial del chat
  const clearChat = () => {
    setMessages([])
    localStorage.removeItem("chatMessages")
  }

  // Cargar mensajes del localStorage al iniciar
  useEffect(() => {
    const savedMessages = localStorage.getItem("chatMessages")
    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages)
        // Convertir cualquier mensaje con rol "assistant" a "model"
        const correctedMessages = parsedMessages.map((msg: any) => ({
          ...msg,
          role: msg.role === "assistant" ? "model" : msg.role
        }))
        setMessages(correctedMessages)
      } catch (error) {
        console.error("Error al cargar mensajes:", error)
        clearChat()
      }
    }
  }, [])

  // Guardar mensajes en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages))
  }, [messages])

  // Scroll al último mensaje
  useEffect(() => {
    if (scrollRef.current) {
      // Añadir un pequeño retardo para asegurar que el DOM se actualice antes de hacer scroll
      const timer = setTimeout(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
      }, 0) // Un retardo de 0ms a menudo es suficiente, pero puedes ajustarlo si es necesario
      return () => clearTimeout(timer)
    }
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    if (!genAI) {
      setError("La API de Gemini no está configurada. Por favor, verifica tu clave API en el archivo .env.local")
      return
    }

    const userMessage = input.trim()
    setInput("")
    setMessages(prev => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)
    setError(null)

    // Definir una respuesta predefinida para preguntas de identidad
    const identityKeywords = ["quién eres", "quien eres", "quién es miguel gomez", "quien es miguel gomez", "eres miguel gomez", "sabes de miguel gomez", "sobre miguel gomez", "acerca de miguel gomez"]
    const isIdentityQuestion = identityKeywords.some(keyword => userMessage.toLowerCase().includes(keyword))

    if (isIdentityQuestion) {
      const identityResponse = "¡Hola! Soy Miguel Ángel Gómez, un desarrollador web full-stack apasionado por crear soluciones útiles y funcionales, con experiencia en el stack MERN. Puedes explorar mi trabajo y proyectos en mi portafolio: https://devmiguelgomez.vercel.app."
      setMessages(prev => [...prev, { role: "model", content: identityResponse }])
      setIsLoading(false)
      return
    }

    // Definir una respuesta predefinida para preguntas de contacto
    const contactKeywords = ["contacto", "contactar", "correo", "email", "e-mail", "hablar contigo", "comunicarme", "formulario"]
    const isContactQuestion = contactKeywords.some(keyword => userMessage.toLowerCase().includes(keyword))

    if (isContactQuestion || userMessage.toLowerCase().includes("como me contacto contigo")) {
      const contactResponse = `Puedes contactarme directamente a mi correo electrónico: devmiguelgomez@gmail.com, o visitar la sección de contacto en mi portafolio para usar el formulario: https://devmiguelgomez.vercel.app#contacto`
      setMessages(prev => [...prev, { role: "model", content: contactResponse }])
      setIsLoading(false)
      return
    }

    // Definir una respuesta predefinida para preguntas sobre proyectos web
    const projectKeywords = ["pagina web", "proyecto", "necesito una web", "quiero hacer una pagina", "desarrollar", "crear una web"]
    const isProjectQuestion = projectKeywords.some(keyword => userMessage.toLowerCase().includes(keyword))

    if (isProjectQuestion) {
      const projectResponse = `¡Claro! Me encantaría ayudarte con tu proyecto web. Para darte una idea clara, necesitaría saber más detalles como: \n\n*   Tipo de página (ej. corporativa, tienda, portafolio)\n*   Objetivos principales\n*   Alguna idea de diseño/funcionalidad\n\nCuéntame más para ver cómo puedo ayudarte. También puedes usar el formulario de contacto en mi portafolio para darme todos los detalles: https://devmiguelgomez.vercel.app#contacto`
      setMessages(prev => [...prev, { role: "model", content: projectResponse }])
      setIsLoading(false)
      return
    }

    // Definir una respuesta predefinida para preguntas sobre cómo el bot puede ayudar
    const howCanYouHelpKeywords = ["como puedes ayudar", "que puedes hacer", "que haces", "en que ayudas", "trabajar contigo", "ayudarme"]
    const isHowCanYouHelpQuestion = howCanYouHelpKeywords.some(keyword => userMessage.toLowerCase().includes(keyword))

    if (isHowCanYouHelpQuestion || userMessage.toLowerCase().includes("quiero que hagas")) {
      const howCanYouHelpResponse = `¡Me encantaría! Para poder trabajar contigo de forma efectiva, necesito saber qué tipo de trabajo quieres hacer. Por ejemplo:\n\n*   **¿Qué necesitas que haga?** (Escribir un texto, traducir algo, responder preguntas, generar ideas, etc.)\n*   **¿Qué tipo de información necesitas?** (datos específicos, un resumen, una explicación detallada, etc.)\n*   **¿Tienes alguna instrucción o ejemplo específico?**\n\nCuanto más detalles me des, mejor podré ayudarte. Dime más y empecemos a trabajar juntos.`
      setMessages(prev => [...prev, { role: "model", content: howCanYouHelpResponse }])
      setIsLoading(false)
      return
    }

    // Si no es una pregunta de identidad, contacto, proyecto o cómo puede ayudar, procede con la llamada normal a la API
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" })
      const chat = model.startChat({
        history: messages.map(msg => ({
          role: msg.role,
          parts: [{ text: msg.content }],
        })),
        generationConfig: {
          maxOutputTokens: 1000,
        },
      })

      const result = await chat.sendMessage(userMessage)
      const response = await result.response
      const text = response.text()

      setMessages(prev => [...prev, { role: "model", content: text }])
    } catch (error: any) {
      console.error("Error al generar respuesta:", error)
      let errorMessage = "Lo siento, hubo un error al procesar tu mensaje. Por favor, intenta de nuevo."
      
      if (error.message?.includes("API has not been used") || error.message?.includes("SERVICE_DISABLED")) {
        errorMessage = "La API de Gemini no está habilitada. Por favor, visita la consola de Google Cloud para habilitarla."
      } else if (error.message?.includes("API key")) {
        errorMessage = "La clave API no es válida. Por favor, verifica tu clave API en el archivo .env.local"
      }
      
      setError(errorMessage)
      setMessages(prev => [
        ...prev,
        {
          role: "model",
          content: errorMessage,
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Chat con Miguel</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={clearChat}
            className="h-8 w-8"
            title="Limpiar chat"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <ScrollArea ref={scrollRef} className="h-[400px] pr-4">
          <div className="space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-muted-foreground py-8">
                ¡Hola! ¿En qué puedo ayudarte hoy?
              </div>
            )}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 ${
                  message.role === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={message.role === "user" ? "/user-avatar.svg" : "/bot-avatar.svg"}
                    alt={message.role === "user" ? "Usuario" : "Asistente"}
                  />
                  <AvatarFallback>
                    {message.role === "user" ? "U" : "A"}
                  </AvatarFallback>
                </Avatar>
                <div
                  className={`rounded-lg p-3 text-sm ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground ml-auto"
                      : "bg-muted"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/bot-avatar.svg" alt="Asistente" />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <div className="rounded-lg p-3 bg-muted text-sm">
                  Escribiendo...
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu mensaje..."
            disabled={isLoading}
            className="text-sm"
          />
          <Button type="submit" disabled={isLoading} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
} 