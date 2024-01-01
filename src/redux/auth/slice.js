import { createSlice } from '@reduxjs/toolkit';

import {
  userLogin,
  userRegistration,
  fetchCurrentUser,
  userLogOut,
  toggleUsersFavoriteCar,
  getVerifyEmailUser,
  updateUser,
} from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { userName: null, email: null, verify: null },
    admin: false,
    token: null,
    favoriteCars: [],

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
        state.admin = action.payload.admin;
        state.token = action.payload.token;
        state.favoriteCars = action.payload.favoriteCars;
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
        state.admin = action.payload.admin;
        state.token = action.payload.token;
        state.favoriteCars = action.payload.favoriteCars;
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
        state.user = action.payload.user;
        state.admin = action.payload.admin;
        state.favoriteCars = action.payload.favoriteCars;
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
        state.user = { userName: null, email: null, verify: null };
        state.admin = false;
        state.token = null;
        state.favoriteCars = [];
        state.isLogged = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(userLogOut.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(toggleUsersFavoriteCar.pending, state => {
        state.isLoading = true;
      })
      .addCase(toggleUsersFavoriteCar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favoriteCars = action.payload.favoriteCars;
      })
      .addCase(toggleUsersFavoriteCar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getVerifyEmailUser.fulfilled, (state, action) => {
        state.user.verify = action.payload;
      })

      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;
