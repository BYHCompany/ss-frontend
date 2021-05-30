import React from 'react';
import { Copyrights } from '../Components/Copyrights/Copyrights';
import { Link, List } from '../Components/List/List';
import './style.scss';

export const support = [
  { href: '#', linkName: 'Написать в поддержку' },
  { href: '#', linkName: 'Как подать объявление?' },
  { href: '#', linkName: 'Как создать учётную запись?' },
  { href: '#', linkName: 'Что делать если в поиске не отображается моё объявление?' },
  { href: '#', linkName: 'Что нужно для идеального объявления или как продать машину быстрее?' },
] as Link[];

export const info = [
  { href: '#', linkName: 'О компании' },
  { href: '#', linkName: 'Вакансии' },
  { href: '#', linkName: 'Партнёрам' },
  { href: '#', linkName: 'Реклама на сайте' },
  { href: '#', linkName: 'Наш блог' },
  { href: '#', linkName: 'Политика конфиденциальности' },
] as Link[];

export const contacts = [
  { href: '#', linkName: 'О компании' },
  { href: '#', linkName: 'Вакансии' },
  { href: '#', linkName: 'Партнёрам' },
  { href: '#', linkName: 'Реклама на сайте' },
  { href: '#', linkName: 'Наш блог' },
  { href: '#', linkName: 'Политика конфиденциальности' },
] as Link[];

export const Footer: React.FC = (): React.ReactElement => {
  return (
    <div className="footer">
      <div className="container footer__container">
        <div className="footer__container__grid">
          <List items={support} label="Поддержка" />
          <List items={info} label="Доп. информация" />
          <List items={contacts} label="Контакты" />
        </div>
        <Copyrights />
      </div>
    </div>
  );
};
