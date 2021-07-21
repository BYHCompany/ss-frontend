import React from 'react';
import { CarSelectorForm } from '../../../Components/CarSelectForm';
import { TypeSelect } from '../../../Components/TypeSelect';
import { ProfitableOffers } from '../Components/ProfitableOffers/ProfitableOffers';
import { SpecialOffers } from '../Components/SpecialOffers/SpecialOffers';
import { TopicsSlider } from '../Components/TopicsSlider/TopicsSlider';

export const MainPage = () => {
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
