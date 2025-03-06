import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <nav className="w-full p-4 flex justify-between items-center bg-white dark:bg-gray-800 shadow">
        <span className="text-xl font-bold text-gray-800 dark:text-white">Mi Portafolio</span>
        <div className="space-x-4">
          <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
            Inicio
          </Link>
          <Link href="/projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
            Proyectos
          </Link>
          <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
            Sobre mí
          </Link>
          <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
            Contacto
          </Link>
        </div>
      </nav>

      {/* Aquí se mostrará el contenido específico de cada página */}
      <main className="p-8">{children}</main>
    </div>
  )
}
