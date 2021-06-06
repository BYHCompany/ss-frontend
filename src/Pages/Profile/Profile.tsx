import React from 'react';
import { profileInfoData } from '../../assets/profileInfoData';
import { ProfileInfo } from '../../Components/ProfileInfo';
import './Profile.scss';

export const Profile: React.FC = (): React.ReactElement => {
  return (
    <div>
      <ProfileInfo {...profileInfoData} />
    </div>
  );
};
