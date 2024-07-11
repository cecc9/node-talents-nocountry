"use client";

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  token: string | null;
  user: object;
  message: {
    type: string;
    message: string;
  };
}

const initialState: AuthState = {
  isAuthenticated: false,
  isAuthenticating: false,
  token: null,
  user: {},
  message: {
    type: '',
    message: '',
  },
};

const authSlice = createSlice({
  name: 'authi',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isAuthenticating = true;
    },
    loginSuccess: (state, action: PayloadAction<{ token: string; user: object }>) => {
      state.isAuthenticated = true;
      state.isAuthenticating = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = false;
      state.isAuthenticating = false;
      state.message = { type: 'error', message: action.payload };
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = {};
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;