import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Inicializar con null para evitar discrepancias de hidratación
  const [darkMode, setDarkMode] = useState(null);
  const [mounted, setMounted] = useState(false);

  // Este efecto se ejecuta solo en el cliente
  useEffect(() => {
    setMounted(true);
    
    // Verificar preferencia guardada
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      // Detectar preferencia del sistema
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
    }
  }, []);

  // Este efecto aplica el tema cuando cambia
  useEffect(() => {
    if (darkMode === null || !mounted) return;
    
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode, mounted]);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  // Si no estamos montados aún, renderizamos sin clase dark para evitar flash
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};