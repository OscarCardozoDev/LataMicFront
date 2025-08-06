// app/shared/components/ChapterCard/types.ts
export interface Chapter {
  id: string;
  title?: string; // Ahora es opcional
  number: number;
  color: string;
  image?: string; // Para la variante rows
  isRead?: boolean;
  isNew?: boolean;
  publishedAt?: string;
  readAt?: string;
}

export interface ChapterCardProps {
  chapters: Chapter[];
  selectedChapter?: string;
  onChapterSelect?: (chapter: Chapter) => void;
  onChapterLongPress?: (chapter: Chapter) => void;
  variant?: 'card' | 'rows'; // Nueva prop para determinar la variante
  columnsCount?: number; // Solo para card
  itemHeight?: number;
  gap?: number;
  showTitles?: boolean; // Solo para card
  sortBy?: 'number' | 'publishedAt' | 'title';
  sortOrder?: 'asc' | 'desc';
  loading?: boolean;
  testID?: string;
}

export interface ChapterCardState {
  sortedChapters: Chapter[];
  selectedChapter?: string;
  pressedChapter?: string;
  variant: 'card' | 'rows';
  itemWidth: number;
  itemHeight: number;
  gap: number;
  showTitles: boolean;
  columnsCount: number;
  isLoading: boolean;
}

export interface ChapterCardHandlers {
  handleChapterPress: (chapter: Chapter) => void;
  handleChapterLongPress: (chapter: Chapter) => void;
  handleChapterPressIn: (chapter: Chapter) => void;
  handleChapterPressOut: () => void;
}

export interface ChapterItemProps {
  chapter: Chapter;
  isSelected: boolean;
  isPressed: boolean;
  itemWidth: number;
  itemHeight: number;
  showTitles: boolean;
  onPress: () => void;
  onLongPress: () => void;
  onPressIn: () => void;
  onPressOut: () => void;
}

export interface ChapterRowProps {
  chapter: Chapter;
  isSelected: boolean;
  isPressed: boolean;
  itemHeight: number;
  onPress: () => void;
  onLongPress: () => void;
  onPressIn: () => void;
  onPressOut: () => void;
}

export interface ChapterCardViewProps {
  state: ChapterCardState;
  handlers: ChapterCardHandlers;
  animations: {
    containerStyle: any;
    shimmerStyle: any;
  };
  testID?: string;
}