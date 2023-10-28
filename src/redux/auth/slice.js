import { createSlice } from '@reduxjs/toolkit';

import {
  userLogin,
  userRegistration,
  fetchCurrentUser,
  userLogOut,
} from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { userName: null, email: null },
    token: null,
    isLogged: false,
    isRefreshing: false,

    isLoading: false,
    error: false,
  },
  extraReducers: builder => {
    builder
      .addCase(userRegistration.pending, state => {
        state.isLoading = true;
      })
      .addCase(userRegistration.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogged = true;

        state.isLoading = false;
        state.error = null;
      })
      .addCase(userRegistration.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(userLogin.pending, state => {
        state.isLoading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLogged = true;

        state.isLoading = false;
        state.error = null;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(fetchCurrentUser.pending, state => {
        state.isLoading = true;
        state.isRefreshing = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLogged = true;
        state.isRefreshing = false;

        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isRefreshing = false;
        state.error = action.payload;
      })

      .addCase(userLogOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(userLogOut.fulfilled, state => {
        state.user = { userName: null, email: null };
        state.token = null;
        state.isLogged = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(userLogOut.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
