import { ImageComponent, Paper, Title } from 'byh-components';
import React from 'react';
import './Settings.scss';
import { Account } from './Tabs/Account/Account';
import { Appearance } from './Tabs/Appearance/Appearance';
import { Privacy } from './Tabs/Privacy/Privacy';

type SettingsMenus = 'account' | 'privacy' | 'appearance';

export const Settings = () => {
  const [selectedType, setSelectedType] = React.useState<SettingsMenus>('account');

  return (
    <Paper display="grid" className="settings__wrapper">
      <div className="settings__photoAndName">
        <ImageComponent
          style={{ marginBottom: 14 }}
          width={207}
          height={207}
          src="https://images.unsplash.com/photo-1621201523018-4744fee81b17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
        />
        <p className="settings__name">Имя</p>
        <p className="settings__name">Фамилия</p>
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
