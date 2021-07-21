import { ImageComponent } from 'byh-components';
import React from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as DefaultIcon } from '../../../assets/img/avatars/blue-default-avatar.svg';
import { getProfileAvatar } from '../../../Store/ducks/profile/profileSelector';
import './bigProfileAvatar.scss';

export const BigProfileAvatar: React.FC = (): React.ReactElement | null => {
  const src = useSelector(getProfileAvatar);

  return (
    <>
      {src ? (
        <ImageComponent src={src} width={207} height={207} style={{ marginRight: 30 }} />
      ) : (
        <DefaultIcon className="profile__defaultAvatar--big" />
      )}
    </>
  );
};
