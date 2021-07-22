import { Button, Paper, Title } from 'byh-components';
import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoadingState } from '../../../Store/commonType';
import {
  getAdditionalProfileInfo,
  getFavoriteProfileInfo,
  getMainProfileInfo,
} from '../../../Store/ducks/profile/profileSelector';
import { BigProfileAvatar } from '../../Avatars/BigProfileAvatar';
import { Tags } from '../../Tags';
import './ProfileInfo.scss';

interface Props {
  userID: string;
}

export const ProfileInfo: React.FC<Props> = ({ userID }): React.ReactElement => {
  const mainData = useSelector(getMainProfileInfo);
  const additionalInfo = useSelector(getAdditionalProfileInfo);
  const tags = useSelector(getFavoriteProfileInfo);

  return (
    <Paper maxWidth={1170} style={{ padding: 35, display: 'flex', marginBottom: 55 }}>
      <div>
        <BigProfileAvatar />
      </div>
      <div className="profile-info__wrapper">
        <div className="fullName">
          <div className="fullName-info" data-testid="fullName-info">
            {mainData._status === LoadingState.SUCCESS && (
              <>
                <Title style={{ marginRight: 10 }} type={'medium'} variant={'primary'}>
                  {mainData.firstName}
                </Title>
                <Title type={'medium'} variant={'primary'}>
                  {mainData.lastName}
                </Title>
              </>
            )}
          </div>

          <Link to={`/profile/${userID}/settings`} className="setting-button">
            <FiSettings style={{ fontSize: 30 }} />
          </Link>
        </div>
        {additionalInfo._status === LoadingState.SUCCESS && (
          <>
            <section className="location__section">
              <GrLocation style={{ marginRight: 10 }} />
              <Title variant={'primary'} type={'ultraSmall'}>
                {additionalInfo.location}
              </Title>
            </section>
            <section className="about__section">
              <p>{additionalInfo.about}</p>
            </section>
          </>
        )}
        <div className="tags-message__wrapper">
          <div className="profile-info__tags-wrapper">
            {tags && <Tags tags={tags} clickable={false} />}
          </div>
          <Button width={170} height={43} fontSize={24} variant={'primary'}>
            Сообщения
          </Button>
        </div>
      </div>
    </Paper>
  );
};
