import { motion } from 'framer-motion';
import Layout from './components/Layout'
import Link from 'next/link'
import SocialLinks from './components/SocialLinks';
export default function Contact() {
  return (
    <Layout>
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8"
    >
      <h1 className="text-4xl font-bold text-gray-800">Contacto</h1>
      <p className="text-lg text-gray-600 mt-4 max-w-2xl text-center">
        Si deseas ponerte en contacto conmigo, puedes escribirme a través de mis redes sociales o enviarme un correo electrónico. ¡Estoy abierto a nuevas oportunidades y proyectos interesantes!
      </p>

    {/* Sección de redes sociales */}
    <SocialLinks />
    </motion.div>
    </Layout>
  );
}
