import { ImageComponent } from 'byh-components';
import React from 'react';
import { useSelector } from 'react-redux';
import { ReactComponent as DefaultIcon } from '../../../assets/img/avatars/blue-default-avatar.svg';
import { getUserAvatar } from '../../../Store/ducks/profile/profileSelector';
import './bigProfileAvatar.scss';

export const BigProfileAvatar: React.FC = (): React.ReactElement | null => {
  const src = useSelector(getUserAvatar);

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
