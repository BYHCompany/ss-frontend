import { Button, Paper, Title } from 'byh-components';
import React from 'react';
import { useEffect } from 'react';
import { FiSettings } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMainProfileInfo } from '../../../Store/ducks/profile/profileReducer';
import { BigProfileAvatar } from '../../Avatars/BigProfileAvatar';
import { Tags } from '../../Tags/Tags/Tags';
import './ProfileInfo.scss';

interface Props {
  userID: string;
}

export const ProfileInfo: React.FC<Props> = ({ userID }): React.ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMainProfileInfo(userID));
  });

  return (
    <Paper maxWidth={1170} style={{ padding: 35, display: 'flex', marginBottom: 55 }}>
      <div>
        <BigProfileAvatar />
      </div>
      <div className="profile-info__wrapper">
        <div className="fullName">
          <div className="fullName-info" data-testid="fullName-info">
            <Title style={{ marginRight: 10 }} type={'medium'} variant={'primary'}>
              {firstName}
            </Title>
            <Title type={'medium'} variant={'primary'}>
              {lastName}
            </Title>
          </div>

          <Link to={`/profile/${userID}/settings`} className="setting-button">
            <FiSettings style={{ fontSize: 30 }} />
          </Link>
        </div>
        <section className="location__section">
          <GrLocation style={{ marginRight: 10 }} />
          <Title variant={'primary'} type={'ultraSmall'}>
            {location}
          </Title>
        </section>
        <section className="about__section">
          <p>{about}</p>
        </section>
        <div className="tags-message__wrapper">
          <div className="profile-info__tags-wrapper">{tags && <Tags tags={tags} />}</div>
          <Button width={170} height={43} fontSize={24} variant={'primary'}>
            Сообщения
          </Button>
        </div>
      </div>
    </Paper>
  );
};
