import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({
  darkMode: false,
  toggleTheme: () => {}
});

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Intentar recuperar preferencia de tema
    try {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (savedTheme === 'dark') {
        setDarkMode(true);
      } else if (savedTheme === 'light') {
        setDarkMode(false);
      } else {
        setDarkMode(prefersDark);
      }
    } catch (error) {
      console.error('Error al acceder a localStorage:', error);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Aplicar tema
    document.documentElement.classList.toggle('dark', darkMode);
    
    // Guardar preferencia
    try {
      localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    } catch (error) {
      console.error('Error al guardar tema en localStorage:', error);
    }
  }, [darkMode, mounted]);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  // SSR safe rendering
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};