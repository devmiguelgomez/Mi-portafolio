import Layout from './components/Layout'
import SocialLinks from './components/SocialLinks';
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center text-center p-4">
      {/* Navegación */}


      {/* Contenido principal */}
      <main className="flex-1 flex flex-col items-center justify-center fade-in">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 dark:text-white mb-4">
          Miguel Gomez
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
          Soy un desarrollador web especializado en crear experiencias digitales increíbles. 
        </p>

        <div className="mt-6 space-x-4">
        <Link href="/projects" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Ver Proyectos</Link>
        <Link href="/contact" className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">Contáctame</Link>
      {/* Sección de redes sociales */}
      <SocialLinks />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-gray-500 dark:text-gray-400 text-sm">
        © 2025 Tu Nombre. Todos los derechos reservados.
      </footer>

      {/* Animación de fade-in */}
      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 1.2s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
    </Layout>
  )
}
