import Layout from './components/Layout'

export default function Home() {
  return (
    <Layout>
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center text-center p-4">
      {/* Navegación */}
      <nav className="absolute top-0 left-0 w-full p-4 flex justify-between items-center">
        <span className="text-xl font-bold text-gray-800 dark:text-white">Mi Portafolio</span>
        <div className="space-x-4">
          <a href="/projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Proyectos</a>
          <a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Sobre mí</a>
          <a href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Contacto</a>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="flex-1 flex flex-col items-center justify-center fade-in">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 dark:text-white mb-4">
          Tu Nombre Aquí
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
          Soy un desarrollador web especializado en crear experiencias digitales increíbles. 
        </p>

        <div className="mt-6 space-x-4">
          <a href="/projects" className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            Ver Proyectos
          </a>
          <a href="/contact" className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            Contactarme
          </a>
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
