import { createContext, useState } from 'react';

export const SettingContext = createContext({
  lang: 'en',
});

export default function SettingProvieder({ children }) {
  const [lang, setLang] = useState('en');
  return (
    <SettingContext.Provider value={{ lang, setLang }}>
      {children}
    </SettingContext.Provider>
  );
}
