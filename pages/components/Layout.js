import Head from 'next/head';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Layout({ children, title = 'Mi Portafolio' }) {
  const { darkMode } = useContext(ThemeContext);
  
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Mi portafolio profesional" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
              Mi Portafolio
            </Link>
            
            <div className="flex items-center space-x-6">
              <nav>
                <ul className="hidden md:flex space-x-6">
                  <li>
                    <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      Sobre Mí
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      Proyectos
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      Contacto
                    </Link>
                  </li>
                </ul>
              </nav>
              
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Mi Portafolio. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}