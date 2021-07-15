import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Advert } from '../../../GlobalTypes/advertTypes';
import { LoadingState } from '../../commonType';

type AdvertInitialStateType = {
  status: LoadingState;
  advert: Advert;
};

const advertInitialState = {
  status: LoadingState.NEVER,
  advert: {
    id: null,
    ownerId: null,
    boosts: null,
    item: null,
    createAt: null,
    updateAt: null,
  },
} as AdvertInitialStateType;

const advertSlice = createSlice({
  name: 'advert',
  initialState: advertInitialState,
  reducers: {
    //action for fetch advertData
    getAdvert(state, action: PayloadAction<string>) {
      state.status = LoadingState.LOADING;
    },
    //action for setting advertData to initialState
    setAdvert(state, action: PayloadAction<Advert>) {
      const advertData = action.payload;
      state.status = LoadingState.SUCCESS;
      state.advert = advertData;
    },
    setLoadingState(state, action: PayloadAction<LoadingState>) {
      state.status = action.payload;
    },
  },
});

export const { getAdvert, setAdvert, setLoadingState } = advertSlice.actions;

export default advertSlice.reducer;
