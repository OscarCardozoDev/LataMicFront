import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

console.log('🌐 Inicializando i18n...');

// Recursos de traducción para LataMic
const resources = {
  es: {
    translation: {
      common: {
        new: 'Nuevo',
        loading: 'Cargando...',
        imageError: 'Error al cargar imagen',
        error: 'Error',
        retry: 'Reintentar',
      },
      comics: {
        openComic: 'Abrir comic',
        addToFavorites: 'Agregar a favoritos',
        removeFromFavorites: 'Quitar de favoritos',
        moreOptions: 'Más opciones',
      },
      library: {
        title: 'Biblioteca',
        searchPlaceholder: '¿Qué vamos a leer?',
        loading: 'Cargando comics...',
        loadingMore: 'Cargando más comics...',
        error: 'Error al cargar comics',
        empty: {
          title: 'No se encontraron comics',
          subtitle: 'Intenta ajustar tus filtros de búsqueda',
        },
      },
    },
  },
  en: {
    translation: {
      common: {
        new: 'New',
        loading: 'Loading...',
        imageError: 'Image error',
        error: 'Error',
        retry: 'Retry',
      },
      comics: {
        openComic: 'Open comic',
        addToFavorites: 'Add to favorites',
        removeFromFavorites: 'Remove from favorites',
        moreOptions: 'More options',
      },
      library: {
        title: 'Library',
        searchPlaceholder: 'What are we going to read?',
        loading: 'Loading comics...',
        loadingMore: 'Loading more comics...',
        error: 'Error loading comics',
        empty: {
          title: 'No comics found',
          subtitle: 'Try adjusting your search filters',
        },
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // Español por defecto para LataMic
    fallbackLng: 'en',
    
    interpolation: {
      escapeValue: false,
    },
    
    // Configuración para React Native
    react: {
      useSuspense: false,
    },
    
    debug: __DEV__, // Solo en desarrollo
  })
  .then(() => {
    console.log('✅ i18n inicializado correctamente');
  })
  .catch((error) => {
    console.error('❌ Error inicializando i18n:', error);
  });

export default i18n;