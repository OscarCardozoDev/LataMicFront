export interface Artist {
  id: string;
  name: string;
  avatar: string;
  isFollowing: boolean;
}

export interface UserProfile {
  id: string;
  name: string;
  description?: string;
  followersCount: number;
  followingCount: number;
  followedArtists: Artist[];
}

export type PostType = 'publicaciones' | 'compartidas';

export interface WallModuleProps {
  user: UserProfile;
  selectedPostType: PostType;
  onPostTypeChange: (type: PostType) => void;
  onArtistPress?: (artist: Artist) => void;
  onFollowArtist?: (artistId: string) => void;
  onUnfollowArtist?: (artistId: string) => void;
  isLoading?: boolean;
  testID?: string;
}

export interface WallModuleState {
  user: UserProfile;
  selectedPostType: PostType;
  isLoading: boolean;
}

export interface WallModuleHandlers {
  handlePostTypeChange: (type: PostType) => void;
  handleArtistPress: (artist: Artist) => void;
  handleFollowToggle: (artistId: string, isCurrentlyFollowing: boolean) => void;
}

export interface PostTypeOption {
  id: PostType;
  label: string;
}