// app/features/profile/components/ComicModule/types.ts
import { Comic } from '@/shared/components/ComicCard/types';

export type ComicListType = 'reading' | 'favorites' | 'completed';

export interface ComicModuleProps {
  comics: {
    reading: Comic[];
    favorites: Comic[];
    completed: Comic[];
  };
  selectedFilter: ComicListType;
  onFilterChange: (filter: ComicListType) => void;
  onComicPress?: (comic: Comic) => void;
  onFavoritePress?: (comic: Comic) => void;
  onMenuPress?: (comic: Comic) => void;
  isLoading?: boolean;
  testID?: string;
}

export interface ComicModuleState {
  comics: {
    reading: Comic[];
    favorites: Comic[];
    completed: Comic[];
  };
  selectedFilter: ComicListType;
  currentList: Comic[];
  isLoading: boolean;
}

export interface ComicModuleHandlers {
  handleFilterChange: (filter: ComicListType) => void;
  handleComicPress: (comic: Comic) => void;
  handleFavoritePress: (comic: Comic) => void;
  handleMenuPress: (comic: Comic) => void;
}

export interface FilterOption {
  id: ComicListType;
  label: string;
}