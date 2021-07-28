import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { LoadingState } from '../../commonType';
import { AppStateType } from '../../store';

const getNewsState = (state: AppStateType) => state.news.news;
const getLoadingState = (state: AppStateType) => state.news.status;

export const getNewsIsLoading = (state: AppStateType): boolean =>
  getLoadingState(state) === LoadingState.LOADING;

export const getNews = createDraftSafeSelector(getNewsState, (state) => {
  return state;
});
