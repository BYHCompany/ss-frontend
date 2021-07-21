import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Tag } from '../../../Components/Tags/Tags/Tags';
import { AdvertWithoutCar } from '../../../GlobalTypes/advertTypes';
import {
  Profile,
  ProfileAdditionalInfo,
  ProfileMainInfo,
  ProfileRequiredInfo,
  ProfileSettings,
  ProfileSituationalInfo,
  UnformattedFullProfile,
} from '../../../GlobalTypes/profileTypes';
import { LoadingState } from '../../commonType';

interface ProfileState {
  status: LoadingState;
  profile: Profile;
}

const profileInitialState = {
  status: LoadingState.NEVER,
  profile: {
    required: {
      _status: LoadingState.NEVER,
      id: null,
      type: null,
      banned: false,
      confirmed: false,
    },
    main: {
      _status: LoadingState.NEVER,
      avatarURL: null,
      firstName: null,
      lastName: null,
    },
    additional: {
      _status: LoadingState.NEVER,
      about: null,
      email: null,
      bd: null,
      country: null,
      location: null,
      phone: null,
      sex: null,
    },
    settings: {
      _status: LoadingState.NEVER,
      impSys: false,
      lang: 'en',
      uiTheme: 'light',
    },
    situational: {
      _status: LoadingState.NEVER,
      banReason: null,
      confirmHash: null,
      createdAt: null,
      updatedAt: null,
    },
    favorites: null,
    adverts: null,
  },
} as ProfileState;

const profileSlice = createSlice({
  name: 'profileSlice',
  initialState: profileInitialState,
  reducers: {
    /**
     * Full profile data
     */
    fetchFullProfile(state, action: PayloadAction<string>) {
      state.status = LoadingState.LOADING;
    },

    setFullProfileData(state, action: PayloadAction<UnformattedFullProfile | null>) {
      const profileData = action.payload;

      if (profileData) {
        state.profile.required = {
          _status: LoadingState.SUCCESS,
          id: profileData.id,
          type: profileData.type,
          banned: profileData.banned,
          confirmed: profileData.confirmed,
        };

        state.profile.main = {
          _status: LoadingState.SUCCESS,
          avatarURL: profileData.avatarURL,
          firstName: profileData.firstName,
          lastName: profileData.lastName,
        };

        state.profile.additional = {
          _status: LoadingState.SUCCESS,
          about: profileData.about,
          bd: profileData.bd,
          country: profileData.country,
          email: profileData.email,
          location: profileData.location,
          phone: profileData.phone,
          sex: profileData.sex,
        };

        state.profile.settings = {
          _status: LoadingState.SUCCESS,
          impSys: profileData.impSys,
          lang: profileData.lang,
          uiTheme: profileData.uiTheme,
        };

        state.profile.situational = {
          _status: LoadingState.SUCCESS,
          banReason: profileData.banReason,
          confirmHash: profileData.confirmHash,
          createdAt: profileData.createdAt,
          updatedAt: profileData.updatedAt,
        };

        state.profile.favorites = profileData.favorites;
        state.profile.adverts = profileData.adverts;

        state.status = LoadingState.SUCCESS;
      }

      state.profile = profileInitialState.profile;
      state.status = LoadingState.SUCCESS;
    },

    /**
     * Main profile data
     */
    fetchMainProfileInfo(state, action: PayloadAction<string>) {
      state.profile.main._status = LoadingState.LOADING;
    },

    setMainProfileData(state, action: PayloadAction<ProfileMainInfo | null>) {
      if (action.payload) state.profile.main = action.payload;
      state.profile.main._status = LoadingState.SUCCESS;
    },

    /**
     * Required profile data
     */
    fetchRequiredProfileInfo(state, action: PayloadAction<string>) {
      state.profile.required._status = LoadingState.LOADING;
    },

    setRequiredProfileData(state, action: PayloadAction<ProfileRequiredInfo | null>) {
      if (action.payload) state.profile.required = action.payload;
      state.profile.required._status = LoadingState.SUCCESS;
    },

    /**
     * Additional profile data
     */
    fetchAdditionalProfileInfo(state, action: PayloadAction<string>) {
      state.profile.additional._status = LoadingState.LOADING;
    },

    setAdditionalProfileData(state, action: PayloadAction<ProfileAdditionalInfo | null>) {
      if (action.payload) state.profile.additional = action.payload;
      state.profile.additional._status = LoadingState.SUCCESS;
    },

    /**
     * Settings profile data
     */
    fetchSettingsProfileInfo(state, action: PayloadAction<string>) {
      state.profile.settings._status = LoadingState.LOADING;
    },

    setSettingsProfileData(state, action: PayloadAction<ProfileSettings | null>) {
      if (action.payload) state.profile.settings = action.payload;
      state.profile.settings._status = LoadingState.SUCCESS;
    },

    /**
     * Situational profile data
     */
    fetchSituationalProfileInfo(state, action: PayloadAction<string>) {
      state.profile.settings._status = LoadingState.LOADING;
    },

    setSituationalProfileData(state, action: PayloadAction<ProfileSituationalInfo | null>) {
      if (action.payload) state.profile.situational = action.payload;
      state.profile.settings._status = LoadingState.SUCCESS;
    },

    /**
     * Favorite car tags profile data
     */
    fetchFavoriteProfileInfo(state, action: PayloadAction<string>) {
      state.status = LoadingState.LOADING;
    },

    setFavoriteProfileData(state, action: PayloadAction<Tag[] | null>) {
      if (action.payload) state.profile.favorites = action.payload;
      state.status = LoadingState.SUCCESS;
    },

    /**
     * Adverts profile data
     */
    fetchAdvertsProfileInfo(state, action: PayloadAction<string>) {
      state.status = LoadingState.LOADING;
    },

    setAdvertsProfileData(state, action: PayloadAction<AdvertWithoutCar[] | null>) {
      if (action.payload) state.profile.adverts = action.payload;
      state.status = LoadingState.SUCCESS;
    },

    setProfileLoadingState(state, action: PayloadAction<LoadingState>) {
      state.status = action.payload;
    },
  },
});

export const {
  fetchFullProfile,
  setProfileLoadingState,
  fetchAdditionalProfileInfo,
  fetchAdvertsProfileInfo,
  fetchFavoriteProfileInfo,
  fetchMainProfileInfo,
  fetchRequiredProfileInfo,
  fetchSettingsProfileInfo,
  fetchSituationalProfileInfo,
  setAdditionalProfileData,
  setAdvertsProfileData,
  setFavoriteProfileData,
  setMainProfileData,
  setRequiredProfileData,
  setSettingsProfileData,
  setSituationalProfileData,
  setFullProfileData,
} = profileSlice.actions;

export default profileSlice.reducer;
