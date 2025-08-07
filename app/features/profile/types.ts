// app/features/profile/types.ts
import { NavigationProp } from '@react-navigation/native';
import { Comic } from '@/shared/components/ComicCard/types';

export interface ProfileScreenProps {
  navigation?: NavigationProp<any>;
}

export interface User {
  id: string;
  name: string;
  avatar?: string;
  description?: string;
  coins: number;
  isPremium?: boolean;
}

export interface MicCustomization {
  id: string;
  category: MicCategory;
  name: string;
  imageUrl: string;
  isPremium: boolean;
  price?: number;
  isOwned: boolean;
}

export type MicCategory = 
  | 'cabello'
  | 'ojos' 
  | 'nariz'
  | 'boca'
  | 'cejas'
  | 'belloFacial'
  | 'lunares'
  | 'ropaParteSuperior'
  | 'ropaParteInferior'
  | 'zapatos'
  | 'mascotas'
  | 'fondo';

export interface MicConfiguration {
  cabello?: string;
  ojos?: string;
  nariz?: string;
  boca?: string;
  cejas?: string;
  belloFacial?: string;
  lunares?: string;
  ropaParteSuperior?: string;
  ropaParteInferior?: string;
  zapatos?: string;
  mascotas?: string;
  fondo?: string;
}

export interface MangaList {
  reading: Comic[];
  favorites: Comic[];
  completed: Comic[];
}

// Actualizado para incluir "muro"
export type ProfileTab = 'muro' | 'mangas' | 'tuMic';

export type MangaFilter = 'reading' | 'favorites' | 'completed';

export interface ProfileState {
  user: User;
  mangaLists: MangaList;
  micCustomizations: MicCustomization[];
  currentMicConfig: MicConfiguration;
  currentTab: ProfileTab;
  selectedMicCategory: MicCategory;
  selectedMangaFilter: MangaFilter;
  isLoading: boolean;
  error: string | null;
}

export interface ProfileActions {
  setCurrentTab: (tab: ProfileTab) => void;
  setSelectedMicCategory: (category: MicCategory) => void;
  setSelectedMangaFilter: (filter: MangaFilter) => void;
  updateUserDescription: (description: string) => void;
  purchaseMicItem: (item: MicCustomization) => void;
  applyMicCustomization: (category: MicCategory, itemId: string) => void;
  removeMangaFromList: (comicId: string, listType: MangaFilter) => void;
  loadUserData: () => Promise<void>;
  loadMicCustomizations: () => Promise<void>;
}

export type UseProfileReturn = ProfileState & ProfileActions;