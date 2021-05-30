import { Title } from 'byh-components';
import React from 'react';
import './Support.scss';

export const Support: React.FC = (): React.ReactElement => {
  return (
    <div className="support">
      <Title variant="secondary" className="support__title" type="medium" text="Поддержка" />
      <ul className="support__list">
        <li className="support__item">Написать в поддержку</li>
        <li className="support__item">Как подать объявление?</li>
        <li className="support__item">Как создать учётную запись?</li>
        <li className="support__item">Что делать если в поиске не отображается моё объявление?</li>
        <li className="support__item">
          Что нужно для идеального объявления или как продать машину быстрее?
        </li>
      </ul>
    </div>
  );
};
