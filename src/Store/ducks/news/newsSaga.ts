import { call, put, takeEvery } from 'redux-saga/effects';
import { CustomResponseType } from '../../../GlobalTypes/responseType';
import { PayloadAction } from '@reduxjs/toolkit';
import { LoadingState } from '../../commonType';
import { fetchLastTenNews, setLastTenNews } from './newsReducer';
import { newsType } from './@types';
import { NewsApi } from '../../../api/NewsApi';
import { setLoadingState } from '../advert/advertReducer';

function* NewsWorker() {
  try {
    const newsData: CustomResponseType<newsType[]> = yield call(NewsApi.getLastTenNews);
    const news = newsData.data;
    yield put(setLastTenNews(news));
  } catch (error) {
    yield put(setLoadingState(LoadingState.ERROR));
  }
}

export function* NewsSagaWatcher() {
  yield takeEvery(fetchLastTenNews.type, NewsWorker);
}
