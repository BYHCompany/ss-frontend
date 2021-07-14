import { Title } from 'byh-components';
import React from 'react';
import { HeaderButtons } from '../Components/HeaderButtons/HeaderButtons';
import './Header.scss';
import { NavLink } from 'react-router-dom';
export const Header = () => {
  return (
    <div className="header" data-testid="header">
      <div className="header__container">
        <Title style={{ width: '100%' }} variant="secondary" type={'large'}>
          <NavLink className="header__title" to="/">
            {'SS V8'}
          </NavLink>
        </Title>
        <HeaderButtons />
      </div>
    </div>
  );
};
