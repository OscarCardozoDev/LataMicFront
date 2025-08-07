// app/shared/components/SelectionBar/types.ts

export interface SelectionBarOption {
  id: string;
  label: string;
  color?: string; // Color personalizado para cuando está seleccionado (opcional)
}

export interface SelectionBarProps {
  options: SelectionBarOption[];
  selectedId: string;
  onSelectionChange: (selectedId: string) => void;
  onClick?: (option: SelectionBarOption) => void;
  animationDuration?: number;
  containerStyle?: any;
  testID?: string;
}

export interface SelectionBarState {
  options: SelectionBarOption[];
  selectedId: string;
  selectedIndex: number;
}

export interface SelectionBarHandlers {
  handleOptionPress: (option: SelectionBarOption, index: number) => void;
}

export interface SelectionBarAnimations {
  indicatorStyle: any;
  animateToPosition: (index: number) => void;
}