// app/shared/components/ChapterCard/views/card.view.tsx
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Animated from 'react-native-reanimated';
import { useTranslation } from 'react-i18next';
import { sharedStyles, cardStyles } from '../styles/index';
import { useChapterItemAnimations } from '../animations';
import { Chapter, ChapterItemProps } from '../types';
import Colors from '@/shared/constants/Colors';

const ChapterItem: React.FC<ChapterItemProps> = ({
  chapter,
  isSelected,
  isPressed,
  itemWidth,
  itemHeight,
  showTitles,
  onPress,
  onLongPress,
  onPressIn,
  onPressOut,
}) => {
  const animations = useChapterItemAnimations();

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

  const itemStyles = [
    cardStyles.chapterItem,
    {
      width: itemWidth,
      height: itemHeight,
    },
    isSelected && cardStyles.chapterSelected,
    chapter.isRead && cardStyles.chapterRead,
    animations.itemStyle,
  ];

  const barStyles = [
    cardStyles.chapterBar,
    {
      backgroundColor: chapter.color,
      height: itemHeight,
    },
  ];

  return (
    <TouchableOpacity
      style={itemStyles}
      onPress={onPress}
      onLongPress={onLongPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      activeOpacity={0.8}
    >
      <Animated.View style={barStyles}>
        {/* Número del capítulo */}
        <Text style={cardStyles.chapterNumber}>
          {chapter.number}
        </Text>

        {/* Badge de nuevo */}
        {chapter.isNew && (
          <View style={cardStyles.chapterNewBadge} />
        )}

        {/* Título (si showTitles está activo) */}
        {showTitles && chapter.title && (
          <View style={cardStyles.chapterTitle}>
            <Text style={cardStyles.chapterTitleText} numberOfLines={1}>
              {chapter.title}
            </Text>
          </View>
        )}
      </Animated.View>
    </TouchableOpacity>
  );
};

interface ChapterCardViewProps {
  sortedChapters: Chapter[];
  selectedChapter?: string;
  pressedChapter?: string;
  itemWidth: number;
  itemHeight: number;
  gap: number;
  showTitles: boolean;
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

export const ChapterCardView: React.FC<ChapterCardViewProps> = ({
  sortedChapters,
  selectedChapter,
  pressedChapter,
  itemWidth,
  itemHeight,
  gap,
  showTitles,
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
      <View 
        style={[
          cardStyles.grid,
          {
            gap: gap,
          }
        ]}
      >
        {sortedChapters.map((chapter) => (
          <ChapterItem
            key={chapter.id}
            chapter={chapter}
            isSelected={selectedChapter === chapter.id}
            isPressed={pressedChapter === chapter.id}
            itemWidth={itemWidth}
            itemHeight={itemHeight}
            showTitles={showTitles}
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