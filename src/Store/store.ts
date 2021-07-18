import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import advertReducer from './ducks/advert/advertReducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    advert: advertReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppStateType = ReturnType<typeof store.getState>;
