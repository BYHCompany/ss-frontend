import { Paper, Title, Button } from 'byh-components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { GiCheckMark } from 'react-icons/gi';
import './SuccessPage.scss';
export const SuccessPage = () => {
  const { t } = useTranslation();
  return (
    <div className="successPage__wrapper">
      <Paper display="flex" maxWidth={1170} height={472} className="successPage__paper">
        <div className="successPage__successIcon--wrapper">
          <GiCheckMark className="successPage__successIcon" />
        </div>
        <Title style={{ marginBottom: 30 }} variant="primary" type={'medium'}>
          {t('successAddAdvert:successMessage')}
        </Title>

        <Title variant="primary" type={'ultraSmall'}>
          {t('successAddAdvert:successDescription')}
        </Title>
      </Paper>
      <Button height={60} width={490} fontSize={24} variant="primary">
        {t('successAddAdvert:button')}
      </Button>
    </div>
  );
};
