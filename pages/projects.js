import { motion } from 'framer-motion';
import Layout from './components/Layout'
export default function Projects() {
  return (
    <Layout>
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8"
    >
      <h1 className="text-4xl font-bold text-gray-800">Proyectos</h1>
      <p className="text-lg text-gray-600 mt-4 max-w-2xl text-center">
        Aquí puedes ver algunos de los proyectos en los que he trabajado. Desde aplicaciones web dinámicas hasta proyectos multimedia, aplicando tecnologías como React, Next.js, Tailwind CSS y AWS.
      </p>

      <div className="mt-6 space-y-4">
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="p-4 bg-white shadow rounded-lg w-full max-w-md"
        >
          <h2 className="text-xl font-bold text-gray-800">Proyecto 1: Portfolio Personal</h2>
          <p className="text-gray-600">Desarrollo de mi portafolio con Next.js y Tailwind CSS.</p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="p-4 bg-white shadow rounded-lg w-full max-w-md"
        >
          <h2 className="text-xl font-bold text-gray-800">Proyecto 2: Dashboard de ventas</h2>
          <p className="text-gray-600">Aplicación de análisis de ventas usando React y MongoDB.</p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="p-4 bg-white shadow rounded-lg w-full max-w-md"
        >
          <h2 className="text-xl font-bold text-gray-800">Proyecto 3: Sistema de Gestión</h2>
          <p className="text-gray-600">Sistema interno para manejo de inventario con AWS Lambda.</p>
        </motion.div>
      </div>
    </motion.div>
    </Layout>
  );
}
