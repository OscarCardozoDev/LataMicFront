// app/shared/components/Tag/types.ts
export interface TagProps {
  label: string;
  color?: string;
  textColor?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'filled' | 'outlined' | 'soft';
  onPress?: () => void;
  selected?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  testID?: string;
}

export interface TagState {
  label: string;
  color?: string;
  textColor?: string;
  size: string;
  variant: string;
  selected: boolean;
  disabled: boolean;
  icon?: React.ReactNode;
  isPressed: boolean;
  isHovered: boolean;
  isInteractive: boolean;
}

export interface TagHandlers {
  handlePressIn: () => void;
  handlePressOut: () => void;
  handlePress: () => void;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

export interface TagViewProps {
  state: TagState;
  handlers: TagHandlers;
  animations: {
    containerStyle: any;
  };
  testID?: string;
}