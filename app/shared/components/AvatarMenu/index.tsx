// app/shared/components/Avatar/index.tsx
import React from 'react';
import { AvatarView } from './view';
import { useAvatar } from './hooks';
import { AvatarProps } from './types';

export const Avatar: React.FC<AvatarProps> = (props) => {
  const { state, handlers, animations, restProps } = useAvatar(props);

  return (
    <AvatarView
      source={props.source}
      state={state}
      handlers={handlers}
      animations={animations}
      testID={props.testID}
      {...restProps}
    />
  );
};

export default Avatar;
export type { AvatarProps } from './types';