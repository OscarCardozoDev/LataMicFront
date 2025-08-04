import React from 'react';
import { ComicCardView } from './view';
import { useComicCard } from './hooks';
import { ComicCardProps } from './types';

export const ComicCard: React.FC<ComicCardProps> = (props) => {
  const { state, handlers, animations, restProps } = useComicCard(props);

  return (
    <ComicCardView
      state={state}
      handlers={handlers}
      animations={animations}
      testID={props.testID}
      {...restProps}
    />
  );
};

export default ComicCard;
export type { ComicCardProps, Comic } from './types';