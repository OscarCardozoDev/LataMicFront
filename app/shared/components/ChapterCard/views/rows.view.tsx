// app/shared/components/ChapterCard/views/rows.view.tsx
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import Animated from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';
import { sharedStyles, rowsStyles } from '../styles/index';
import { useChapterItemAnimations } from '../animations';
import { Chapter, ChapterRowProps } from '../types';
import Colors from '@/shared/constants/Colors';

const ChapterRow: React.FC<ChapterRowProps> = ({
  chapter,
  isSelected,
  isPressed,
  itemHeight,
  onPress,
  onLongPress,
  onPressIn,
  onPressOut,
}) => {
  const animations = useChapterItemAnimations();
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [imageError, setImageError] = React.useState(false);

  React.useEffect(() => {
    if (isPressed) {
      animations.animatePress();
    } else {
      animations.animateRelease();
    }
  }, [isPressed]);

  React.useEffect(() => {
    if (isSelected) {
      animations.animateSelect();
    }
  }, [isSelected]);

  const rowStyles = [
    rowsStyles.chapterRow,
    {
      minHeight: itemHeight,
    },
    isSelected && rowsStyles.chapterRowSelected,
    chapter.isRead && rowsStyles.chapterRowRead,
    animations.itemStyle,
  ];

  const handleImageLoad = React.useCallback(() => {
    setImageLoaded(true);
    setImageError(false);
  }, []);

  const handleImageError = React.useCallback(() => {
    setImageLoaded(false);
    setImageError(true);
  }, []);

  // Renderizar imagen del capítulo
  const renderChapterImage = () => {
    if (!chapter.image || imageError) {
      // Fallback con color de fondo y número
      return (
        <View style={[
          rowsStyles.chapterImageFallback,
          { backgroundColor: chapter.color }
        ]}>
          <Text style={rowsStyles.chapterImageFallbackText}>
            {chapter.number}
          </Text>
        </View>
      );
    }

    if (!imageLoaded) {
      return (
        <View style={rowsStyles.chapterImagePlaceholder}>
          <ActivityIndicator size="small" color={Colors.fourth} />
        </View>
      );
    }

    return (
      <Image
        source={{ uri: chapter.image }}
        style={rowsStyles.chapterImage}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
    );
  };

  // Determinar texto principal y secundario
  const hasTitle = chapter.title && chapter.title.trim().length > 0;
  const mainText = hasTitle ? chapter.title : `Capítulo ${chapter.number}`;
  const secondaryText = hasTitle ? `Capítulo ${chapter.number}` : undefined;

  return (
    <TouchableOpacity
      style={rowStyles}
      onPress={onPress}
      onLongPress={onLongPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      activeOpacity={0.8}
    >
      {/* Imagen del capítulo */}
      <View style={rowsStyles.chapterImageContainer}>
        {renderChapterImage()}
        
        {/* Badge de nuevo */}
        {chapter.isNew && (
          <View style={rowsStyles.chapterNewBadgeRow} />
        )}
      </View>

      {/* Contenido del capítulo */}
      <View style={rowsStyles.chapterContent}>
        <Text 
          style={[
            rowsStyles.chapterMainText,
            !hasTitle && { fontSize: 18 } // Texto más grande si no hay título
          ]}
          numberOfLines={1}
        >
          {mainText}
        </Text>
        
        {secondaryText && (
          <Text style={rowsStyles.chapterSecondaryText} numberOfLines={1}>
            {secondaryText}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

interface ChapterRowsViewProps {
  sortedChapters: Chapter[];
  selectedChapter?: string;
  pressedChapter?: string;
  itemHeight: number;
  isLoading: boolean;
  onChapterPress: (chapter: Chapter) => void;
  onChapterLongPress: (chapter: Chapter) => void;
  onChapterPressIn: (chapter: Chapter) => void;
  onChapterPressOut: () => void;
  animations: {
    containerStyle: any;
    shimmerStyle: any;
  };
  testID?: string;
}

export const ChapterRowsView: React.FC<ChapterRowsViewProps> = ({
  sortedChapters,
  selectedChapter,
  pressedChapter,
  itemHeight,
  isLoading,
  onChapterPress,
  onChapterLongPress,
  onChapterPressIn,
  onChapterPressOut,
  animations,
  testID,
}) => {
  const { t } = useTranslation();

  // Loading state
  if (isLoading) {
    return (
      <View style={sharedStyles.loadingContainer} testID={`${testID}-loading`}>
        <ActivityIndicator size="large" color={Colors.fourth} />
        <Text style={sharedStyles.loadingText}>
          {t('comics.loadingChapters', 'Cargando capítulos...')}
        </Text>
      </View>
    );
  }

  // Empty state
  if (!sortedChapters || sortedChapters.length === 0) {
    return (
      <View style={sharedStyles.emptyContainer} testID={`${testID}-empty`}>
        <Text style={sharedStyles.emptyText}>
          {t('comics.noChapters', 'No hay capítulos disponibles')}
        </Text>
      </View>
    );
  }

  return (
    <Animated.View 
      style={[sharedStyles.container, animations.containerStyle]} 
      testID={testID}
    >
      <View style={rowsStyles.list}>
        {sortedChapters.map((chapter) => (
          <ChapterRow
            key={chapter.id}
            chapter={chapter}
            isSelected={selectedChapter === chapter.id}
            isPressed={pressedChapter === chapter.id}
            itemHeight={itemHeight}
            onPress={() => onChapterPress(chapter)}
            onLongPress={() => onChapterLongPress(chapter)}
            onPressIn={() => onChapterPressIn(chapter)}
            onPressOut={onChapterPressOut}
          />
        ))}
      </View>
    </Animated.View>
  );
};