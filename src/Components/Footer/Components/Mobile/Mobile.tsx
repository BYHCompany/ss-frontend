import { Title } from 'byh-components';
import React from 'react';
import { ReactComponent as GPlay } from '../../../../assets/img/mobileStores/GPlay.svg';
import { ReactComponent as AppStore } from '../../../../assets/img/mobileStores/appStore.svg';
import './Mobile.scss';
import { MobileProps } from './MobileTypes';

export const Mobile: React.FC<MobileProps> = ({ label }): React.ReactElement => {
  return (
    <div className="mobile__wrapper">
      <Title variant="secondary" type="medium" style={{ marginBottom: '30px' }} text={label} />
      <a href="https://www.apple.com/ru/app-store/">
        <AppStore style={{ marginBottom: '12px' }} />
      </a>
      <a href="https://play.google.com/store">
        <GPlay />
      </a>
    </div>
  );
};
