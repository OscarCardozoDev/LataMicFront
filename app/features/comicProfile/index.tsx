// app/features/mangaProfile/index.tsx
import React from 'react';
import { MangaProfileView } from './view';
import { useMangaProfile } from './hooks';
import { MangaProfileScreenProps } from './types';

const MangaProfile: React.FC<MangaProfileScreenProps> = (props) => {
  const { state, handlers, animations } = useMangaProfile(props);

  return (
    <MangaProfileView
      state={state}
      handlers={handlers}
      animations={animations}
      testID="manga-profile-screen"
    />
  );
};

export default MangaProfile;
export type { MangaProfileScreenProps, Manga, Author } from './types';