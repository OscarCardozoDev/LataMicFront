import Lottie from 'lottie-react';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Dimensions,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated from 'react-native-reanimated';
import Colors from '../../constants/Colors';
import { useResponsive } from '../../hooks/useResponsive';
import { styles } from './styles';
import { MenuOption } from './types';

import MenuIcon from '@/../assets/icons/Menu.json';

// Iconos mejorados - TAMAÑOS REDUCIDOS
const SearchIcon = () => (
  <View style={{ width: 18, height: 18, justifyContent: 'center', alignItems: 'center' }}>
    <View
      style={{
        width: 12,
        height: 12,
        borderWidth: 2,
        borderColor: Colors.gray500,
        borderRadius: 6,
        position: 'absolute',
        top: 1,
        left: 1,
      }}
    />
    <View
      style={{
        width: 5,
        height: 2,
        backgroundColor: Colors.gray500,
        borderRadius: 1,
        position: 'absolute',
        bottom: 1,
        right: 1,
        transform: [{ rotate: '45deg' }],
      }}
    />
  </View>
);

const CloseIcon = () => (
  <View style={{ width: 14, height: 14, justifyContent: 'center', alignItems: 'center' }}>
    <View
      style={{
        width: 10,
        height: 2,
        backgroundColor: Colors.gray500,
        borderRadius: 1,
        position: 'absolute',
        transform: [{ rotate: '45deg' }],
      }}
    />
    <View
      style={{
        width: 10,
        height: 2,
        backgroundColor: Colors.gray500,
        borderRadius: 1,
        position: 'absolute',
        transform: [{ rotate: '-45deg' }],
      }}
    />
  </View>
);

interface HeaderViewProps {
  state: {
    searchText: string;
    isDropdownVisible: boolean;
    isSearchFocused: boolean;
    menuOptions: MenuOption[];
    user?: any;
    showSearchBar: boolean;
    placeholder: string;
  };
  handlers: {
    handleSearch: (text: string) => void;
    handleClearSearch: () => void;
    handleSearchFocus: () => void;
    handleSearchBlur: () => void;
    handleSearchSubmit: () => void;
    handleMenuToggle: () => void;
    handleMenuItemPress: (item: string) => void;
    handleDropdownClose: () => void;
    handleLogoPress: () => void;
  };
  animations: {
    dropdownAnimatedStyle: any;
    overlayAnimatedStyle: any;
    searchAnimatedStyle: any;
  };
  testID?: string;
}

