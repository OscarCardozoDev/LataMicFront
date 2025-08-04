import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, SafeAreaView } from 'react-native';
import Lottie from 'lottie-react';
import Animated from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';
import { MenuOption } from './types';
import Colors from '../../constants/Colors';
import { useResponsive } from '../../hooks/useResponsive';

import MenuIcon from '@/../assets/icons/Menu.json';

// Iconos mejorados
const SearchIcon = () => (
  <View style={{ width: 20, height: 20, justifyContent: 'center', alignItems: 'center' }}>
    <View
      style={{
        width: 14,
        height: 14,
        borderWidth: 2,
        borderColor: Colors.gray500,
        borderRadius: 7,
        position: 'absolute',
        top: 2,
        left: 2,
      }}
    />
    <View
      style={{
        width: 6,
        height: 2,
        backgroundColor: Colors.gray500,
        borderRadius: 1,
        position: 'absolute',
        bottom: 2,
        right: 2,
        transform: [{ rotate: '45deg' }],
      }}
    />
  </View>
);

const CloseIcon = () => (
  <View style={{ width: 16, height: 16, justifyContent: 'center', alignItems: 'center' }}>
    <View
      style={{
        width: 12,
        height: 2,
        backgroundColor: Colors.gray500,
        borderRadius: 1,
        position: 'absolute',
        transform: [{ rotate: '45deg' }],
      }}
    />
    <View
      style={{
        width: 12,
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
  const { t } = useTranslation();
  const { isTablet } = useResponsive();

  const { searchText, isDropdownVisible, isSearchFocused, menuOptions, user, showSearchBar, placeholder } = state;

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
            <Image source={{ uri: user.avatar }} style={styles.welcomeAvatar} />
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
    <TouchableOpacity 
      style={styles.menuButton} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Lottie
        ref={menuAnimationRef}
        animationData={MenuIcon}
        autoPlay={false}
        loop={false}
      />
    </TouchableOpacity>
  );
};


  return (
    <>
      <SafeAreaView style={{ backgroundColor: Colors.thirth }} />
      <View style={styles.container} testID={testID}>
        <View style={[styles.content, isTablet && styles.tabletContent]}>
          
          {/* Menú Hamburguesa - Izquierda */}
          <TouchableOpacity 
            style={styles.menuButton} 
            onPress={handleMenuToggle}
            activeOpacity={0.7}
          >
            <MenuButton 
              onPress={handleMenuToggle} 
              isMenuOpen={isDropdownVisible} 
            />
          </TouchableOpacity>

          {/* Logo/Título - Centro */}
          <TouchableOpacity style={styles.logoContainer} onPress={handleLogoPress}>
            <Text style={styles.logoText}>LATAMIC</Text>
          </TouchableOpacity>

          {/* Search Bar - Derecha */}
          {showSearchBar && (
            <Animated.View
              style={[
                styles.searchContainer,
                !isTablet && styles.mobileSearchContainer,
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
                }
              ]}
            >
              <View style={{ marginRight: 12 }}>
                <SearchIcon />
              </View>
              
              <TextInput
                style={[
                  styles.searchInput,
                  {
                    fontSize: 16,
                    fontWeight: '400',
                    letterSpacing: 0.3,
                  }
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
                  style={[
                    styles.clearSearchButton,
                    {
                      backgroundColor: Colors.gray200,
                      borderRadius: 12,
                      width: 24,
                      height: 24,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: 8,
                    }
                  ]} 
                  onPress={handleClearSearch}
                  activeOpacity={0.6}
                >
                  <CloseIcon />
                </TouchableOpacity>
              )}
            </Animated.View>
          )}
        </View>

        {/* Menú Lateral Izquierdo - Fuera del header */}
        {isDropdownVisible && (
          <>
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

              {/* Items del menú */}
              <View style={styles.menuContent}>
                {menuOptions.map((option, index) => (
                  <React.Fragment key={option.id}>
                    {renderMenuItem(option, index)}
                    {index === 0 && <View style={styles.menuSeparator} />}
                    {index === menuOptions.length - 2 && <View style={styles.menuSeparator} />}
                  </React.Fragment>
                ))}
              </View>
            </Animated.View>
          </>
        )}
      </View>
    </>
  );
};