import { configureStore } from '@reduxjs/toolkit';
import debugReducer from './debugSlice';

const store = configureStore({
  reducer: {
    debug: debugReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
