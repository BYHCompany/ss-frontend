import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { fetchAdvert, setAdvert } from '../../../Store/ducks/advert/advertReducer';
import { getIsAdvertError, getIsAdvertLoading } from '../../../Store/ducks/advert/advertSelector';
import { AdvertInfo } from '../Components/AdvertInfo/AdvertInfo';
import { AdvertSlider } from '../Components/AdvertSlider/AdvertSlider';
import { AdvertTitle } from '../Components/AdvertTitle/AdvertTitle';
import { CarEquipment } from '../Components/CarEquipment/CarEquipment';
import { Comment } from '../Components/Comment/Comment';
import './AdvertPage.scss';
export const AdvertPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsAdvertLoading);
  const isError = useSelector(getIsAdvertError);
  const params: { advertID: string } = useParams();
  const advertID = params.advertID;

  React.useEffect(() => {
    dispatch(fetchAdvert(advertID));

    return () => {
      dispatch(setAdvert(null));
    };
  }, [dispatch, advertID]);

  // if (!advert) {
  //   return null;
  // }

  if (isError) {
    return <Redirect to="/" />;
  }
  if (isLoading) {
    return (
      <div style={{ height: '100vh' }}>
        <h1> LOADING...</h1>
      </div>
    );
  }
  return (
    <div className="advert-page__wrapper">
      <div className="advert-page__main-content">
        <AdvertTitle />
        <AdvertSlider />
        <Comment />
        <CarEquipment />
      </div>
      <AdvertInfo />
    </div>
  );
};
