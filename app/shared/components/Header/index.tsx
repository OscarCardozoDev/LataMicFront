import React from 'react';
import { HeaderView } from './view';
import { useHeader } from './hooks';
import { HeaderProps } from './types';

export const Header: React.FC<HeaderProps> = (props) => {
  const { state, handlers, animations, restProps } = useHeader(props);

  return (
    <HeaderView
      state={state}
      handlers={handlers}
      animations={animations}
      testID={props.testID}
      {...restProps}
    />
  );
};

export default Header;
export type { HeaderProps, User, MenuOption } from './types';