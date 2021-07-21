import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery } from 'redux-saga/effects';
import { ProfileApi } from '../../../api/ProfileApi';
import { Tag } from '../../../Components/Tags/Tags/Tags';
import { AdvertWithoutCar } from '../../../GlobalTypes/advertTypes';
import {
  ProfileAdditionalInfo,
  ProfileMainInfo,
  ProfileRequiredInfo,
  ProfileSettings,
  ProfileSituationalInfo,
  UnformattedFullProfile,
} from '../../../GlobalTypes/profileTypes';
import { CustomResponseType } from '../../../GlobalTypes/responseType';
import { LoadingState } from '../../commonType';
import {
  fetchAdditionalProfileInfo,
  fetchAdvertsProfileInfo,
  fetchFavoriteProfileInfo,
  fetchFullProfile,
  fetchMainProfileInfo,
  fetchRequiredProfileInfo,
  fetchSettingsProfileInfo,
  fetchSituationalProfileInfo,
  setAdditionalProfileData,
  setAdvertsProfileData,
  setFavoriteProfileData,
  setFullProfileData,
  setMainProfileData,
  setProfileLoadingState,
  setRequiredProfileData,
  setSettingsProfileData,
  setSituationalProfileData,
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

function* ProfileMainDataWorker(action: PayloadAction<string>) {
  try {
    const profileData: CustomResponseType<ProfileMainInfo> = yield call(
      ProfileApi.getMainProfileInfo,
      action.payload,
    );
    const profile = profileData.data;
    yield put(setMainProfileData(profile));
  } catch (error) {
    yield put(setProfileLoadingState(LoadingState.ERROR));
  }
}

function* ProfileRequiredDataWorker(action: PayloadAction<string>) {
  try {
    const profileData: CustomResponseType<ProfileRequiredInfo> = yield call(
      ProfileApi.getRequiredProfileInfo,
      action.payload,
    );
    const profile = profileData.data;
    yield put(setRequiredProfileData(profile));
  } catch (error) {
    yield put(setProfileLoadingState(LoadingState.ERROR));
  }
}

function* ProfileAdditionalDataWorker(action: PayloadAction<string>) {
  try {
    const profileData: CustomResponseType<ProfileAdditionalInfo> = yield call(
      ProfileApi.getAdditionalProfileInfo,
      action.payload,
    );
    const profile = profileData.data;
    yield put(setAdditionalProfileData(profile));
  } catch (error) {
    yield put(setProfileLoadingState(LoadingState.ERROR));
  }
}

function* ProfileSettingsDataWorker(action: PayloadAction<string>) {
  try {
    const profileData: CustomResponseType<ProfileSettings> = yield call(
      ProfileApi.getSettingsProfileInfo,
      action.payload,
    );
    const profile = profileData.data;
    yield put(setSettingsProfileData(profile));
  } catch (error) {
    yield put(setProfileLoadingState(LoadingState.ERROR));
  }
}

function* ProfileSituationalDataWorker(action: PayloadAction<string>) {
  try {
    const profileData: CustomResponseType<ProfileSituationalInfo> = yield call(
      ProfileApi.getSituationalProfileInfo,
      action.payload,
    );
    const profile = profileData.data;
    yield put(setSituationalProfileData(profile));
  } catch (error) {
    yield put(setProfileLoadingState(LoadingState.ERROR));
  }
}

function* ProfileFavoritesDataWorker(action: PayloadAction<string>) {
  try {
    const profileData: CustomResponseType<Tag[]> = yield call(
      ProfileApi.getFavoritesProfileInfo,
      action.payload,
    );
    const profile = profileData.data;
    yield put(setFavoriteProfileData(profile));
  } catch (error) {
    yield put(setProfileLoadingState(LoadingState.ERROR));
  }
}

function* ProfileAdvertsDataWorker(action: PayloadAction<string>) {
  try {
    const profileData: CustomResponseType<AdvertWithoutCar[]> = yield call(
      ProfileApi.getFavoritesProfileInfo,
      action.payload,
    );
    const profile = profileData.data;
    yield put(setAdvertsProfileData(profile));
  } catch (error) {
    yield put(setProfileLoadingState(LoadingState.ERROR));
  }
}

export function* ProfileSagaWatcher() {
  yield takeEvery(fetchFullProfile.type, ProfileFullDataWorker);
  yield takeEvery(fetchMainProfileInfo.type, ProfileMainDataWorker);
  yield takeEvery(fetchRequiredProfileInfo.type, ProfileRequiredDataWorker);
  yield takeEvery(fetchAdditionalProfileInfo.type, ProfileAdditionalDataWorker);
  yield takeEvery(fetchSettingsProfileInfo.type, ProfileSettingsDataWorker);
  yield takeEvery(fetchSituationalProfileInfo.type, ProfileSituationalDataWorker);
  yield takeEvery(fetchFavoriteProfileInfo.type, ProfileFavoritesDataWorker);
  yield takeEvery(fetchAdvertsProfileInfo.type, ProfileAdvertsDataWorker);
}
