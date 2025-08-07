// app/shared/components/SelectionBar/index.tsx
import React from 'react';
import { SelectionBarView } from './view';
import { useSelectionBar } from './hooks';
import { SelectionBarProps } from './types';

export const SelectionBar: React.FC<SelectionBarProps> = (props) => {
  const { state, handlers, animations, restProps } = useSelectionBar(props);

  return (
    <SelectionBarView
      state={state}
      handlers={handlers}
      animations={animations}
      testID={props.testID}
      {...restProps}
    />
  );
};

export default SelectionBar;
export type { SelectionBarProps, SelectionBarOption } from './types';