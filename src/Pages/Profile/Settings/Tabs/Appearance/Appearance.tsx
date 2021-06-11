import React from 'react';
import { ReactComponent as ThemePreview } from '../../../../../assets/img/plates/ThemePreview.svg';
import './Appearance.scss';

export const Appearance: React.FC = () => {
  return (
    <form className="appearance__wrapper">
      <div className="appearance__left">
        <p>Темная Тема</p>
      </div>
      <div className="appearance__right">
        <div className="appearance__themePreview">
          <ThemePreview style={{ marginBottom: 10 }} />
          <p className="appearance__themePreview__text">Бережёт ваши глаза в ночное время суток</p>
        </div>
      </div>
    </form>
  );
};
