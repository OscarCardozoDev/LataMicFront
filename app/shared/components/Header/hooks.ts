import { useState, useCallback } from 'react';
import { useHeaderAnimations } from './animations';
import { HeaderProps, MenuOption } from './types';

export const useHeader = (props: HeaderProps) => {
  const {
    user,
    onSearch,
    onMenuItemPress,
    onLogoPress,
    showSearchBar = true,
    placeholder = '¿Qué vamos a leer?',
    ...restProps
  } = props;

  // Animations
  const animations = useHeaderAnimations();

  // Local state
  const [searchText, setSearchText] = useState('');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Menu options basado en las imágenes
  const menuOptions: MenuOption[] = [
    { id: 'profile', label: '¡Hola, Juana!', icon: 'user' },
    { id: 'tu-muro', label: 'Tu muro', icon: 'wall', hasNotification: true },
    { id: 'notifications', label: 'Notificaciones', icon: 'bell', hasNotification: true },
    { id: 'messages', label: 'Mensajes', icon: 'message', hasNotification: true },
    { id: 'settings', label: 'Configuraciones', icon: 'settings' },
    { id: 'premium', label: 'PREMIUM', icon: 'star', isPremium: true },
  ];

  // Search handlers
  const handleSearch = useCallback((text: string) => {
    setSearchText(text);
    onSearch?.(text);
  }, [onSearch]);

  const handleClearSearch = useCallback(() => {
    setSearchText('');
    onSearch?.('');
  }, [onSearch]);

  const handleSearchFocus = useCallback(() => {
    setIsSearchFocused(true);
    animations.focusSearch();
  }, [animations]);

  const handleSearchBlur = useCallback(() => {
    setIsSearchFocused(false);
    animations.blurSearch();
  }, [animations]);

  const handleSearchSubmit = useCallback(() => {
    onSearch?.(searchText);
  }, [onSearch, searchText]);

  // Menu handlers
  const handleMenuToggle = useCallback(() => {
    if (isDropdownVisible) {
      animations.hideDropdown();
      setIsDropdownVisible(false);
    } else {
      animations.showDropdown();
      setIsDropdownVisible(true);
    }
  }, [isDropdownVisible, animations]);

  const handleMenuItemPress = useCallback((item: string) => {
    setIsDropdownVisible(false);
    animations.hideDropdown();
    onMenuItemPress?.(item);
  }, [onMenuItemPress, animations]);

  const handleDropdownClose = useCallback(() => {
    setIsDropdownVisible(false);
    animations.hideDropdown();
  }, [animations]);

  // Logo handler
  const handleLogoPress = useCallback(() => {
    onLogoPress?.();
  }, [onLogoPress]);

  // State object
  const state = {
    searchText,
    isDropdownVisible,
    isSearchFocused,
    menuOptions,
    user,
    showSearchBar,
    placeholder,
  };

  // Handlers object
  const handlers = {
    handleSearch,
    handleClearSearch,
    handleSearchFocus,
    handleSearchBlur,
    handleSearchSubmit,
    handleMenuToggle,
    handleMenuItemPress,
    handleDropdownClose,
    handleLogoPress,
  };

  return {
    state,
    handlers,
    animations,
    restProps,
  };
};