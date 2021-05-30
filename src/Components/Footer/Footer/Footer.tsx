import React from 'react';
import { contacts, icons, info, support } from '../../../assets/footerItems';
import { Copyrights } from '../Components/Copyrights/Copyrights';
import { List } from '../Components/List/List';
import { Mobile } from '../Components/Mobile/Mobile';
import { Payment } from '../Components/Payment/Payment';
import './Footer.scss';

export const Footer: React.FC = (): React.ReactElement => {
  return (
    <div className="footer">
      <div className="container footer__container">
        <div className="footer__container__grid footer__container__top">
          <List className="footer__container__grid__item" items={support} label="Поддержка" />
          <List className="footer__container__grid__item" items={info} label="Доп. информация" />
          <div style={{ marginLeft: '200px', maxWidth: '170px' }}>
            <List items={contacts} label="Контакты" />
          </div>
        </div>
        <div className="footer__container__grid footer__container__bottom">
          <Payment className="footer__container__grid__item" icons={icons} label="Способы оплаты" />
          <Mobile className="footer__container__grid__item" label="Для мобильных устройств" />
        </div>
        <Copyrights />
      </div>
    </div>
  );
};
