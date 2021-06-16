import { Title } from 'byh-components';
import React from 'react';
import { AdvertInfo } from '../Components/AdvertInfo/AdvertInfo';
import { AdvertSlider } from '../Components/AdvertSlider/AdvertSlider';
import { AdvertTitle } from '../Components/AdvertTitle/AdvertTitle';
import { CarEquipment } from '../Components/CarEquipment/CarEquipment';
import { Comment } from '../Components/Comment/Comment';
import './AdvertPage.scss';
export const AdvertPage = () => {
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
