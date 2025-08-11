// app/features/profile/components/MicModule/types.ts

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

export interface MicItem {
  id: string;
  category: MicCategory;
  name: string;
  imageUrl: string;
  isPremium: boolean;
  price?: number;
  isOwned: boolean;
  isSelected?: boolean;
}

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

export interface MicModuleProps {
  items: MicItem[];
  configuration: MicConfiguration;
  selectedCategory: MicCategory;
  userCoins: number;
  onCategoryChange: (category: MicCategory) => void;
  onItemSelect: (item: MicItem) => void;
  onItemPurchase?: (item: MicItem) => void;
  isLoading?: boolean;
  testID?: string;
}

export interface MicModuleState {
  items: MicItem[];
  configuration: MicConfiguration;
  selectedCategory: MicCategory;
  currentCategoryItems: MicItem[];
  visibleGridItems: MicItem[];
  remainingItems: MicItem[];
  userCoins: number;
  isLoading: boolean;
  hoveredItemId: string | null;
  longPressedItemId: string | null;
}

export interface MicModuleHandlers {
  handleCategoryChange: (category: MicCategory) => void;
  handleItemSelect: (item: MicItem) => void;
  handleItemPurchase: (item: MicItem) => void;
  handleItemHover: (itemId: string | null) => void;
  handleItemLongPress: (itemId: string | null) => void;
}

export interface CategoryOption {
  id: MicCategory;
  label: string;
}