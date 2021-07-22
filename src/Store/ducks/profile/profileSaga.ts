import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { ProfileApi } from '../../../api/ProfileApi';
import { UnformattedFullProfile } from '../../../GlobalTypes/profileTypes';
import { CustomResponseType } from '../../../GlobalTypes/responseType';
import { LoadingState } from '../../commonType';
import { fetchFullProfile, setFullProfileData, setProfileLoadingState } from './profileReducer';

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

export function* ProfileSagaWatcher() {
  yield takeEvery(fetchFullProfile.type, ProfileFullDataWorker);
}
