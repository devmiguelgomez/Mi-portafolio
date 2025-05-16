import { useState, useEffect } from 'react';
import Head from 'next/head';
import ThemeToggle from './ThemeToggle';
import SocialLinks from './SocialLinks';

export default function Layout({ children, title = 'Mi Portafolio', aboutRef, projectsRef, certificationsRef, contactRef }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm transition-colors duration-300">
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
                      onClick={() => scrollToSection(certificationsRef)}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      Certificaciones
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
                {mobileMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          {/* Menú móvil */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg animate-fadeIn">
              <ul className="space-y-4">
                <li>
                  <a
                    href="#home"
                    className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
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
                    onClick={() => scrollToSection(certificationsRef)}
                    className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    Certificaciones
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

      <footer className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Miguel Gómez</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Desarrollador MERN Stack especializado en crear aplicaciones web modernas con React, Node.js, MongoDB y Express.
              </p>
              <SocialLinks size="small" />
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Tecnologías</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>Desarrollo Frontend con React</li>
                <li>Desarrollo Backend con Node.js</li>
                <li>MongoDB y Bases de datos NoSQL</li>
                <li>UI/UX Design</li>
                <li>MERN Stack completo</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li><a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400">Inicio</a></li>
                <li><button onClick={() => scrollToSection(aboutRef)} className="hover:text-blue-600 dark:hover:text-blue-400">Sobre Mí</button></li>
                <li><button onClick={() => scrollToSection(projectsRef)} className="hover:text-blue-600 dark:hover:text-blue-400">Proyectos</button></li>
                <li><button onClick={() => scrollToSection(certificationsRef)} className="hover:text-blue-600 dark:hover:text-blue-400">Certificaciones</button></li>
                <li><button onClick={() => scrollToSection(contactRef)} className="hover:text-blue-600 dark:hover:text-blue-400">Contacto</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Desarrollado con pasión por Miguel Gómez | Desarrollador MERN Stack & Diseñador UI/UX
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}