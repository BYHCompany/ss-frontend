import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile, UnformattedFullProfile } from '../../../GlobalTypes/profileTypes';
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
    favorite: null,
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

        state.profile.favorite = profileData.favorite;
        state.profile.adverts = profileData.adverts;

        state.status = LoadingState.SUCCESS;
      } else {
        state.profile = profileInitialState.profile;
        state.status = LoadingState.NEVER;
      }
    },

    setProfileLoadingState(state, action: PayloadAction<LoadingState>) {
      state.status = action.payload;
    },
  },
});

export const { fetchFullProfile, setFullProfileData, setProfileLoadingState } =
  profileSlice.actions;

export default profileSlice.reducer;
