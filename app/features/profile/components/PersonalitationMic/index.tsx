// app/features/profile/components/MicModule/index.tsx
import React from 'react';
import { MicModuleView } from './view';
import { useMicModule } from './hooks';
import { MicModuleProps } from './types';

export const MicModule: React.FC<MicModuleProps> = (props) => {
  const { state, handlers, categoryOptions, restProps } = useMicModule(props);

  return (
    <MicModuleView
      state={state}
      handlers={handlers}
      categoryOptions={categoryOptions}
      testID={props.testID}
      {...restProps}
    />
  );
};

export default MicModule;
export type { MicModuleProps, MicCategory, MicItem, MicConfiguration } from './types';