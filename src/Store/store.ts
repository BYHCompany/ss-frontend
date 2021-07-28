import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import advertReducer from './ducks/advert/advertReducer';
import appReducer from './ducks/app/appReducer';
import searchCarReducer from './ducks/searchCar/searchCarReducer';
import profileReducer from './ducks/profile/profileReducer';
import rootSaga from './sagas';
import newsReducer from './ducks/news/newsReducer';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    app: appReducer,
    advert: advertReducer,
    searchCar: searchCarReducer,
    profile: profileReducer,
    news: newsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppStateType = ReturnType<typeof store.getState>;
