import Head from 'next/head';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Layout({ children, title = 'Mi Portafolio', aboutRef, projectsRef, contactRef }) {
  const { darkMode } = useContext(ThemeContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const scrollToSection = (ref) => {
    setMobileMenuOpen(false);
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Portafolio profesional de Miguel Gómez" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-xl font-bold text-gray-900 dark:text-white">
              Mi Portafolio
            </a>
            
            <div className="flex items-center space-x-4">
              {/* Navegación para escritorio */}
              <nav className="hidden md:block">
                <ul className="flex space-x-6">
                  <li>
                    <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      Inicio
                    </a>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection(aboutRef)}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      Sobre Mí
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection(projectsRef)}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      Proyectos
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => scrollToSection(contactRef)}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      Contacto
                    </button>
                  </li>
                </ul>
              </nav>
              
              {/* Botón de tema */}
              <ThemeToggle />
              
              {/* Botón de menú móvil */}
              <button 
                className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Menú móvil */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-100 dark:border-gray-800">
              <ul className="flex flex-col space-y-4">
                <li>
                  <a 
                    href="#home" 
                    className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection(aboutRef)}
                    className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Sobre Mí
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection(projectsRef)}
                    className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Proyectos
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection(contactRef)}
                    className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Contacto
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Hecho con ❤️ por Miguel Gómez.
          </p>
        </div>
      </footer>
    </div>
  );
}