// app/features/profile/hooks.ts
import { useState, useEffect, useCallback } from 'react';
import { UseProfileReturn, User, MangaList, MicCustomization, MicConfiguration, ProfileTab, MicCategory, MangaFilter } from './types';
import { Comic } from '@/shared/components/ComicCard/types';

export const useProfile = (): UseProfileReturn => {
  const [user, setUser] = useState<User>({
    id: '1',
    name: 'Juana',
    avatar: 'https://picsum.photos/200/200?random=1',
    description: 'Amante de los mangas y cómics latinos. Siempre en busca de nuevas historias que me hagan vibrar.',
    coins: 1000, // Como se ve en la imagen
    isPremium: false,
  });

  const [mangaLists, setMangaLists] = useState<MangaList>({
    reading: [],
    favorites: [],
    completed: [],
  });

  const [micCustomizations, setMicCustomizations] = useState<MicCustomization[]>([]);
  
  const [currentMicConfig, setCurrentMicConfig] = useState<MicConfiguration>({
    cabello: 'cabello-1',
    ojos: 'ojos-1',
    nariz: 'nariz-1',
    boca: 'boca-1',
    cejas: 'cejas-1',
    ropaParteSuperior: 'ropa-superior-1',
    ropaParteInferior: 'ropa-inferior-1',
    zapatos: 'zapatos-1',
    fondo: 'fondo-1',
  });

  // Iniciamos con "muro" como tab por defecto
  const [currentTab, setCurrentTab] = useState<ProfileTab>('muro');
  const [selectedMicCategory, setSelectedMicCategory] = useState<MicCategory>('cabello');
  const [selectedMangaFilter, setSelectedMangaFilter] = useState<MangaFilter>('reading');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Cargar datos del usuario
  const loadUserData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Simular llamada a API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Datos mock de mangas
      const mockMangas: Comic[] = Array.from({ length: 12 }, (_, index) => ({
        id: `manga-${index + 1}`,
        title: `Manga ${index + 1}`,
        coverImage: `https://via.placeholder.com/150x200/87CEEB/000000?text=Manga+${index + 1}`,
        author: {
          id: `author-${index + 1}`,
          name: `Autor ${index + 1}`,
          avatar: `https://picsum.photos/50/50?random=${index + 1}`,
        },
        createdAt: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toISOString(),
        chaptersCount: Math.floor(Math.random() * 100) + 10,
        isFavorite: Math.random() > 0.5,
        genres: [['Action', 'Adventure', 'Comedy', 'Drama', 'Romance'][Math.floor(Math.random() * 5)]],
        status: (['published', 'completed', 'hiatus'] as const)[Math.floor(Math.random() * 3)],
      }));

      // Distribuir mangas en las listas
      setMangaLists({
        reading: mockMangas.slice(0, 4),
        favorites: mockMangas.slice(4, 8),
        completed: mockMangas.slice(8, 12),
      });

    } catch (err) {
      setError('Error al cargar los datos del usuario');
      console.error('Error loading user data:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Cargar personalizaciones del Mic (placeholder por ahora)
  const loadMicCustomizations = useCallback(async () => {
    try {
      setIsLoading(true);
      
      // Simular llamada a API
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Por ahora dejamos vacío ya que el Mic será un placeholder gris
      setMicCustomizations([]);
      
    } catch (err) {
      setError('Error al cargar las personalizaciones');
      console.error('Error loading mic customizations:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Actualizar descripción del usuario
  const updateUserDescription = useCallback((description: string) => {
    setUser(prev => ({ ...prev, description }));
  }, []);

  // Comprar item del Mic (placeholder)
  const purchaseMicItem = useCallback((item: MicCustomization) => {
    console.log('Purchase mic item:', item);
  }, []);

  // Aplicar personalización al Mic (placeholder)
  const applyMicCustomization = useCallback((category: MicCategory, itemId: string) => {
    console.log('Apply mic customization:', category, itemId);
  }, []);

  // Remover manga de lista
  const removeMangaFromList = useCallback((comicId: string, listType: MangaFilter) => {
    setMangaLists(prev => ({
      ...prev,
      [listType]: prev[listType].filter(manga => manga.id !== comicId),
    }));
  }, []);

  // Cargar datos iniciales
  useEffect(() => {
    loadUserData();
    loadMicCustomizations();
  }, [loadUserData, loadMicCustomizations]);

  return {
    user,
    mangaLists,
    micCustomizations,
    currentMicConfig,
    currentTab,
    selectedMicCategory,
    selectedMangaFilter,
    isLoading,
    error,
    setCurrentTab,
    setSelectedMicCategory,
    setSelectedMangaFilter,
    updateUserDescription,
    purchaseMicItem,
    applyMicCustomization,
    removeMangaFromList,
    loadUserData,
    loadMicCustomizations,
  };
};