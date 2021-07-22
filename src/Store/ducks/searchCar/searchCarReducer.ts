import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadingState } from '../../commonType';
import { searchAdvert } from '../../../GlobalTypes/searchAdvert';

type initialStateType = {
  status: LoadingState;
  data: {
    make: string[] | null;
    model: string[] | null;
    count: string | null;
  };
};

const initialState = {
  status: LoadingState.NEVER,
  data: {
    make: null,
    model: null,
    count: null,
  },
} as initialStateType;

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    fetchMake(state) {
      state.status = LoadingState.LOADING;
    },
    setMake(state, action: PayloadAction<string[] | null>) {
      state.status = LoadingState.SUCCESS;
      state.data.make = action.payload;
    },
    fetchModel(state, action: PayloadAction<string>) {
      state.status = LoadingState.LOADING;
    },
    setModel(state, action: PayloadAction<string[] | null>) {
      state.data.model = action.payload;
      state.status = LoadingState.SUCCESS;
    },
    setLoadingState(state, action: PayloadAction<LoadingState>) {
      state.status = action.payload;
    },
    fetchSearchData(state, action: PayloadAction<searchAdvert>) {
      state.status = LoadingState.LOADING;
    },
    setCountOfAvailableAdvert(state, action: PayloadAction<string>) {
      state.status = LoadingState.SUCCESS;
      state.data.count = action.payload;
    },
  },
});

export const {
  fetchMake,
  setMake,
  fetchModel,
  setModel,
  fetchSearchData,
  setCountOfAvailableAdvert,
} = searchSlice.actions;
export default searchSlice.reducer;
