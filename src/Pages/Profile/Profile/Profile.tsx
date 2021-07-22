import { Paper, Title } from 'byh-components';
import React, { useEffect } from 'react';
import { AdvertPreview } from '../../../Components/AdvertPreview';
import { ProfileInfo } from '../../../Components/ProfileInfo';
import './Profile.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchFullProfile,
  fetchSmallProfileAdverts,
} from '../../../Store/ducks/profile/profileReducer';
import {
  getAdvertsProfileInfo,
  getFullProfileLoadingState,
  getProfileAdvertsStatusInfo,
} from '../../../Store/ducks/profile/profileSelector';
import { LoadingState } from '../../../Store/commonType';
import { useState } from 'react';

export const Profile: React.FC = (): React.ReactElement => {
  const params: { userID: string } = useParams();
  const userID = params.userID;

  const dispatch = useDispatch();

  const profileStatus = useSelector(getFullProfileLoadingState);
  const advertStatus = useSelector(getProfileAdvertsStatusInfo);
  const profileAdverts = useSelector(getAdvertsProfileInfo);

  const [advertVisibility, setAdvertVisibility] = useState<boolean>(false);

  useEffect(() => {
    if (profileStatus === LoadingState.NEVER || profileStatus === LoadingState.ERROR) {
      dispatch(fetchFullProfile(userID));
    }
  }, [dispatch, userID, profileStatus]);

  useEffect(() => {
    if (advertStatus === LoadingState.NEVER || advertStatus === LoadingState.ERROR) {
      dispatch(fetchSmallProfileAdverts(userID));
    }
  }, [dispatch, userID, advertStatus, profileAdverts]);

  useEffect(() => {
    if (profileAdverts && advertStatus === LoadingState.SUCCESS) {
      setAdvertVisibility(profileAdverts?.length > 0);
    }
  }, [dispatch, userID, advertStatus, profileAdverts]);

  return (
    <div>
      <ProfileInfo userID={userID} />
      <Title variant="primary" type="medium" style={{ marginBottom: 30 }}>
        Объявления пользователя
      </Title>
      <Paper
        display="grid"
        className={`${advertVisibility ? 'profile__userAdverts' : 'profile__userAdverts--empty'}`}>
        {advertVisibility ? (
          profileAdverts &&
          profileAdverts.map((advert) => {
            return (
              <div className="profile__advert">
                <AdvertPreview
                  isElectric={advert.item.engineType === 'electric'}
                  //TODO:
                  //1. Hardcoded is in trending
                  isInTrending={true}
                  key={advert.item.photo[0]}
                  id={advert.item.model}
                  photo={advert.item.photo[0]}
                  price={advert.item.price}
                  title={`${advert.item.make}  ${advert.item.model}`}
                  year={advert.item.year}
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
