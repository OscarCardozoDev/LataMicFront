// app/shared/components/ChapterCard/index.tsx
import React from 'react';
import { ChapterCardMainView } from './views';
import { useChapterCard } from './hooks';
import { ChapterCardProps } from './types';

export const ChapterCard: React.FC<ChapterCardProps> = (props) => {
  const { state, handlers, animations, restProps } = useChapterCard(props);

  return (
    <ChapterCardMainView
      state={state}
      handlers={handlers}
      animations={animations}
      testID={props.testID}
      {...restProps}
    />
  );
};

export default ChapterCard;
export type { ChapterCardProps, Chapter } from './types';