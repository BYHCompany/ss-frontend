import React from 'react';
import { useTranslation } from 'react-i18next';
import { contacts, icons } from '../../../assets/footerItems';
import { Copyrights } from '../Components/Copyrights/Copyrights';
import { Lang } from '../Components/Lang';
import { List } from '../Components/List/List';
import { Link } from '../Components/List/ListTypes';
import { Mobile } from '../Components/Mobile/Mobile';
import { Payment } from '../Components/Payment/Payment';
import './Footer.scss';

export const Footer: React.FC = (): React.ReactElement => {
  const { t } = useTranslation();

  const support = [
    { href: '#', linkName: t('footer:support.askSupport') },
    { href: '#', linkName: t('footer:support.howToAddAdvert') },
    { href: '#', linkName: t('footer:support.createAccount') },
    { href: '#', linkName: t('footer:support.noInSearch') },
    { href: '#', linkName: t('footer:support.idealAdvert') },
  ] as Link[];

  const info = [
    { href: '#', linkName: t('footer:info.about') },
    { href: '#', linkName: t('footer:info.vacancies') },
    { href: '#', linkName: t('footer:info.partners') },
    { href: '#', linkName: t('footer:info.ad') },
    { href: '#', linkName: t('footer:info.blog') },
    { href: '#', linkName: t('footer:info.politics') },
  ] as Link[];

  return (
    <div className="footer">
      <div className="container footer__container">
        <div className="footer__container__grid">
          <List
            className="footer__container__grid__item"
            items={support}
            label={t('footer:support.label')}
          />
          <List
            className="footer__container__grid__item"
            items={info}
            label={t('footer:info.label')}
          />
          <List items={contacts} label={t('footer:contacts')} />
          <Payment
            className="footer__container__grid__item"
            icons={icons}
            label={t('footer:payment')}
          />
          <Mobile className="footer__container__grid__item" label={t('footer:mobile')} />
          <Lang />
        </div>
        <Copyrights />
      </div>
    </div>
  );
};
