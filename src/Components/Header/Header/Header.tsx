import { Title } from 'byh-components';
import React from 'react';
import { HeaderButtons } from '../Components/HeaderButtons/HeaderButtons';

import './Header.scss';
export const Header = () => {
  return (
    <div className="header" data-testid="header">
      <div className="header__container">
        <Title style={{ width: '100%' }} variant="secondary" text={'SS V8'} type={'large'} />
        <HeaderButtons />
      </div>
    </div>
  );
};