export const HeaderView: React.FC<HeaderViewProps> = ({ state, handlers, animations, testID }) => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) =>
      setWindowWidth(window.width),
    );
    return () => subscription?.remove();
  }, []);

  const { t } = useTranslation();
  const { isTablet } = useResponsive();

  const {
    searchText,
    isDropdownVisible,
    isSearchFocused,
    menuOptions,
    user,
    showSearchBar,
    placeholder,
  } = state;

  const {
    handleSearch,
    handleClearSearch,
    handleSearchFocus,
    handleSearchBlur,
    handleSearchSubmit,
    handleMenuToggle,
    handleMenuItemPress,
    handleDropdownClose,
    handleLogoPress,
  } = handlers;

  const renderMenuItem = (option: MenuOption, index: number) => {
    // Primer item especial (¡Hola, Juana!) - ahora más compacto
    if (index === 0) {
      return (
        <View key={option.id} style={styles.welcomeItem}>
          {user?.avatar ? (
            <Image
              source={{ uri: user.avatar }}
              style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: Colors.gray300 }}
            />
          ) : (
            <View
              style={[styles.welcomeAvatar, { justifyContent: 'center', alignItems: 'center' }]}
            >
              <Text style={{ fontSize: 32, color: Colors.gray600 }}>
                {user?.name?.charAt(0)?.toUpperCase() || 'U'}
              </Text>
            </View>
          )}
          <Text style={styles.welcomeText}>{option.label}</Text>
        </View>
      );
    }

    // Items normales del menú
    return (
      <TouchableOpacity
        key={option.id}
        style={[styles.menuItem, option.isPremium && styles.premiumItem]}
        onPress={() => handleMenuItemPress(option.id)}
        activeOpacity={0.7}
      >
        <View style={styles.menuItemIcon}>
          <View
            style={{
              width: 24,
              height: 24,
              backgroundColor: option.isPremium ? Colors.black : Colors.gray600,
              borderRadius: 4,
            }}
          />
          {option.hasNotification && <View style={styles.notificationBadge} />}
        </View>
        <Text style={[styles.menuItemText, option.isPremium && styles.premiumItemText]}>
          {option.label}
        </Text>
      </TouchableOpacity>
    );
  };

  const MenuButton = ({ onPress, isMenuOpen }) => {
    const menuAnimationRef = useRef(null);

    React.useEffect(() => {
      if (isMenuOpen) {
        menuAnimationRef.current?.play();
      } else {
        menuAnimationRef.current?.reset();
      }
    }, [isMenuOpen]);

    return (
      <TouchableOpacity style={styles.menuButton} onPress={onPress} activeOpacity={0.7}>
        <Lottie ref={menuAnimationRef} animationData={MenuIcon} autoPlay={false} loop={false} />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <SafeAreaView style={{ backgroundColor: Colors.thirth }} />
      <View style={styles.container} testID={testID}>
        <View style={[styles.content, isTablet && styles.tabletContent]}>
          {/* Menú Hamburguesa - Izquierda */}
          <MenuButton onPress={handleMenuToggle} isMenuOpen={isDropdownVisible} />

          {/* Logo/Título - Centro */}
          <TouchableOpacity style={styles.logoContainer} onPress={handleLogoPress}>
            <Text style={styles.logoText}>LATAMIC</Text>
          </TouchableOpacity>

          {/* Search Bar o solo lupa según tamaño de pantalla */}
          {showSearchBar && windowWidth > 500 && (
            <Animated.View
              style={[
                styles.searchContainer,
                animations.searchAnimatedStyle,
                isSearchFocused && {
                  borderWidth: 2,
                  borderColor: Colors.five,
                  backgroundColor: Colors.white,
                  shadowColor: Colors.five,
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 4,
                  elevation: 3,
                },
              ]}
            >
              <View style={{ marginRight: 8 }}>
                <SearchIcon />
              </View>
              <TextInput
                style={[
                  styles.searchInput,
                  {
                    fontSize: 14,
                    fontWeight: '400',
                    letterSpacing: 0.2,
                  },
                ]}
                placeholder={placeholder}
                placeholderTextColor={Colors.gray400}
                value={searchText}
                onChangeText={handleSearch}
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
                returnKeyType="search"
                onSubmitEditing={handleSearchSubmit}
                autoCorrect={false}
                autoCapitalize="none"
              />
              {searchText.length > 0 && (
                <TouchableOpacity
                  style={styles.clearSearchButton}
                  onPress={handleClearSearch}
                  activeOpacity={0.6}
                >
                  <CloseIcon />
                </TouchableOpacity>
              )}
            </Animated.View>
          )}

          {/* Solo lupa en pantallas pequeñas */}
          {showSearchBar && windowWidth <= 500 && (
            <TouchableOpacity
              style={styles.mobileSearchContainer}
              onPress={() => setShowMobileSearch(true)}
            >
              <SearchIcon />
            </TouchableOpacity>
          )}
        </View>

        {/* MODAL DE BÚSQUEDA MÓVIL */}
        <Modal
          transparent={true}
          visible={showMobileSearch}
          animationType="fade"
          onRequestClose={() => setShowMobileSearch(false)}
        >
          <View style={styles.mobileSearchModal}>
            <View style={styles.mobileSearchBox}>
              <SearchIcon />
              <TextInput
                style={{ flex: 1, marginLeft: 12, fontSize: 16, color: Colors.gray800 }}
                placeholder={placeholder}
                placeholderTextColor={Colors.gray400}
                value={searchText}
                onChangeText={handleSearch}
                autoFocus
                returnKeyType="search"
                onSubmitEditing={() => {
                  handleSearchSubmit();
                  setShowMobileSearch(false);
                }}
                autoCorrect={false}
                autoCapitalize="none"
              />
              <TouchableOpacity
                onPress={() => {
                  setShowMobileSearch(false);
                  handleClearSearch();
                }}
                style={{ marginLeft: 8 }}
              >
                <CloseIcon />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>

      {/* MODAL DEL MENÚ LATERAL */}
      <Modal
        transparent={true}
        visible={isDropdownVisible}
        animationType="none" // Usamos animaciones personalizadas
        onRequestClose={handleDropdownClose}
      >
        <View style={styles.modalContainer}>
          {/* Overlay para cerrar el menú */}
          <TouchableOpacity
            style={styles.leftMenuOverlay}
            onPress={handleDropdownClose}
            activeOpacity={1}
          />

          {/* Panel del menú lateral */}
          <Animated.View style={[styles.leftMenuContainer, animations.dropdownAnimatedStyle]}>
            {/* Header del menú */}
            <View style={styles.menuHeader}>
              <Text style={styles.menuHeaderTitle}>LATAMIC</Text>
              <TouchableOpacity
                style={styles.menuCloseButton}
                onPress={handleDropdownClose}
                activeOpacity={0.7}
              >
                <CloseIcon />
              </TouchableOpacity>
            </View>

            {/* Items del menú con scroll */}
            <ScrollView style={styles.menuContent}>
              {menuOptions.map((option, index) => (
                <React.Fragment key={option.id}>
                  {renderMenuItem(option, index)}
                  {index === 0 && <View style={styles.menuSeparator} />}
                  {index === menuOptions.length - 2 && <View style={styles.menuSeparator} />}
                </React.Fragment>
              ))}
            </ScrollView>
          </Animated.View>
        </View>
      </Modal>
    </>
  );
};
