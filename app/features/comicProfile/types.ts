// app/features/mangaProfile/types.ts
import { NavigationProp } from '@react-navigation/native';
import { Chapter } from '@/shared/components/ChapterCard/index';

export type { Chapter }

export interface Author {
  id: string;
  name: string;
  avatar?: string;
  description?: string;
}

export interface Manga {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  heroImage: string;
  author: Author;
  genres: string[];
  chapters: Chapter[];
  status: 'ongoing' | 'completed' | 'hiatus';
  rating?: number;
  totalChapters?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface MangaProfileScreenProps {
  navigation?: NavigationProp<any>;
  route?: {
    params: {
      mangaId: string;
    };
  };
}

export interface MangaProfileState {
  manga: Manga | null;
  selectedChapter?: string;
  isLoading: boolean;
  error: string | null;
  showContactForm: boolean;
}

export interface MangaProfileHandlers {
  handleChapterSelect: (chapter: Chapter) => void;
  handleChapterLongPress: (chapter: Chapter) => void;
  handleGenrePress: (genre: string) => void;
  handleAuthorPress: () => void;
  handleContactPress: () => void;
  handleSharePress: () => void;
  handleFavoritePress: () => void;
  handleBackPress: () => void;
}

export interface MangaProfileViewProps {
  state: MangaProfileState;
  handlers: MangaProfileHandlers;
  animations: {
    fadeInStyle: any;
    slideUpStyle: any;
    heroParallaxStyle: any;
  };
  testID?: string;
}