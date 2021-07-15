import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { LoadingState } from '../../commonType';
import { AppStateType } from '../../store';

export const getAdvert = (state: AppStateType) => state.advert.advert;
export const getAdvertCar = (state: AppStateType) => state.advert.advert?.item;

export const getCarMainInfo = createDraftSafeSelector(getAdvertCar, (state) => {
  if (state) {
    const mainInfo = {
      year: state.year,
      millage: state.millage,
      transmission: state.transmission,
      steeringWheel: state.steeringWheel,
      gearbox: state.gearbox,
      engineType: state.engineType,
      power: state.power,
      carBody: state.carBody,
      tax: state.tax,
      vin: state.vin,
      carLicensePlate: state.carLicensePlate,
    };
    return mainInfo;
  }
});

export const getAdvertImages = createDraftSafeSelector(getAdvertCar, (state) => {
  const newPhoto = state?.photo.map((photo) => {
    return { photo };
  });

  return newPhoto;
});

export const getAdvertComment = createDraftSafeSelector(getAdvertCar, (state) => state?.comment);

export const getAdvertTitle = createDraftSafeSelector(
  getAdvertCar,
  (state) => `${state?.make} ${state?.model}`,
);

export const getLoadingAdvertState = (state: AppStateType): LoadingState => state.advert.status;

export const getIsAdvertLoading = (state: AppStateType): boolean =>
  getLoadingAdvertState(state) === LoadingState.LOADING;
