import { motion } from 'framer-motion';
import Layout from './components/Layout'
export default function About() {
  return (
    <Layout>
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8"
    >
      <h1 className="text-4xl font-bold text-gray-800">Sobre Mí</h1>
      <p className="text-lg text-gray-600 mt-4 max-w-2xl text-center">
        ¡Hola! Soy Miguel Gómez, estudiante de Ingeniería de Sistemas (6to semestre), técnico en sistemas y desarrollador multimedia.
        Me especializo en crear experiencias digitales modernas utilizando React, Next.js y Tailwind CSS. También tengo experiencia en bases de datos SQL y MongoDB, así como en el uso de servicios en la nube con AWS.
      </p>
    </motion.div>
    </Layout>
  );
}
