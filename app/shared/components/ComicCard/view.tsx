import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Platform,
} from 'react-native';
import Animated from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';
import { styles } from './styles';
import Colors from '../../constants/Colors';

// Simple icons
const HeartIcon = ({ filled, size = 18, color = Colors.white }) => (
  <View style={{
    width: size,
    height: size,
    borderWidth: 2,
    borderColor: color,
    backgroundColor: filled ? Colors.error : 'transparent',
    borderRadius: size / 2,
  }} />
);

const MenuIcon = ({ color = Colors.white }) => (
  <View style={{ alignItems: 'center', justifyContent: 'space-between', height: 16 }}>
    <View style={{ width: 3, height: 3, backgroundColor: color, borderRadius: 1.5 }} />
    <View style={{ width: 3, height: 3, backgroundColor: color, borderRadius: 1.5 }} />
    <View style={{ width: 3, height: 3, backgroundColor: color, borderRadius: 1.5 }} />
  </View>
);

interface ComicCardViewProps {
  state: {
    comic: any;
    size: 'small' | 'normal' | 'featured';
    isPressed: boolean;
    isHovered: boolean;
    imageLoaded: boolean;
    imageError: boolean;
    isNew: boolean;
    shouldShowTitle: boolean;
    isLoading: boolean;
  };
  handlers: {
    handlePressIn: () => void;
    handlePressOut: () => void;
    handlePress: () => void;
    handleFavoritePress: () => void;
    handleMenuPress: () => void;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    handleImageLoad: () => void;
    handleImageError: () => void;
  };
  animations: {
    cardStyle: any;
    overlayStyle: any;
    titleStyle: any;
    shimmerStyle: any;
  };
  testID?: string;
}

export const ComicCardView: React.FC<ComicCardViewProps> = ({
  state,
  handlers,
  animations,
  testID,
}) => {
  const { t } = useTranslation();

  const {
    comic,
    size,
    imageError,
    isNew,
    shouldShowTitle,
    isLoading,
  } = state;

  const {
    handlePressIn,
    handlePressOut,
    handlePress,
    handleFavoritePress,
    handleMenuPress,
    handleMouseEnter,
    handleMouseLeave,
    handleImageLoad,
    handleImageError,
  } = handlers;

  // Get container style based on size
  const containerStyle = [
    styles.container,
    styles[size],
    animations.cardStyle,
  ];

  // Loading state
  if (isLoading) {
    return (
      <Animated.View style={[styles.loadingContainer, styles[size], animations.cardStyle]} testID={`${testID}-loading`}>
        <Animated.View style={[styles.shimmerOverlay, animations.shimmerStyle]} />
        <ActivityIndicator size="small" color={Colors.fourth} />
      </Animated.View>
    );
  }

  // Web hover props
  const webProps = Platform.OS === 'web' ? {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  } : {};

  return (
    <Animated.View style={containerStyle} testID={testID} {...webProps}>
      {/* Main touchable area */}
      <TouchableOpacity
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={handlePress}
        activeOpacity={1}
        style={{ flex: 1 }}
      >
        {/* Image or error state */}
        {imageError ? (
          <View style={[styles.coverImage, styles.errorContainer]}>
            <Text style={styles.errorText}>
              {t('common.imageError', 'Error')}
            </Text>
          </View>
        ) : (
          <Image
            source={{ uri: comic.coverImage }}
            style={styles.coverImage}
            onLoad={handleImageLoad}
            onError={handleImageError}
            resizeMode="cover"
          />
        )}

        {/* Overlay for hover */}
        <Animated.View style={[styles.overlay, animations.overlayStyle]} />

        {/* Title (hover only on desktop) */}
        {shouldShowTitle && (
          <Animated.View style={[styles.titleContainer, animations.titleStyle]}>
            <Text style={styles.title} numberOfLines={2}>
              {comic.title}
            </Text>
          </Animated.View>
        )}
      </TouchableOpacity>

      {/* New badge */}
      {isNew && (
        <View style={styles.newBadge}>
          <Text style={styles.newBadgeText}>
            {t('common.new', 'Nuevo')}
          </Text>
        </View>
      )}

      {/* Favorite button */}
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={handleFavoritePress}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      >
        <HeartIcon 
          filled={comic.isFavorite} 
          color={comic.isFavorite ? Colors.error : Colors.white}
        />
      </TouchableOpacity>

      {/* Menu button */}
      <TouchableOpacity
        style={styles.menuButton}
        onPress={handleMenuPress}
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      >
        <MenuIcon />
      </TouchableOpacity>
    </Animated.View>
  );
};