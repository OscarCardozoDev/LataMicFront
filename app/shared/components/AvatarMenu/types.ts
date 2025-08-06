// app/shared/components/Avatar/types.ts
export interface AvatarProps {
  source?: string | { uri: string };
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  name?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  showBorder?: boolean;
  onPress?: () => void;
  loading?: boolean;
  testID?: string;
}

export interface AvatarState {
  imageLoaded: boolean;
  imageError: boolean;
  isPressed: boolean;
  shouldShowPlaceholder: boolean;
  initials: string;
  size: string;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  showBorder: boolean;
  isLoading: boolean;
  isInteractive: boolean;
}

export interface AvatarHandlers {
  handleImageLoad: () => void;
  handleImageError: () => void;
  handlePressIn: () => void;
  handlePressOut: () => void;
  handlePress: () => void;
}

export interface AvatarViewProps {
  source?: string | { uri: string };
  state: AvatarState;
  handlers: AvatarHandlers;
  animations: {
    containerStyle: any;
    shimmerStyle: any;
  };
  testID?: string;
}