import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadingState } from '../../commonType';
import { newsType } from './@types';

type initialStateType = {
  status: LoadingState;
  shortNews: newsType[] | null;
  fullNews: newsType | null;
};
const initialState = {
  status: LoadingState.NEVER,
  shortNews: null,
  fullNews: null,
} as initialStateType;

const newsSlice = createSlice({
  name: 'newsSlise',
  initialState,
  reducers: {
    fetchLastTenShortNews(state) {
      state.status = LoadingState.LOADING;
    },
    fetchOneFullByIdNews(state, action: PayloadAction<string | null>) {
      state.status = LoadingState.LOADING;
    },
    setLastTenShortNews(state, action: PayloadAction<newsType[] | null>) {
      state.shortNews = action.payload;
      state.status = LoadingState.SUCCESS;
    },
    setOneFullByIdNews(state, action: PayloadAction<newsType | null>) {
      state.fullNews = action.payload;
      state.status = LoadingState.SUCCESS;
    },
    setLoadingState(state, action: PayloadAction<LoadingState>) {
      state.status = action.payload;
    },
  },
});
export const {
  fetchLastTenShortNews,
  setLastTenShortNews,
  fetchOneFullByIdNews,
  setOneFullByIdNews,
} = newsSlice.actions;

export default newsSlice.reducer;
