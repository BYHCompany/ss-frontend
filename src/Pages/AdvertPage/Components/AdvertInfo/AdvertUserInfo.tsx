import { Button, ImageComponent } from 'byh-components';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { BiMessageDetail } from 'react-icons/bi';
import { FaPhoneAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { getAdvertUserData } from '../../../../Store/ducks/advert/advertSelector';

export const AdvertUserInfo = () => {
  const { t } = useTranslation();
  const userData = useSelector(getAdvertUserData);
  const [showEmail, setShowEmail] = React.useState(false);
  const [showPhone, setShowPhone] = React.useState(false);

  if (!userData) {
    return null;
  }

  const userBd = userData.db;
  return (
    <div className={'advert-info__account-info__wrapper'}>
      <div className="advert-info__account-info__photo">
        {userData.avatarURL && <ImageComponent height={121} width={121} src={userData.avatarURL} />}
      </div>
      <div style={{ width: '100%' }}>
        <div className="advert-info__account-info__fullName">
          <p>{`${userData.firstName} ${userData.lastName}`}</p>
          <p>
            <Trans i18nKey={'advertPage:owner.bd.value'}>{{ userBd }} </Trans>{' '}
          </p>
        </div>
        <div className="advert-info__account-info__buttons">
          {showEmail ? (
            <p className="advert-info__account-info__hiddenText"> {userData.email} </p>
          ) : (
            <Button
              variant="primary"
              style={{ marginBottom: 7 }}
              height={41}
              width={234}
              endIcon={<BiMessageDetail />}
              onClick={() => setShowEmail(!showEmail)}>
              {t('advertPage:buttons.contact')}
            </Button>
          )}
          {showPhone ? (
            <p className="advert-info__account-info__hiddenText"> {userData.phone} </p>
          ) : (
            <Button
              onClick={() => setShowPhone(!showPhone)}
              variant="primary"
              height={41}
              width={234}
              endIcon={<FaPhoneAlt />}>
              {t('advertPage:buttons.showNumber')}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
