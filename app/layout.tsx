import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { FloatingChat } from "@/components/floating-chat"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Miguel Gómez | Desarrollador Full Stack",
  description:
    "Desarrollo de sitios web, aplicaciones web, integración de APIs, paneles administrativos y automatización de procesos.",
    generator: 'Miguel Gómez',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <FloatingChat />
        </ThemeProvider>
      </body>
    </html>
  )
}
