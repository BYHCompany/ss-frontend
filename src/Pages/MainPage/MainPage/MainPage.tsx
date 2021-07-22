import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CarSelectorForm } from '../../../Components/CarSelectForm';
import { TypeSelect } from '../../../Components/TypeSelect';
import { setFullProfileData } from '../../../Store/ducks/profile/profileReducer';
import { ProfitableOffers } from '../Components/ProfitableOffers/ProfitableOffers';
import { SpecialOffers } from '../Components/SpecialOffers/SpecialOffers';
import { TopicsSlider } from '../Components/TopicsSlider/TopicsSlider';

export const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFullProfileData(null));
  });

  return (
    <div data-testid="mainPage_wrapper">
      {/* <div style={{ marginBottom: 40 }}>
        <TypeSelect />
      </div> */}
      <div style={{ marginBottom: 60 }}>
        <CarSelectorForm />
      </div>
      <SpecialOffers />
      <ProfitableOffers />
      <TopicsSlider />
    </div>
  );
};
