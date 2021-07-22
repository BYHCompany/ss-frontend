import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { AppStateType } from '../../store';

/**
 * Execute app state from whole store
 */
export const getAppState = (state: AppStateType) => state.app;

export const getIsLogin = createDraftSafeSelector(getAppState, (store) => {
  return store.isLogin;
});

export const getIsAuth = createDraftSafeSelector(getAppState, (store) => {
  return store.isAuth;
});

export const getAuthUserID = createDraftSafeSelector(getAppState, (store) => {
  return store.authUserID;
});
