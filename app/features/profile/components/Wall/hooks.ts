// app/features/profile/components/WallModule/hooks.ts
import { useCallback, useMemo } from 'react';
import { 
  WallModuleProps, 
  WallModuleState, 
  WallModuleHandlers, 
  PostType,
  PostTypeOption,
  Artist 
} from './types';

export const useWallModule = (props: WallModuleProps) => {
  const {
    user,
    selectedPostType,
    onPostTypeChange,
    onArtistPress,
    onFollowArtist,
    onUnfollowArtist,
    isLoading = false,
    ...restProps
  } = props;

  // Opciones para el SelectionBar de publicaciones
  const postTypeOptions: PostTypeOption[] = useMemo(() => [
    { id: 'publicaciones', label: 'Publicaciones' },
    { id: 'compartidas', label: 'Compartidas' },
  ], []);

  // Handlers
  const handlePostTypeChange = useCallback((type: PostType) => {
    onPostTypeChange(type);
  }, [onPostTypeChange]);

  const handleArtistPress = useCallback((artist: Artist) => {
    onArtistPress?.(artist);
  }, [onArtistPress]);

  const handleFollowToggle = useCallback((artistId: string, isCurrentlyFollowing: boolean) => {
    if (isCurrentlyFollowing) {
      onUnfollowArtist?.(artistId);
    } else {
      onFollowArtist?.(artistId);
    }
  }, [onFollowArtist, onUnfollowArtist]);

  // Estado del módulo
  const state: WallModuleState = {
    user,
    selectedPostType,
    isLoading,
  };

  // Handlers del módulo
  const handlers: WallModuleHandlers = {
    handlePostTypeChange,
    handleArtistPress,
    handleFollowToggle,
  };

  return {
    state,
    handlers,
    postTypeOptions,
    restProps,
  };
};