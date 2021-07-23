import { call, put, takeEvery } from 'redux-saga/effects';
import { CustomResponseType } from '../../../GlobalTypes/responseType';
import { LoadingState } from '../../commonType';
import {
  fetchMake,
  fetchModel,
  fetchSearchData,
  fetchSearchDataForCount,
  setCountOfAvailableAdvert,
  setMake,
  setModel,
  setSearchedData,
} from './searchCarReducer';
import { CarSearchApi } from '../../../api/SearchCarApi';
import { setLoadingState } from '../advert/advertReducer';
import { PayloadAction } from '@reduxjs/toolkit';
import { searchAdvert } from '../../../GlobalTypes/searchAdvert';
import { MediumAdvert } from '../../../GlobalTypes/advertTypes';

function* SearchCarMakeWorker() {
  try {
    const makeData: CustomResponseType<string[]> = yield call(CarSearchApi.GetMake);

    yield put(setMake(makeData.data));
  } catch (error) {
    yield put(setLoadingState(LoadingState.ERROR));
  }
}
function* SearchCarModelWorker(action: PayloadAction<string>) {
  try {
    const modelData: CustomResponseType<string[]> = yield call(
      CarSearchApi.GetModel,
      action.payload,
    );

    yield put(setModel(modelData.data));
  } catch (error) {
    yield put(setLoadingState(LoadingState.ERROR));
  }
}
function* FindTheNumberOfCarsWorker(action: PayloadAction<searchAdvert>) {
  try {
    const countData: CustomResponseType<string> = yield call(
      CarSearchApi.GetCarCount,
      action.payload,
    );

    yield put(setCountOfAvailableAdvert(countData.message));
  } catch (error) {
    yield put(setLoadingState(LoadingState.ERROR));
  }
}
function* FindAdvertsByData(action: PayloadAction<searchAdvert>) {
  try {
    const countData: CustomResponseType<MediumAdvert[]> = yield call(
      CarSearchApi.GetCarData,
      action.payload,
    );

    yield put(setSearchedData(countData.data));
  } catch (error) {
    yield put(setLoadingState(LoadingState.ERROR));
  }
}

export function* SearchCarSagaWatcher() {
  yield takeEvery(fetchMake.type, SearchCarMakeWorker);
  yield takeEvery(fetchModel.type, SearchCarModelWorker);
  yield takeEvery(fetchSearchDataForCount.type, FindTheNumberOfCarsWorker);
  yield takeEvery(fetchSearchData.type, FindAdvertsByData);
}
