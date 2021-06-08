import React from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import './Copyrights.scss';

export const Copyrights: React.FC = (): React.ReactElement => {
  const { t } = useTranslation();
  return (
    <div className="copyrights__container copyrights">
      <p>SS V8 | {new Date().getFullYear()}</p>
      <p>
        <AiOutlineCopyrightCircle />
        {t('footer:copyrights')}
      </p>
      <p>info@ssv8.com</p>
    </div>
  );
};
