import { Paper, Title } from 'byh-components';
import React from 'react';
import { useSelector } from 'react-redux';
import { BigProfileAvatar } from '../../../Components/Avatars/BigProfileAvatar';
import { getInfoForSettings } from '../../../Store/ducks/profile/profileSelector';
import './Settings.scss';
import { Account } from './Tabs/Account/Account';
import { Appearance } from './Tabs/Appearance/Appearance';
import { Privacy } from './Tabs/Privacy/Privacy';

type SettingsMenus = 'account' | 'privacy' | 'appearance';

export const Settings = () => {
  const [selectedType, setSelectedType] = React.useState<SettingsMenus>('account');

  const minProfileData = useSelector(getInfoForSettings);

  return (
    <Paper display="grid" className="settings__wrapper">
      <div className="settings__photoAndName">
        {minProfileData && (
          <>
            <BigProfileAvatar />
            <p className="settings__name">{minProfileData.firstName}</p>
            <p className="settings__name">{minProfileData.lastName}</p>
          </>
        )}
      </div>
      <div className="settings__mainContent">
        <Title style={{ marginBottom: 20 }} customVariantColor="#000000" type="medium">
          Настройки
        </Title>
        <div className="settings__selectorWrapper">
          <div className="settings__selector">
            <p
              onClick={() => setSelectedType('account')}
              className={`settings__selector__item ${
                selectedType === 'account' && 'settings__bold'
              }`}>
              Аккаунт
            </p>
            <p
              onClick={() => setSelectedType('privacy')}
              className={`settings__selector__item ${
                selectedType === 'privacy' && 'settings__bold'
              }`}>
              Конфиденциальность
            </p>
            <p
              onClick={() => setSelectedType('appearance')}
              className={`settings__selector__item ${
                selectedType === 'appearance' && 'settings__bold'
              }`}>
              Окружение
            </p>
          </div>
        </div>
        {selectedType === 'account' && <Account />}
        {selectedType === 'privacy' && <Privacy />}
        {selectedType === 'appearance' && <Appearance />}
      </div>
    </Paper>
  );
};
