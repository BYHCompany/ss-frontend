import { Button, Title } from 'byh-components';
import React from 'react';
import './ErrorPage.scss';
import { BiErrorCircle } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';

export const ErrorPage = () => {
  const { t } = useTranslation();

  return (
    <div className="error__wrapper">
      <div className="error__content">
        <Title
          style={{ marginBottom: 10 }}
          type="large"
          variant="primary"
          text={t('error:label')}
        />
        <p className="error_description">{t('error:desciption')}</p>
        <div>
          <Button
            style={{ marginRight: '10px' }}
            width={170}
            height={60}
            fontSize={26}
            label={t('error:buttons.main')}
            variant="primary"
          />
          <Button
            width={170}
            height={60}
            fontSize={26}
            label={t('error:buttons.support')}
            variant="primary"
          />
        </div>
      </div>
      <BiErrorCircle className="error__icon" />
    </div>
  );
};
