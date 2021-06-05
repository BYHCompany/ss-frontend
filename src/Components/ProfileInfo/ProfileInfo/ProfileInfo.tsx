import { Button, ImageComponent, Paper, Title } from 'byh-components';
import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import { tag, Tags } from '../../Tags/Tags/Tags';
import './ProfileInfo.scss';
export type ProfileInfoTypes = {
  id: string;
  location: string;
  photo: string;
  firstName: string;
  lastName: string;
  about: string;
  tags: tag[];
};

interface ProfileInfoProps {
  profileInfoData: ProfileInfoTypes[];
}

export const ProfileInfo: React.FC<ProfileInfoProps> = ({ profileInfoData }) => {
  return (
    <>
      {profileInfoData.map((data) => (
        <Paper key={data.id} maxWidth={1170} style={{ padding: 35, display: 'flex' }}>
          <div>
            <ImageComponent src={data.photo} width={207} height={207} style={{ marginRight: 30 }} />
          </div>
          <div className="profile-info__wrapper">
            <div className="fullName">
              <div className="fullName-info" data-testid="fullName-info">
                <Title text={data.firstName} style={{ marginRight: 10 }} type={'medium'} />
                <Title text={data.lastName} type={'medium'} />
              </div>
              <a href="#">
                <FiSettings style={{ fontSize: 30 }} />
              </a>
            </div>
            <section className="location__section">
              <GrLocation style={{ marginRight: 10 }} />

              <Title text={data.location} type={'ultraSmall'} />
            </section>
            <section className="about__section">
              <p>{data.about}</p>
            </section>
            <div className="tags-message__wrapper">
              <div className="profile-info__tags-wrapper">
                <Tags tags={data.tags} />
              </div>
              <Button label="Сообщения" width={170} height={43} fontSize={24} variant={'primary'} />
            </div>
          </div>
        </Paper>
      ))}
    </>
  );
};
