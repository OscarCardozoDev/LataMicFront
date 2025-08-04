// Barrel exports para constants
export { default as Colors } from './Colors';
export * from './Fonts';
export * from './Dimensions';

// Re-exportar tipos y constantes específicas que se usan frecuentemente
export type {
  // Agregar tipos específicos aquí cuando los creemos
} from './Colors';

// Constantes adicionales para LataMic
export const APP_CONFIG = {
  name: 'LataMic',
  version: '1.0.0',
  description: 'Plataforma de Comics Latinos',
  supportEmail: 'support@latamic.com',
  
  // URLs y endpoints base
  apiBaseUrl: process.env.REACT_APP_API_URL || 'http://localhost:3000',
  webUrl: process.env.REACT_APP_WEB_URL || 'http://localhost:3001',
  
  // Configuraciones de la app
  maxImageSize: 5 * 1024 * 1024, // 5MB
  maxImagesPerChapter: 50,
  supportedImageFormats: ['jpg', 'jpeg', 'png', 'webp'],
  
  // Paginación por defecto
  defaultPageSize: 20,
  comicsPerPage: 12,
  chaptersPerPage: 15,
  
  // Límites de texto
  maxComicTitleLength: 100,
  maxComicDescriptionLength: 1000,
  maxChapterTitleLength: 100,
  maxCommentLength: 500,
  maxBioLength: 300,
  
  // Sistema de monedas
  defaultCoins: 100,
  premiumItemCost: 50,
  
  // Chat
  maxMessageLength: 1000,
  maxChatHistory: 100,
  
  // Avatar/Mics
  defaultAvatarColors: [
    '#FFD700', '#A3DCE8', '#1A5EDB', '#10B981', 
    '#F59E0B', '#EF4444', '#8B5CF6', '#06B6D4'
  ],
} as const;

// Estados de comics
export const COMIC_STATUS = {
  DRAFT: 'draft',
  PUBLISHED: 'published',
  COMPLETED: 'completed',
  HIATUS: 'hiatus',
  CANCELLED: 'cancelled',
} as const;

// Géneros/categorías de comics
export const COMIC_GENRES = [
  'Acción',
  'Aventura',
  'Comedia',
  'Drama',
  'Fantasía',
  'Horror',
  'Romance',
  'Ciencia Ficción',
  'Slice of Life',
  'Thriller',
  'Histórico',
  'Sobrenatural',
  'Deportes',
  'Escolar',
  'Misterio',
] as const;

// Orientaciones de lectura
export const READING_DIRECTION = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal',
} as const;

// Tipos de usuario
export const USER_TYPES = {
  READER: 'reader',
  AUTHOR: 'author',
  ADMIN: 'admin',
} as const;

// Estados de autenticación
export const AUTH_STATUS = {
  LOADING: 'loading',
  AUTHENTICATED: 'authenticated',
  UNAUTHENTICATED: 'unauthenticated',
  ERROR: 'error',
} as const;