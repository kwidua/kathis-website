import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  setTheme: (theme: 'light' | 'dark') => {},
});

export const ThemeProvider = ({ children } : { children: React.ReactNode }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const appliedTheme = storedTheme || systemTheme;
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(appliedTheme);
    setTheme(appliedTheme);
  }, []);

  const updateTheme = (newTheme: 'light' | 'dark') => {
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeSwitcher = () => useContext(ThemeContext);