import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { LoadingState } from '../../commonType';
import { AppStateType } from '../../store';

const getSearchCar = (state: AppStateType) => state.searchCar.data;
const getLoadingState = (state: AppStateType) => state.searchCar.status;

export const getSearchCarMake = createDraftSafeSelector(getSearchCar, (state) => {
  if (state) {
    return state.make;
  }
});
export const getSearchCarModel = createDraftSafeSelector(getSearchCar, (state) => {
  if (state) {
    return state.model;
  }
});

export const getCarFormIsLoading = (state: AppStateType): boolean =>
  getLoadingState(state) === LoadingState.LOADING;

export const getSearchMessage = createDraftSafeSelector(getSearchCar, (state) => {
  if (state) {
    return state.count;
  }
});
export const getSearchData = createDraftSafeSelector(getSearchCar, (state) => {
  if (state) {
    return state.adverts;
  }
});
