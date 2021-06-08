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
        <Title style={{ marginBottom: 10 }} type="large" variant="primary">
          {t('error:label')}
        </Title>
        <p className="error_description">{t('error:desciption')}</p>
        <div>
          <Button
            style={{ marginRight: '10px' }}
            width={170}
            height={60}
            fontSize={26}
            variant="primary">
            {t('error:buttons.main')}
          </Button>
          <Button width={170} height={60} fontSize={26} variant="primary">
            {t('error:buttons.support')}
          </Button>
        </div>
      </div>
      <BiErrorCircle className="error__icon" />
    </div>
  );
};
