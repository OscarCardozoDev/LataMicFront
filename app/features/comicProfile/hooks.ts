// app/features/mangaProfile/hooks.ts
import { useState, useCallback, useEffect, useMemo } from 'react';
import { useMangaProfileAnimations } from './animations';
import { MangaProfileScreenProps, Manga, Chapter } from './types';

// Mock data para desarrollo
const mockManga: Manga = {
  id: '1',
  title: 'TITULO MANGA',
  description: 'Descripción sobre el manga, de qué se trata y todo. El autor puede usar este lugar para todo lo que quiera, puede colocar el resumen que quiera hasta un total de caracteres impuestos para no perder la estética de la página',
  coverImage: 'https://via.placeholder.com/200x280/E69DB8/FFFFFF?text=Cover',
  heroImage: 'https://via.placeholder.com/800x400/87CEEB/000000?text=Hero+Image',
  author: {
    id: '1',
    name: 'nombre del autor',
    avatar: 'https://via.placeholder.com/120x120/4A90E2/FFFFFF?text=Author',
    description: 'Descripción autor',
  },
  genres: ['Romance', 'Acción', 'Comedia', 'Drama', 'Aventura'],
  chapters: Array.from({ length: 24 }, (_, index) => ({
    id: `chapter-${index + 1}`,
    title: `Título del capítulo ${index + 1}`,
    number: index + 1,
    color: [
      '#FF7E9D', '#E69DB8', '#B9375D', '#FFE6E6', '#FFF2EB', '#FAF7F3',
      '#4A90E2', '#87CEEB', '#20B2AA', '#98FB98', '#FFD700', '#FFA500',
      '#FF69B4', '#DA70D6', '#9370DB', '#8A2BE2', '#FF1493', '#DC143C',
      '#FF6347', '#FF4500', '#32CD32', '#00CED1', '#1E90FF', '#9932CC'
    ][index % 24],
    isRead: Math.random() > 0.7,
    isNew: index > 20,
    publishedAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString(),
  })),
  status: 'ongoing',
  rating: 4.5,
  totalChapters: 24,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export const useMangaProfile = (props: MangaProfileScreenProps) => {
  const { navigation, route } = props;
  const mangaId = route?.params?.mangaId || '1';

  // Local state
  const [manga, setManga] = useState<Manga | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);

  // Animations
  const animations = useMangaProfileAnimations(isLoading);

  // Simular carga de datos
  useEffect(() => {
    const loadManga = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Simular llamada a API
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setManga(mockManga);
      } catch (err) {
        setError('Error al cargar el manga. Inténtalo de nuevo.');
        console.error('Error loading manga:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadManga();
  }, [mangaId]);

  // Handlers
  const handleChapterSelect = useCallback((chapter: Chapter) => {
    setSelectedChapter(chapter.id);
    console.log('Chapter selected:', chapter.title);
    // Aquí navegarías al lector del capítulo
  }, []);

  const handleChapterLongPress = useCallback((chapter: Chapter) => {
    console.log('Chapter long pressed:', chapter.title);
    // Aquí podrías mostrar opciones adicionales
  }, []);

  const handleGenrePress = useCallback((genre: string) => {
    console.log('Genre pressed:', genre);
    // Aquí navegarías a la búsqueda por género
  }, []);

  const handleAuthorPress = useCallback(() => {
    console.log('Author pressed');
    // Aquí navegarías al perfil del autor
  }, []);

  const handleContactPress = useCallback(() => {
    setShowContactForm(true);
    console.log('Contact pressed');
  }, []);

  const handleSharePress = useCallback(() => {
    console.log('Share pressed');
    // Aquí implementarías compartir
  }, []);

  const handleFavoritePress = useCallback(() => {
    console.log('Favorite pressed');
    // Aquí implementarías favoritos
  }, []);

  const handleBackPress = useCallback(() => {
    navigation?.goBack();
  }, [navigation]);

  // Datos ordenados de capítulos
  const sortedChapters = useMemo(() => {
    if (!manga?.chapters) return [];
    return [...manga.chapters].sort((a, b) => a.number - b.number);
  }, [manga?.chapters]);

  // State object
  const state = {
    manga,
    selectedChapter,
    isLoading,
    error,
    showContactForm,
  };

  // Handlers object
  const handlers = {
    handleChapterSelect,
    handleChapterLongPress,
    handleGenrePress,
    handleAuthorPress,
    handleContactPress,
    handleSharePress,
    handleFavoritePress,
    handleBackPress,
  };

  return {
    state,
    handlers,
    animations,
    sortedChapters,
  };
};