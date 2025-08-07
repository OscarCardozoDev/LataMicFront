// app/features/profile/index.tsx
import React from 'react';
import { ProfileView } from './view';
import { useProfile } from './hooks';
import { ProfileScreenProps } from './types';

const Profile: React.FC<ProfileScreenProps> = ({ navigation }) => {
  const profileData = useProfile();

  return (
    <ProfileView 
      profileData={profileData} 
    />
  );
};

export default Profile;
export type { ProfileScreenProps } from './types';