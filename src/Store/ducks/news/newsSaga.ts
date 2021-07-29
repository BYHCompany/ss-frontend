import { call, put, takeEvery } from 'redux-saga/effects';
import { CustomResponseType } from '../../../GlobalTypes/responseType';
import { PayloadAction } from '@reduxjs/toolkit';
import { LoadingState } from '../../commonType';
import {
  fetchLastTenShortNews,
  fetchOneFullByIdNews,
  setLastTenShortNews,
  setOneFullByIdNews,
} from './newsReducer';
import { newsType } from './@types';
import { NewsApi } from '../../../api/NewsApi';
import { setLoadingState } from '../advert/advertReducer';

function* GetShortNewsWorker() {
  try {
    const newsData: CustomResponseType<newsType[]> = yield call(NewsApi.getLastTenNews);
    const news = newsData.data;
    yield put(setLastTenShortNews(news));
  } catch (error) {
    yield put(setLoadingState(LoadingState.ERROR));
  }
}
function* GetOneFullNewsWorker(action: PayloadAction<string>) {
  try {
    const newsData: CustomResponseType<newsType> = yield call(
      NewsApi.getFullNewsById,
      action.payload,
    );
    const news = newsData.data;
    yield put(setOneFullByIdNews(news));
  } catch (error) {
    yield put(setLoadingState(LoadingState.ERROR));
  }
}

export function* NewsSagaWatcher() {
  yield takeEvery(fetchLastTenShortNews.type, GetShortNewsWorker);
  yield takeEvery(fetchOneFullByIdNews.type, GetOneFullNewsWorker);
}
