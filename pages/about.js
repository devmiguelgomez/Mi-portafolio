import Layout from './components/Layout'
export default function About() {
    return (
        <Layout>
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 p-8">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Sobre Mí</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          ¡Hola! Soy Miguel Gómez, estudiante de Ingeniería de Sistemas en sexto semestre y Técnico en Sistemas, con una fuerte pasión por la tecnología y el desarrollo de experiencias digitales innovadoras.
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mt-4">
          Me especializo en el desarrollo de páginas web y proyectos multimedia, utilizando tecnologías modernas como React, Next.js y Tailwind CSS. Además, cuento con sólidos conocimientos en bases de datos como SQL y MongoDB, lo que me permite crear aplicaciones completas y optimizadas, desde el frontend hasta el backend.
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mt-4">
          También tengo experiencia en el uso de servicios en la nube de AWS, lo que me ha permitido desplegar, escalar y optimizar proyectos en entornos cloud.
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mt-4">
          Siempre busco nuevos desafíos y oportunidades de aprendizaje para seguir mejorando mis habilidades y aportar valor a cada proyecto en el que participo.
          </p>
        </div>
      </div>
      </Layout>
    )
  }
  