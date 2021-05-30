import { Title } from 'byh-components';
import React from 'react';
import { ReactComponent as GPlay } from '../../../../assets/img/mobileStores/GPlay.svg';
import { ReactComponent as AppStore } from '../../../../assets/img/mobileStores/appStore.svg';
import './Mobile.scss';
interface MobileProps extends React.HTMLAttributes<HTMLElement> {
  label: string;
}

export const Mobile: React.FC<MobileProps> = ({ label }): React.ReactElement => {
  return (
    <div className="mobile__wrapper">
      <Title variant="secondary" type="medium" style={{ marginBottom: '30px' }} text={label} />
      <AppStore style={{ marginBottom: '12px' }} />
      <GPlay />
    </div>
  );
};
