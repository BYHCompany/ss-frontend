import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginData, LoginResponseData } from './@types';

const authSlice = createSlice({
  name: 'authSlice',
  initialState: {},
  reducers: {
    startLogin(state, action: PayloadAction<LoginData>) {},
    endLogin(state, action: PayloadAction<LoginResponseData>) {},
    getProfileByAccessToken(state, action: PayloadAction) {},
  },
});

export const { startLogin, endLogin, getProfileByAccessToken } = authSlice.actions;
export default authSlice.reducer;
