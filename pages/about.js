import Layout from './components/Layout'
export default function About() {
    return (
        <Layout>
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 p-8">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Sobre Mí</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            ¡Hola! Soy [Tu Nombre], un desarrollador apasionado por la creación de experiencias digitales impactantes. 
            Me especializo en tecnologías web modernas como React, Next.js y Tailwind CSS.
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mt-4">
            Siempre estoy buscando nuevos retos y oportunidades para mejorar mis habilidades y colaborar con personas talentosas.
          </p>
        </div>
      </div>
      </Layout>
    )
  }
  