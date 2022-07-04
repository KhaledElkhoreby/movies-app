import { changeLanguage } from 'i18next';
import Cookies from 'js-cookie';
import { createContext, useState } from 'react';

export const SettingContext = createContext({
  lang: 'en',
});

export default function SettingProvieder({ children }) {
  const currentLanguageCode = Cookies.get('i18next') || 'en';
  const [lang, setLang] = useState(currentLanguageCode);
  changeLanguage(lang);
  return (
    <SettingContext.Provider value={{ lang, setLang }}>
      {children}
    </SettingContext.Provider>
  );
}
