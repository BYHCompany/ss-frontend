import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile } from '../../../GlobalTypes/profileTypes';
import { LoadingState } from '../../commonType';

interface ProfileState {
  status: LoadingState;
  profile: Profile | null;
}

const profileInitialState = {
  status: LoadingState.NEVER,
  profile: null,
} as ProfileState;

const profileSlice = createSlice({
  name: 'profileSlice',
  initialState: profileInitialState,
  reducers: {
    fetchProfile(state, action: PayloadAction<string | null>) {
      state.status = LoadingState.LOADING;
    },

    setProfileData(state, action: PayloadAction<Profile | null>) {
      const profileData = action.payload;
      state.profile = profileData;
      state.status = LoadingState.SUCCESS;
    },

    setProfileLoadingState(state, action: PayloadAction<LoadingState>) {
      state.status = action.payload;
    },
  },
});

export const { fetchProfile, setProfileLoadingState, setProfileData } = profileSlice.actions;

export default profileSlice.reducer;
