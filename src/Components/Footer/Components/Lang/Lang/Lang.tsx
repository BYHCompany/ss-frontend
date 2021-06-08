import { Title } from 'byh-components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Lang.scss';
import en from '../../../../../assets/img/flags/en.png';
import lv from '../../../../../assets/img/flags/lv.png';
import ru from '../../../../../assets/img/flags/ru.png';

export const Lang: React.FC = (): React.ReactElement => {
  const { t, i18n } = useTranslation();

  const langHandler = (lg: string) => {
    i18n.changeLanguage(lg);
  };

  return (
    <div className="footer__lang__wrapper">
      <Title style={{ marginBottom: 10 }} variant="secondary" type="medium">
        {t('footer:lang.label')}
      </Title>
      <div onClick={() => langHandler('en')} className="footer__lang__item">
        <p>{t('footer:lang.en')}</p>
        <img alt="EN" src={en} />
      </div>
      <div onClick={() => langHandler('lv')} className="footer__lang__item">
        <p>{t('footer:lang.lv')}</p>
        <img alt="LV" src={lv} />
      </div>
      <div onClick={() => langHandler('ru')} className="footer__lang__item">
        <p>{t('footer:lang.ru')}</p>
        <img alt="RU" src={ru} />
      </div>
    </div>
  );
};
