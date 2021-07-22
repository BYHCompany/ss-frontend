import { Paper, Title } from 'byh-components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getAdvertComment } from '../../../../Store/ducks/advert/advertSelector';
import './Comment.scss';
export const Comment = () => {
  const commentContent = useSelector(getAdvertComment);
  const { t } = useTranslation();
  if (!commentContent) {
    return null;
  }

  return (
    <Paper className="comment__wrapper" width={770} style={{ marginBottom: 40 }}>
      <Title type="ultraSmall" className="comment__title" variant="primary">
        {t('advertPage:comment')}
      </Title>
      <p style={{ lineHeight: '30px', fontSize: 18 }}>{commentContent}</p>
    </Paper>
  );
};
