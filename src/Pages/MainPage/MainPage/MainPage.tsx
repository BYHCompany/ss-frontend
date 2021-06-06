import React from 'react';
import { CarSelectorForm } from '../../../Components/CarSelectForm';
import { TypeSelect } from '../../../Components/TypeSelect';
import { ProfitableOffers } from './Components/ProfitableOffers/ProfitableOffers';
import { SpecialOffers } from './Components/SpecialOffers/SpecialOffers';

export const MainPage = () => {
  return (
    <div>
      <TypeSelect />
      <CarSelectorForm />
      <SpecialOffers />
      <ProfitableOffers />
    </div>
  );
};
