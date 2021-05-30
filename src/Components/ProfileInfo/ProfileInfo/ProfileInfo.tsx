import { Button, ImageComponent, Paper, Title } from 'byh-components';
import React from 'react';
import { tag, Tags } from '../Components/Tags/Tags';
import { FiSettings } from 'react-icons/fi';
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
          <ImageComponent src={data.photo} width={207} height={207} />
          <div style={{ flexDirection: 'column' }}>
            <Title text={data.firstName} type={'medium'} />
            <Title text={data.lastName} type={'medium'} />
            <a href="#">
              <FiSettings />
            </a>
            <p>{data.about}</p>
            <Title text={data.location} type={'ultraSmall'} />
            <Tags tags={data.tags} />
            <Button label="Сообщения" />
          </div>
        </Paper>
      ))}
    </>
  );
};
