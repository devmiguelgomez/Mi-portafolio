import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"


const inter = Inter({ subsets: ["latin"] })

const siteUrl = "https://devmiguelgomez.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Miguel Ángel Gómez | Desarrollador Web Full Stack en Cali, Colombia",
    template: "%s | Miguel Ángel Gómez - Full Stack Developer",
  },
  description:
    "Desarrollador Web Full Stack especializado en el stack MERN (MongoDB, Express, React, Node.js) y Next.js. Creo sitios web, aplicaciones web a medida, paneles administrativos y sistemas de automatización para empresas en Cali, Colombia y el mundo.",
  keywords: [
    "Desarrollador Full Stack Cali",
    "Programador Web Colombia",
    "React Developer",
    "Next.js",
    "Node.js",
    "MERN Stack",
    "Desarrollo Web Cali",
    "Aplicaciones Web a medida",
    "Freelance Colombia",
    "Desarrollador Web Valle del Cauca",
    "Paneles Administrativos",
    "API REST",
  ],
  authors: [{ name: "Miguel Ángel Gómez", url: siteUrl }],
  creator: "Miguel Ángel Gómez",
  publisher: "Miguel Ángel Gómez",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    title: "Miguel Ángel Gómez | Desarrollador Web Full Stack",
    description:
      "Especialista en MERN Stack y Next.js. Desarrolla sitios web, e-commerce, paneles administrativos y automatizaciones para empresas en Cali y el mundo.",
    siteName: "Portafolio Miguel Ángel Gómez",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Miguel Ángel Gómez - Desarrollador Web Full Stack en Cali, Colombia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miguel Ángel Gómez | Desarrollador Full Stack",
    description:
      "Especialista en MERN Stack. Desarrollo de sitios web, apps a medida y automatizaciones para impulsar tu negocio.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "hou10qwq7OmtpbChxt26UyJaGG0z71Y6lD4JFEf6zjc",
  },
}

// Schema.org Person — datos estructurados para Google
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Miguel Ángel Gómez",
  url: siteUrl,
  jobTitle: "Desarrollador Web Full Stack",
  description:
    "Especializado en el ecosistema MERN (MongoDB, Express, React, Node.js) y Next.js. Servicios de desarrollo web en Cali, Colombia y de forma remota para el mundo.",
  knowsAbout: ["React", "Next.js", "Node.js", "MongoDB", "PostgreSQL", "TypeScript", "Express", "Docker"],
  areaServed: [
    { "@type": "City", name: "Cali" },
    { "@type": "AdministrativeArea", name: "Valle del Cauca" },
    { "@type": "Country", name: "Colombia" },
    "Servicios remotos a nivel global",
  ],
  sameAs: [
    "https://github.com/devmiguelgomez/",
    "https://www.linkedin.com/in/devmiguelgomez/",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
