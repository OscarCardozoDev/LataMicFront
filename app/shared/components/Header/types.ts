export interface User {
  id: string;
  name: string;
  avatar?: string;
  isPremium?: boolean;
}

export interface HeaderProps {
  user?: User;
  onSearch?: (searchText: string) => void;
  onMenuItemPress?: (item: string) => void;
  onLogoPress?: () => void;
  showSearchBar?: boolean;
  placeholder?: string;
  testID?: string;
}

export interface MenuOption {
  id: string;
  label: string;
  icon?: string;
  isPremium?: boolean;
  hasNotification?: boolean;
}