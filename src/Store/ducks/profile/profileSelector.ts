import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { AppStateType } from '../../store';

export const getFullProfileLoadingState = (state: AppStateType) => state.profile.status;
export const getFullProfile = (state: AppStateType) => state.profile.profile;

export const getMainProfileInfo = createDraftSafeSelector(getFullProfile, (state) => {
  return state.main;
});

export const getUserAvatar = createDraftSafeSelector(getMainProfileInfo, (state) => {
  return state.avatarURL;
});

export const getRequiredProfileInfo = createDraftSafeSelector(getFullProfile, (state) => {
  return state.required;
});

export const getAdditionalProfileInfo = createDraftSafeSelector(getFullProfile, (state) => {
  return state.additional;
});

export const getSituationalProfileInfo = createDraftSafeSelector(getFullProfile, (state) => {
  return state.situational;
});

export const getSettingsProfileInfo = createDraftSafeSelector(getFullProfile, (state) => {
  return state.settings;
});

export const getFavoriteProfileInfo = createDraftSafeSelector(getFullProfile, (state) => {
  return state.favorite;
});

export const getAdvertsProfileInfo = createDraftSafeSelector(getFullProfile, (state) => {
  return state.adverts;
});
