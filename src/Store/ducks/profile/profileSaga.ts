import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { ProfileApi } from '../../../api/ProfileApi';
import { Profile } from '../../../GlobalTypes/profileTypes';
import { CustomResponseType } from '../../../GlobalTypes/responseType';
import { LoadingState } from '../../commonType';
import { fetchProfile, setProfileData, setProfileLoadingState } from './profileReducer';

function* ProfileWorker(action: PayloadAction<string>) {
  try {
    const profileData: CustomResponseType<Profile> = yield call(
      ProfileApi.getProfile,
      action.payload,
    );
    const profile = profileData.data;
    yield put(setProfileData(profile));
  } catch (error) {
    yield put(setProfileLoadingState(LoadingState.ERROR));
  }
}

export function* ProfileSagaWatcher() {
  yield takeEvery(fetchProfile.type, ProfileWorker);
}
