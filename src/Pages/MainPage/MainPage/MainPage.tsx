import React from 'react';
import { CarSelectorForm } from '../../../Components/CarSelectForm';
import { TypeSelect } from '../../../Components/TypeSelect';
import { SpecialOffers } from './Components/SpecialOffers/SpecialOffers';

export const MainPage = () => {
  return (
    <div>
      <TypeSelect />
      <CarSelectorForm />
      <SpecialOffers />
    </div>
  );
};
