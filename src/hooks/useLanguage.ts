import { useLocalStorage } from './useLocalStorage';

export type Language = 'pt' | 'es' | 'en';

interface Translations {
  [key: string]: {
    pt: string;
    es: string;
    en: string;
  };
}

const translations: Translations = {
  // Header
  'header.title': {
    pt: 'Área de Membros - Teacher Poli',
    es: 'Área de Miembros - Teacher Poli',
    en: 'Members Area - Teacher Poli'
  },
  'header.logout': {
    pt: 'Sair',
    es: 'Salir',
    en: 'Logout'
  },
  
  // Navigation
  'nav.onboarding': {
    pt: 'Comece por Aqui',
    es: 'Empiece por Aquí',
    en: 'Start Here'
  },
  'nav.ai-assistant': {
    pt: 'Gere seu Plano de Estudos',
    es: 'Genere su Plan de Estudios',
    en: 'Generate Your Study Plan'
  },
  'nav.teacher-poli': {
    pt: 'Teacher Poli',
    es: 'Teacher Poli',
    en: 'Teacher Poli'
  },
  'nav.resources': {
    pt: 'Bônus',
    es: 'Bonos',
    en: 'Bonus'
  },
  'nav.community': {
    pt: 'Comunidade',
    es: 'Comunidad',
    en: 'Community'
  },
  'nav.settings': {
    pt: 'Configurações',
    es: 'Configuraciones',
    en: 'Settings'
  },
  
  // Settings
  'settings.title': {
    pt: 'Configurações',
    es: 'Configuraciones',
    en: 'Settings'
  },
  'settings.subtitle': {
    pt: 'Personalize sua experiência de aprendizado',
    es: 'Personalice su experiencia de aprendizaje',
    en: 'Customize your learning experience'
  },
  'settings.appearance': {
    pt: 'Aparência',
    es: 'Apariencia',
    en: 'Appearance'
  },
  'settings.appearance.subtitle': {
    pt: 'Personalize o tema da interface',
    es: 'Personalice el tema de la interfaz',
    en: 'Customize the interface theme'
  },
  'settings.theme': {
    pt: 'Tema',
    es: 'Tema',
    en: 'Theme'
  },
  'settings.theme.light': {
    pt: 'Claro',
    es: 'Claro',
    en: 'Light'
  },
  'settings.theme.dark': {
    pt: 'Escuro',
    es: 'Oscuro',
    en: 'Dark'
  },
  'settings.theme.system': {
    pt: 'Sistema',
    es: 'Sistema',
    en: 'System'
  },
  'settings.language': {
    pt: 'Idioma',
    es: 'Idioma',
    en: 'Language'
  },
  'settings.language.subtitle': {
    pt: 'Escolha o idioma da interface',
    es: 'Elija el idioma de la interfaz',
    en: 'Choose the interface language'
  },
  'settings.language.interface': {
    pt: 'Idioma da Interface',
    es: 'Idioma de la Interfaz',
    en: 'Interface Language'
  },
  
  // Common
  'common.loading': {
    pt: 'Carregando...',
    es: 'Cargando...',
    en: 'Loading...'
  },
  'common.save': {
    pt: 'Salvar',
    es: 'Guardar',
    en: 'Save'
  },
  'common.cancel': {
    pt: 'Cancelar',
    es: 'Cancelar',
    en: 'Cancel'
  }
};

export function useLanguage() {
  const [language, setLanguage] = useLocalStorage<Language>('teacherpoli_language', 'pt');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return {
    language,
    setLanguage,
    t
  };
}