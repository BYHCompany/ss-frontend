import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UiTheme } from '../../../GlobalTypes/profileTypes';

type AppInitialState = {
  isAuth: boolean;
  isLogin: boolean;
  uiTheme: UiTheme;
  impSys: boolean;
  authUserID: number | null;
};

const appInitialState = {
  impSys: false,
  isAuth: false,
  isLogin: false,
  uiTheme: 'light',
  authUserID: null,
} as AppInitialState;

const appReducer = createSlice({
  name: 'appSlice',
  initialState: appInitialState,
  reducers: {
    setLogin(state, action: PayloadAction<boolean>) {
      state.isLogin = action.payload;
    },
  },
});

export const { setLogin } = appReducer.actions;

export default appReducer.reducer;
