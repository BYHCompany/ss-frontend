import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { LoadingState } from '../../commonType';
import { AppStateType } from '../../store';

const getShortNewsState = (state: AppStateType) => state.news.shortNews;
const getFullNewsState = (state: AppStateType) => state.news.fullNews;
const getLoadingState = (state: AppStateType) => state.news.status;

export const getNewsIsLoading = (state: AppStateType): boolean =>
  getLoadingState(state) === LoadingState.LOADING;

export const getShortNews = createDraftSafeSelector(getShortNewsState, (state) => {
  return state;
});
export const getFullNews = createDraftSafeSelector(getFullNewsState, (state) => {
  return state;
});
