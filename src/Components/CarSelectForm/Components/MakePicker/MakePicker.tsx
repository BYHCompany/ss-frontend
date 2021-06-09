import { Button, Paper, Title } from 'byh-components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import './MakePicker.scss';

export const MakePicker = () => {
  const { t } = useTranslation();
  return (
    <div data-testid="make-picker" style={{ marginRight: 15 }}>
      <Title variant="primary" type="medium">
        {t('mainPage:carSelectForm.label')}
      </Title>
      <Paper
        className="make-picker__wrapper"
        customBgColor="#fff"
        height={314}
        width={292}
        boxShadow={false}>
        <Title type="ultraSmall" variant="default">
          {t('mainPage:carSelectForm.famousMake')}
        </Title>
        <div className="make__wrapper"></div>
        <Button fullWidth fontSize={18} variant="primary">
          {t('mainPage:buttons.others')}
        </Button>
      </Paper>
    </div>
  );
};
