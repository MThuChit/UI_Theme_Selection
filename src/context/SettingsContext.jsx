import { createContext, useState, useEffect, useContext } from 'react';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('app-settings');
    return saved ? JSON.parse(saved).theme : 'light';
  });

  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('app-settings');
    return saved ? JSON.parse(saved).language : 'en';
  });

  useEffect(() => {
    localStorage.setItem('app-settings', JSON.stringify({ theme, language }));
  }, [theme, language]);

  const resetSettings = () => {
    setTheme('light');
    setLanguage('en');
  };

  return (
    <SettingsContext.Provider value={{ theme, language, setTheme, setLanguage, resetSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);