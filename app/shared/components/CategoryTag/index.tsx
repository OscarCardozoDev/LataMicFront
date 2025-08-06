// app/shared/components/Tag/index.tsx
import React from 'react';
import { TagView } from './view';
import { useTag } from './hooks';
import { TagProps } from './types';

export const Tag: React.FC<TagProps> = (props) => {
  const { state, handlers, animations, restProps } = useTag(props);

  return (
    <TagView
      state={state}
      handlers={handlers}
      animations={animations}
      testID={props.testID}
      {...restProps}
    />
  );
};

export default Tag;
export type { TagProps } from './types';