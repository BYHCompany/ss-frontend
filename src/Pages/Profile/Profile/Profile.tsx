import { Paper, Title } from 'byh-components';
import React from 'react';
import { AdvertPreview } from '../../../Components/AdvertPreview';
import { ProfileInfo } from '../../../Components/ProfileInfo';
import './Profile.scss';
import { biggerAdvertData } from '../../../assets/advertPreviewData';
import { profileInfoData } from '../../../assets/profileInfoData';

export const Profile: React.FC = (): React.ReactElement => {
  const advertVisability: boolean = biggerAdvertData.length > 0 ? true : false;

  return (
    <div>
      <ProfileInfo
        about={profileInfoData.about}
        firstName={profileInfoData.firstName}
        lastName={profileInfoData.lastName}
        location={profileInfoData.location}
        photoUrl={profileInfoData.photoUrl}
        tags={profileInfoData.tags}
      />
      <Title variant="primary" type="medium" style={{ marginBottom: 30 }}>
        Объявления пользователя
      </Title>
      <Paper
        display="grid"
        className={`${advertVisability ? 'profile__userAdverts' : 'profile__userAdverts--empty'}`}>
        {advertVisability ? (
          biggerAdvertData.map((advert) => {
            return (
              <div className="profile__advert">
                <AdvertPreview
                  isElectric={advert.isElectric}
                  isInTrending={advert.isInTrending}
                  key={advert.id}
                  id={advert.id}
                  photo={advert.photo}
                  price={advert.price}
                  title={advert.title}
                  year={advert.id}
                />
              </div>
            );
          })
        ) : (
          <div className="">
            <Title variant="primary" type="small">
              В данный момент объявлений нет
            </Title>
          </div>
        )}
      </Paper>
    </div>
  );
};
