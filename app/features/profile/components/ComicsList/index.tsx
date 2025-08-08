// app/features/profile/components/ComicModule/index.tsx
import React from 'react';
import { ComicModuleView } from './view';
import { useComicModule } from './hooks';
import { ComicModuleProps } from './types';

export const ComicModule: React.FC<ComicModuleProps> = (props) => {
  const { state, handlers, filterOptions, restProps } = useComicModule(props);

  return (
    <ComicModuleView
      state={state}
      handlers={handlers}
      filterOptions={filterOptions}
      testID={props.testID}
      {...restProps}
    />
  );
};

export default ComicModule;
export type { ComicModuleProps, ComicListType } from './types';