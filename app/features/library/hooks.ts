// screens/Library/hooks.ts
import { useState, useEffect, useCallback } from 'react';
import { UseLibraryReturn, LibraryFilters, Comic } from './types';

export const useLibrary = (): UseLibraryReturn => {
  const [comics, setComics] = useState<Comic[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [filters, setFilters] = useState<LibraryFilters>({
    search: '',
    genres: [],
    status: 'all',
  });

  const ITEMS_PER_PAGE = 20;
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  // Función para cargar comics
  const loadComics = useCallback(async (reset: boolean = false) => {
    try {
      if (reset) {
        setRefreshing(true);
        setCurrentPage(1);
      } else {
        setIsLoading(true);
      }
      
      setError(null);

      // Simular llamada a API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Datos de ejemplo - reemplazar con llamada real a API
      const mockComics: Comic[] = Array.from({ length: 87 }, (_, index) => ({
        id: `comic-${index + 1}`,
        title: `Manga ${index + 1}`,
        coverImage: `https://via.placeholder.com/200x280/87CEEB/000000?text=Manga+${index + 1}`,
        author: {
          id: `author-${index + 1}`,
          name: `Autor ${index + 1}`,
          avatar: `https://via.placeholder.com/50x50/4A90E2/FFFFFF?text=A${index + 1}`,
        },
        createdAt: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toISOString(),
        chaptersCount: Math.floor(Math.random() * 100) + 50,
        isFavorite: Math.random() > 0.7,
        genres: [['Action', 'Adventure', 'Comedy', 'Drama', 'Romance'][Math.floor(Math.random() * 5)]],
        status: (['published', 'completed', 'hiatus'] as const)[Math.floor(Math.random() * 3)],
        // Propiedades adicionales para Library
        rating: Math.floor(Math.random() * 5) + 1,
        chaptersRead: Math.floor(Math.random() * 50),
        totalChapters: Math.floor(Math.random() * 100) + 50,
        description: `Descripción del manga ${index + 1}`,
        tags: ['Popular', 'Trending', 'New'][Math.floor(Math.random() * 3)] ? [['Popular', 'Trending', 'New'][Math.floor(Math.random() * 3)]] : [],
        lastReadAt: Math.random() > 0.5 ? new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString() : undefined,
        progress: Math.random(),
      }));

      // Filtrar comics según los filtros actuales
      let filteredComics = mockComics;
      
      if (filters.search) {
        filteredComics = filteredComics.filter(comic => 
          comic.title.toLowerCase().includes(filters.search.toLowerCase()) ||
          comic.author.toLowerCase().includes(filters.search.toLowerCase())
        );
      }
      
      if (filters.genres.length > 0) {
        filteredComics = filteredComics.filter(comic => 
          filters.genres.includes(comic.genre)
        );
      }
      
      if (filters.status !== 'all') {
        filteredComics = filteredComics.filter(comic => 
          comic.status === filters.status
        );
      }

      setComics(filteredComics);
      setTotalCount(filteredComics.length);
      
    } catch (err) {
      setError('Error al cargar los comics. Inténtalo de nuevo.');
      console.error('Error loading comics:', err);
    } finally {
      setIsLoading(false);
      setRefreshing(false);
    }
  }, [filters]);

  // Actualizar filtros
  const updateFilters = useCallback((newFilters: Partial<LibraryFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
    setCurrentPage(1); // Resetear a la primera página cuando cambian los filtros
  }, []);

  // Limpiar filtros
  const clearFilters = useCallback(() => {
    setFilters({
      search: '',
      genres: [],
      status: 'all',
    });
    setCurrentPage(1);
  }, []);

  // Manejar búsqueda
  const handleSearch = useCallback((query: string) => {
    updateFilters({ search: query });
  }, [updateFilters]);

  // Toggle favorito
  const toggleFavorite = useCallback((comicId: string) => {
    setComics(prev => prev.map(comic => 
      comic.id === comicId 
        ? { ...comic, isFavorite: !comic.isFavorite }
        : comic
    ));
  }, []);

  // Manejar cambio de página
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    // Scroll to top cuando cambia la página
    // ScrollToTop puede ser implementado desde el componente padre si es necesario
  }, []);

  // Cargar comics cuando cambian los filtros
  useEffect(() => {
    loadComics();
  }, [filters]);

  // Cargar comics inicialmente
  useEffect(() => {
    loadComics();
  }, []);

  return {
    comics,
    totalCount,
    currentPage,
    totalPages,
    isLoading,
    refreshing,
    error,
    filters,
    loadComics,
    updateFilters,
    clearFilters,
    handleSearch,
    toggleFavorite,
    handlePageChange,
  };
};