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
}

export interface ComicCardProps {
  comic: Comic;
  onPress?: (comic: Comic) => void;
  onFavoritePress?: (comic: Comic) => void;
  onMenuPress?: (comic: Comic) => void;
  loading?: boolean;
  size?: 'small' | 'normal' | 'featured';
  testID?: string;
}