import { call, put, takeEvery } from 'redux-saga/effects';
import { Advert } from '../../../GlobalTypes/advertTypes';
import { CustomResponseType } from '../../../GlobalTypes/responseType';
import { fetchAdvert, setAdvert, setLoadingState } from './advertReducer';
import { AdvertApi } from '../../../api/AdvertApi';
import { PayloadAction } from '@reduxjs/toolkit';
import { LoadingState } from '../../commonType';

function* AdvertWorker(action: PayloadAction<string>) {
  try {
    const advertData: CustomResponseType<Advert> = yield call(AdvertApi.GetAdvert, action.payload);
    const advert = advertData.data;
    yield put(setAdvert(advert));
  } catch (error) {
    yield put(setLoadingState(LoadingState.ERROR));
  }
}

export function* AdvertSagaWatcher() {
  yield takeEvery(fetchAdvert.type, AdvertWorker);
}
