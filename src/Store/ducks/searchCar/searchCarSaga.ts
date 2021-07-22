import { call, put, takeEvery } from 'redux-saga/effects';
import { CustomResponseType } from '../../../GlobalTypes/responseType';
import { LoadingState } from '../../commonType';
import { fetchMake, fetchModel, setMake, setModel } from './searchCarReducer';
import { CarSearchApi } from '../../../api/SearchCarApi';
import { setLoadingState } from '../advert/advertReducer';
import { PayloadAction } from '@reduxjs/toolkit';

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

export function* SearchCarSagaWatcher() {
  yield takeEvery(fetchMake.type, SearchCarMakeWorker);
  yield takeEvery(fetchModel.type, SearchCarModelWorker);
}
