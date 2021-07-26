import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LanguageType, UiTheme } from '../../../GlobalTypes/profileTypes';
import { LoadingState } from '../../commonType';
import { LoginResponseData } from '../auth/@types';
import { endLogin } from '../auth/authReducer';

type AppInitialState = {
  _loginStatus: LoadingState;
  isAuth: boolean;
  uiTheme: UiTheme;
  impSys: boolean;
  lang: LanguageType;
  authUserID: number | null;
  firstName: string | null;
  lastName: string | null;
  avatarURL: string | null;
};

const appInitialState: AppInitialState = {
  _loginStatus: LoadingState.NEVER,
  isAuth: false,
  authUserID: null,
  avatarURL: null,
  lang: 'en',
  firstName: null,
  lastName: null,
  uiTheme: 'light',
  impSys: false,
};

const appReducer = createSlice({
  name: 'appSlice',
  initialState: appInitialState,
  reducers: {
    setAuthLoadingState(state, action: PayloadAction<LoadingState>) {
      state._loginStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(endLogin, (state, action: PayloadAction<LoginResponseData>) => {
      state.isAuth = true;
      state.authUserID = action.payload.user.id;
      state.avatarURL = action.payload.user.avatarURL;
      state.lang = action.payload.user.lang;
      state.firstName = action.payload.user.firstName;
      state.lastName = action.payload.user.lastName;
      state.uiTheme = action.payload.user.uiTheme;
      state.impSys = action.payload.user.impSys;

      localStorage.setItem('accessToken', action.payload.accessToken);

      state._loginStatus = LoadingState.SUCCESS;
    });
  },
});

export const { setAuthLoadingState } = appReducer.actions;

export default appReducer.reducer;
