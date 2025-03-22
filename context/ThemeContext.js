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
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setDarkMode(savedTheme === 'dark');
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(prefersDark);
      }
    } catch (error) {
      console.error('Error accediendo a localStorage:', error);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    try {
      document.documentElement.classList.toggle('dark', darkMode);
      localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    } catch (error) {
      console.error('Error al modificar el tema:', error);
    }
  }, [darkMode, mounted]);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};