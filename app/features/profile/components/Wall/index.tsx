// app/features/profile/components/WallModule/index.tsx
import React from 'react';
import { WallModuleView } from './view';
import { useWallModule } from './hooks';
import { WallModuleProps } from './types';

export const WallModule: React.FC<WallModuleProps> = (props) => {
  const { state, handlers, postTypeOptions, restProps } = useWallModule(props);

  return (
    <WallModuleView
      state={state}
      handlers={handlers}
      postTypeOptions={postTypeOptions}
      testID={props.testID}
      {...restProps}
    />
  );
};

export default WallModule;
export type { WallModuleProps, UserProfile, Artist, PostType } from './types';