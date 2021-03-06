import { Paper, Title } from 'byh-components';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { BigProfileAvatar } from '../../../Components/Avatars/BigProfileAvatar';
import { LoadingState } from '../../../Store/commonType';
import { getIsAuth } from '../../../Store/ducks/app/appSelector';
import { fetchFullProfile } from '../../../Store/ducks/profile/profileReducer';
import {
  getFullProfileLoadingState,
  getMainProfileInfo,
} from '../../../Store/ducks/profile/profileSelector';
import './Settings.scss';
import { Account } from './Tabs/Account/Account';
import { Appearance } from './Tabs/Appearance/Appearance';
import { Privacy } from './Tabs/Privacy/Privacy';

type SettingsMenus = 'account' | 'privacy' | 'appearance';

export const Settings: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [selectedType, setSelectedType] = React.useState<SettingsMenus>('account');

  //Selectors
  const profileStatus = useSelector(getFullProfileLoadingState);
  const mainProfileInfo = useSelector(getMainProfileInfo);
  const isAuthInApp = useSelector(getIsAuth);

  const params: { userID: string } = useParams();
  const userID = params.userID;

  useEffect(() => {
    if (!isAuthInApp && profileStatus === LoadingState.NEVER) {
      dispatch(fetchFullProfile(userID));
    }

    if (profileStatus === LoadingState.ERROR) {
      history.push('/error/404');
    }
  });

  return (
    <Paper display="grid" className="settings__wrapper">
      <div className="settings__photoAndName">
        {mainProfileInfo && (
          <>
            <BigProfileAvatar />
            <p className="settings__name">{mainProfileInfo.firstName}</p>
            <p className="settings__name">{mainProfileInfo.lastName}</p>
          </>
        )}
      </div>
      <div className="settings__mainContent">
        <Title style={{ marginBottom: 20 }} customVariantColor="#000000" type="medium">
          ??????????????????
        </Title>
        <div className="settings__selectorWrapper">
          <div className="settings__selector">
            <p
              onClick={() => setSelectedType('account')}
              className={`settings__selector__item ${
                selectedType === 'account' && 'settings__bold'
              }`}>
              ??????????????
            </p>
            <p
              onClick={() => setSelectedType('privacy')}
              className={`settings__selector__item ${
                selectedType === 'privacy' && 'settings__bold'
              }`}>
              ????????????????????????????????????
            </p>
            <p
              onClick={() => setSelectedType('appearance')}
              className={`settings__selector__item ${
                selectedType === 'appearance' && 'settings__bold'
              }`}>
              ??????????????????
            </p>
          </div>
        </div>
        {selectedType === 'account' && <Account userID={userID} />}
        {selectedType === 'privacy' && <Privacy userID={userID} />}
        {selectedType === 'appearance' && <Appearance />}
      </div>
    </Paper>
  );
};
