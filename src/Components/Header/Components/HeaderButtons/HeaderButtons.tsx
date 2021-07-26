import { Button } from 'byh-components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { CgFileDocument } from 'react-icons/cg';
import { RiAccountBoxLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAuthUserID, getIsAuth } from '../../../../Store/ducks/app/appSelector';
import { IoMdLogIn } from 'react-icons/io';
import { AiOutlineUserAdd } from 'react-icons/ai';

import './HeaderButtons.scss';
import { useCallback } from 'react';

export const HeaderButtons = () => {
  const { t } = useTranslation();
  const inAuth = useSelector(getIsAuth);
  const authUserID = useSelector(getAuthUserID);
  const history = useHistory();

  const routeAccount = useCallback(
    () => history.push(`/profile/${authUserID}`),
    [authUserID, history],
  );

  const routeAddAdvert = useCallback(() => history.push('/addAdvert'), [history]);

  const routeSignUp = useCallback(() => {
    history.push('/signUp');
  }, [history]);

  const routeSignIn = useCallback(() => {
    history.push('/signIn');
  }, [history]);

  return (
    <div className="header-buttons" data-testid="header-buttons">
      {inAuth ? (
        <>
          <Button
            style={{ marginRight: 10 }}
            startIcon={<CgFileDocument />}
            height={35}
            width={237}
            paddingVertical={5}
            paddingHorizontal={10}
            variant="secondary"
            onClick={routeAddAdvert}
            fontSize={18}>
            {t('header:ad')}
          </Button>
          <Button
            startIcon={<RiAccountBoxLine />}
            height={35}
            width={170}
            paddingVertical={5}
            variant="secondary"
            onClick={routeAccount}
            fontSize={18}>
            {t('header:account')}
          </Button>
        </>
      ) : (
        <>
          <Button
            style={{ marginRight: 10 }}
            startIcon={<AiOutlineUserAdd />}
            height={35}
            width={237}
            paddingVertical={5}
            paddingHorizontal={10}
            variant="secondary"
            onClick={routeSignUp}
            fontSize={18}>
            {t('header:signUp')}
          </Button>
          <Button
            startIcon={<IoMdLogIn />}
            height={35}
            width={130}
            paddingVertical={5}
            variant="secondary"
            onClick={routeSignIn}
            fontSize={18}>
            {t('header:signIn')}
          </Button>
        </>
      )}
    </div>
  );
};
