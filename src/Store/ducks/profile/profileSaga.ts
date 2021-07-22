import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { AdvertApi } from '../../../api/AdvertApi';
import { ProfileApi } from '../../../api/ProfileApi';
import { SmallAdvert } from '../../../GlobalTypes/advertTypes';
import { UnformattedFullProfile } from '../../../GlobalTypes/profileTypes';
import { CustomResponseType } from '../../../GlobalTypes/responseType';
import { LoadingState } from '../../commonType';
import {
  fetchFullProfile,
  fetchSmallProfileAdverts,
  setFullProfileData,
  setProfileLoadingState,
  setSmallProfileAdverts,
} from './profileReducer';

function* ProfileFullDataWorker(action: PayloadAction<string>) {
  try {
    const profileData: CustomResponseType<UnformattedFullProfile> = yield call(
      ProfileApi.getFullProfile,
      action.payload,
    );
    const profile = profileData.data;
    yield put(setFullProfileData(profile));
  } catch (error) {
    yield put(setProfileLoadingState(LoadingState.ERROR));
  }
}

function* ProfileSmallAdvertsDataWorker(action: PayloadAction<string>) {
  try {
    const smallAdverts: CustomResponseType<SmallAdvert[]> = yield call(
      AdvertApi.GetSmallAdvertsByOwnerID,
      action.payload,
    );
    const smallAdvertsData = smallAdverts.data;
    yield put(setSmallProfileAdverts(smallAdvertsData));
  } catch (error) {
    yield put(setProfileLoadingState(LoadingState.ERROR));
  }
}

export function* ProfileSagaWatcher() {
  yield takeEvery(fetchFullProfile.type, ProfileFullDataWorker);
  yield takeEvery(fetchSmallProfileAdverts.type, ProfileSmallAdvertsDataWorker);
}
