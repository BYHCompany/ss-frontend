import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadingState } from '../../commonType';
import { newsType } from './@types';

type initialStateType = {
  status: LoadingState;
  news: newsType[] | null;
};
const initialState = {
  status: LoadingState.NEVER,
  news: null,
} as initialStateType;

const newsSlice = createSlice({
  name: 'newsSlise',
  initialState,
  reducers: {
    fetchLastTenNews(state) {
      state.status = LoadingState.LOADING;
    },
    setLastTenNews(state, action: PayloadAction<newsType[]>) {
      state.news = action.payload;
    },
    setLoadingState(state, action: PayloadAction<LoadingState>) {
      state.status = action.payload;
    },
  },
});
export const { fetchLastTenNews, setLastTenNews } = newsSlice.actions;

export default newsSlice.reducer;
