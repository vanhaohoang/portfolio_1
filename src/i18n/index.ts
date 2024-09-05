import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en';
import vn from './locales/vn';

export const defaultNS = 'translation';
export const resources = { en, vn };

const preferredLanguage = navigator.language === 'vi' ? 'vn' : 'en'; 
const storedLanguage = localStorage.getItem('language');

console.log('Language', preferredLanguage, storedLanguage);
i18n.use(initReactI18next).init({
  resources,
  defaultNS,
  lng: storedLanguage || preferredLanguage,
});

export default i18n;