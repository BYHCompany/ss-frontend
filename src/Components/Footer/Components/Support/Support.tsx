import { Title } from 'byh-components';
import React from 'react';
import './Support.scss';

export const Support: React.FC = (): React.ReactElement => {
  return (
    <div className="support">
      <Title variant="secondary" className="support__title" type="medium" text="Поддержка" />
      <ul className="support__list">
        <li className="support__item">
          <a href="#">Написать в поддержку</a>
        </li>
        <li className="support__item">
          <a href="#">Как подать объявление?</a>
        </li>
        <li className="support__item">
          <a href="#">Как создать учётную запись?</a>
        </li>
        <li className="support__item">
          <a href="#">Что делать если в поиске не отображается моё объявление?</a>
        </li>
        <li className="support__item">
          <a href="#">Что нужно для идеального объявления или как продать машину быстрее?</a>
        </li>
      </ul>
    </div>
  );
};
