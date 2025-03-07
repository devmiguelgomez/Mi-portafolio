import { motion } from 'framer-motion';
import Layout from './components/Layout'

// Lista de proyectos (podrías sacarlos de un archivo o base de datos si crece mucho)
const projects = [
  {
    title: 'Portafolio Personal',
    description: 'Mi portafolio personal creado con Next.js y Tailwind CSS.',
    tags: ['Next.js', 'Tailwind CSS'],
    vercelLink: 'https://mi-portafolio.vercel.app',
    githubLink: 'https://github.com/tu-usuario/mi-portafolio'
  },
  {
    title: 'Dashboard de Ventas',
    description: 'Dashboard para análisis de ventas usando React, MongoDB y AWS Lambda.',
    tags: ['React', 'MongoDB', 'AWS Lambda'],
    vercelLink: 'https://dashboard-ventas.vercel.app',
    githubLink: 'https://github.com/tu-usuario/dashboard-ventas'
  },
  {
    title: 'Gestor de Inventario',
    description: 'Sistema para gestionar inventario en línea con backend en AWS.',
    tags: ['React', 'AWS', 'Node.js'],
    vercelLink: 'https://gestor-inventario.vercel.app',
    githubLink: 'https://github.com/tu-usuario/gestor-inventario'
  }
];

export default function Projects() {
  return (
    <Layout>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8"
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Proyectos</h1>
      
      <div className="space-y-6 w-full max-w-3xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="p-6 bg-white rounded-lg shadow-lg border border-gray-200"
          >
            <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
            <p className="text-gray-600 mt-2">{project.description}</p>

            <div className="flex flex-wrap mt-3 gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 flex space-x-4">
              <a
                href={project.vercelLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline font-medium"
              >
                Ver en Vercel
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:underline font-medium"
              >
                Código en GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
    </Layout>
  );
}
