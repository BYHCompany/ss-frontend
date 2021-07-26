import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { AuthApi } from '../../../api/AuthApi';
import { CustomResponseType } from '../../../GlobalTypes/responseType';
import { LoadingState } from '../../commonType';
import { setAuthLoadingState } from '../app/appReducer';
import { LoginData, LoginResponseData } from './@types';
import { endLogin, getProfileByAccessToken, startLogin } from './authReducer';

function* LoginSagaWorker(action: PayloadAction<LoginData>) {
  try {
    const rawLoginData: CustomResponseType<LoginResponseData> = yield call(
      AuthApi.login,
      action.payload,
    );
    const loginData = rawLoginData.data;
    yield put(endLogin(loginData));
  } catch (error) {
    yield put(setAuthLoadingState(LoadingState.ERROR));
  }
}

function* InitAppUserSagaWorker(action: PayloadAction) {
  try {
    const rawLoginData: CustomResponseType<LoginResponseData> = yield call(AuthApi.checkUser);
    const loginData = rawLoginData.data;
    yield put(endLogin(loginData));
  } catch (error) {
    console.log(error);
  }
}

export function* AuthSagaWatcher() {
  yield takeEvery(startLogin.type, LoginSagaWorker);
  yield takeEvery(getProfileByAccessToken.type, InitAppUserSagaWorker);
}
