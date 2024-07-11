"use client";

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authReducer';
import {logSlice} from './features/authApi';


export const store = configureStore({
  reducer: {
    authi: authReducer,
    [logSlice.reducerPath]: logSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;