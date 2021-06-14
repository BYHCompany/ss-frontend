import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { RootReducer } from './RootReducer';

const sagaMiddleware = createSagaMiddleware();

type AppState = ReturnType<typeof RootReducer>;

export const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});
