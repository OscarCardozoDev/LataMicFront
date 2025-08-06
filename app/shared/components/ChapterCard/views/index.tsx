// app/shared/components/ChapterCard/views/index.tsx
import React from 'react';
import { ChapterCardView } from './card.view';
import { ChapterRowsView } from './rows.view';
import { ChapterCardViewProps } from '../types';

export const ChapterCardMainView: React.FC<ChapterCardViewProps> = ({
  state,
  handlers,
  animations,
  testID,
}) => {
  const {
    sortedChapters,
    selectedChapter,
    pressedChapter,
    variant,
    itemWidth,
    itemHeight,
    gap,
    showTitles,
    isLoading,
  } = state;

  const {
    handleChapterPress,
    handleChapterLongPress,
    handleChapterPressIn,
    handleChapterPressOut,
  } = handlers;

  // Props compartidas
  const commonProps = {
    sortedChapters,
    selectedChapter,
    pressedChapter,
    itemHeight,
    isLoading,
    onChapterPress: handleChapterPress,
    onChapterLongPress: handleChapterLongPress,
    onChapterPressIn: handleChapterPressIn,
    onChapterPressOut: handleChapterPressOut,
    animations,
    testID,
  };

  // Decidir qué vista renderizar basado en la variante
  if (variant === 'rows') {
    return <ChapterRowsView {...commonProps} />;
  }

  // Por defecto, usar la vista de cards
  return (
    <ChapterCardView
      {...commonProps}
      itemWidth={itemWidth}
      gap={gap}
      showTitles={showTitles}
    />
  );
};