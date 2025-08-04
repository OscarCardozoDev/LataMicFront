import { NavigationProp } from '@react-navigation/native';

export interface LibraryScreenProps {
  navigation?: NavigationProp<any>; 
}

export interface LibraryFilters {
  search: string;
  genres: string[];
  status: string;
}

export interface Comic {
  id: string;
  title: string;
  coverImage: string;
  author: {
    id: string;
    name: string;
    avatar?: string;
  };
  createdAt: string; // ISO date string
  chaptersCount: number;
  isFavorite?: boolean;
  genres?: string[];
  status?: 'published' | 'completed' | 'hiatus';
  // Propiedades adicionales que podemos usar en Library
  rating?: number;
  chaptersRead?: number;
  totalChapters?: number;
  description?: string;
  tags?: string[];
  lastReadAt?: string;
  progress?: number;
}

export interface LibraryState {
  comics: Comic[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
  refreshing: boolean;
  error: string | null;
  filters: LibraryFilters;
}

export interface LibraryActions {
  loadComics: (reset?: boolean) => Promise<void>;
  updateFilters: (newFilters: Partial<LibraryFilters>) => void;
  clearFilters: () => void;
  handleSearch: (query: string) => void;
  toggleFavorite: (comicId: string) => void;
  handlePageChange: (page: number) => void;
}

export type UseLibraryReturn = LibraryState & LibraryActions;