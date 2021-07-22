import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Advert } from '../../../GlobalTypes/advertTypes';
import { LoadingState } from '../../commonType';

type AdvertInitialStateType = {
  status: LoadingState;
  advert: Advert | null;
};

const advertInitialState = {
  status: LoadingState.NEVER,
  advert: {
    id: null,
    ownerID: null,
    boosts: null,
    item: null,
    owner: null,
    createAt: null,
    updateAt: null,
  },
} as AdvertInitialStateType;

const advertSlice = createSlice({
  name: 'advertSlice',
  initialState: advertInitialState,
  reducers: {
    //action for fetch advertData
    fetchAdvert(state, action: PayloadAction<string>) {
      state.status = LoadingState.LOADING;
    },
    //action for setting advertData to State
    setAdvert(state, action: PayloadAction<Advert | null>) {
      const advertData = action.payload;
      state.status = LoadingState.SUCCESS;
      state.advert = advertData;
    },
    setLoadingState(state, action: PayloadAction<LoadingState>) {
      state.status = action.payload;
    },
  },
});

export const { fetchAdvert, setAdvert, setLoadingState } = advertSlice.actions;

export default advertSlice.reducer;
