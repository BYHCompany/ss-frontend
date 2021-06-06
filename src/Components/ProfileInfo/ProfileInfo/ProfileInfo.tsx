import { Button, ImageComponent, Paper, Title } from 'byh-components';
import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import { Tag, Tags } from '../../Tags/Tags/Tags';
import './ProfileInfo.scss';
export interface ProfileInfoProps {
  location: string;
  photoUrl: string;
  firstName: string;
  lastName: string;
  about: string;
  tags: Tag[];
}

export const ProfileInfo: React.FC<ProfileInfoProps> = ({
  about,
  firstName,
  lastName,
  location,
  photoUrl,
  tags,
}) => {
  return (
    <Paper maxWidth={1170} style={{ padding: 35, display: 'flex' }}>
      <div>
        <ImageComponent src={photoUrl} width={207} height={207} style={{ marginRight: 30 }} />
      </div>
      <div className="profile-info__wrapper">
        <div className="fullName">
          <div className="fullName-info" data-testid="fullName-info">
            <Title text={firstName} style={{ marginRight: 10 }} type={'medium'} />
            <Title text={lastName} type={'medium'} />
          </div>
          <a href="#">
            <FiSettings style={{ fontSize: 30 }} />
          </a>
        </div>
        <section className="location__section">
          <GrLocation style={{ marginRight: 10 }} />

          <Title text={location} type={'ultraSmall'} />
        </section>
        <section className="about__section">
          <p>{about}</p>
        </section>
        <div className="tags-message__wrapper">
          <div className="profile-info__tags-wrapper">
            <Tags tags={tags} />
          </div>
          <Button label="Сообщения" width={170} height={43} fontSize={24} variant={'primary'} />
        </div>
      </div>
    </Paper>
  );
};
