import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { AppStateType } from '../../store';

export const getFullProfileLoadingState = (state: AppStateType) => state.profile.status;
export const getFullProfile = (state: AppStateType) => state.profile.profile;

export const getMainProfileInfo = createDraftSafeSelector(getFullProfile, (state) => {
  const mainFromState = state.main;

  const mainProfileInfo = {
    _status: mainFromState._status,
    firstName: mainFromState.firstName,
    lastName: mainFromState.lastName,
    avatarURL: mainFromState.avatarURL,
  };

  return mainProfileInfo;
});

export const getRequiredProfileInfo = createDraftSafeSelector(getFullProfile, (state) => {
  const requiredFromState = state.required;

  const requiredProfileInfo = {
    _status: requiredFromState._status,
    id: requiredFromState.id,
    type: requiredFromState.type,
    confirmed: requiredFromState.confirmed,
    banned: requiredFromState.banned,
  };

  return requiredProfileInfo;
});

export const getAdditionalProfileInfo = createDraftSafeSelector(getFullProfile, (state) => {
  const additionalFromState = state.additional;

  const requiredProfileInfo = {
    _status: additionalFromState._status,
    email: additionalFromState.email,
    phone: additionalFromState.phone,
    sex: additionalFromState.sex,
    about: additionalFromState.about,
    location: additionalFromState.location,
    bd: additionalFromState.bd,
    country: additionalFromState.country,
  };

  return requiredProfileInfo;
});

export const getSituationalProfileInfo = createDraftSafeSelector(getFullProfile, (state) => {
  const situationalFromState = state.situational;

  const situationalProfileInfo = {
    _status: situationalFromState._status,
    confirmHash: situationalFromState.confirmHash,
    banReason: situationalFromState.banReason,
    createdAt: situationalFromState.createdAt,
    updatedAt: situationalFromState.updatedAt,
  };

  return situationalProfileInfo;
});

export const getSettingsProfileInfo = createDraftSafeSelector(getFullProfile, (state) => {
  const settingsFromState = state.settings;

  const settingsProfileInfo = {
    _status: settingsFromState._status,
    uiTheme: settingsFromState.uiTheme,
    lang: settingsFromState.lang,
    impSys: settingsFromState.impSys,
  };

  return settingsProfileInfo;
});
