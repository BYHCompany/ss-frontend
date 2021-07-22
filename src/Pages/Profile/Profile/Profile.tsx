import { Paper, Title } from 'byh-components';
import React, { useEffect } from 'react';
import { AdvertPreview } from '../../../Components/AdvertPreview';
import { ProfileInfo } from '../../../Components/ProfileInfo';
import './Profile.scss';
import { biggerAdvertData } from '../../../assets/advertPreviewData';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFullProfile } from '../../../Store/ducks/profile/profileReducer';
import { getFullProfileLoadingState } from '../../../Store/ducks/profile/profileSelector';
import { LoadingState } from '../../../Store/commonType';

export const Profile: React.FC = (): React.ReactElement => {
  const advertVisability: boolean = biggerAdvertData.length > 0 ? true : false;

  const params: { id: string } = useParams();
  const userID = params.id;

  const dispatch = useDispatch();

  const profileStatus = useSelector(getFullProfileLoadingState);

  useEffect(() => {
    if (profileStatus === LoadingState.NEVER || profileStatus === LoadingState.ERROR) {
      dispatch(fetchFullProfile(userID));
    }
  }, [dispatch, userID, profileStatus]);

  return (
    <div>
      <ProfileInfo userID={userID} />
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
