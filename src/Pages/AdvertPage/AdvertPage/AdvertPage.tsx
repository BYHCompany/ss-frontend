import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { fetchAdvert, setAdvert } from '../../../Store/ducks/advert/advertReducer';
import {
  getAdvert,
  getIsAdvertError,
  getIsAdvertLoading,
} from '../../../Store/ducks/advert/advertSelector';
import { AdvertInfo } from '../Components/AdvertInfo/AdvertInfo';
import { AdvertSlider } from '../Components/AdvertSlider/AdvertSlider';
import { AdvertTitle } from '../Components/AdvertTitle/AdvertTitle';
import { CarEquipment } from '../Components/CarEquipment/CarEquipment';
import { Comment } from '../Components/Comment/Comment';
import './AdvertPage.scss';
export const AdvertPage = () => {
  const dispatch = useDispatch();
  const advert = useSelector(getAdvert);
  const isLoading = useSelector(getIsAdvertLoading);
  const isError = useSelector(getIsAdvertError);
  const params: { id: string } = useParams();
  const id = params.id;
  React.useEffect(() => {
    dispatch(fetchAdvert(id));

    return () => {
      dispatch(setAdvert(null));
    };
  }, [dispatch, id]);

  if (isError) {
    return <Redirect to="/" />;
  }
  if (isLoading) {
    return (
      <div>
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
