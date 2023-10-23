import { createSlice } from '@reduxjs/toolkit';

import { userLogin, userRegistration } from './operations';

const authSlice = createSlice({
  name: 'user',
  initialState: {
    user: { userName: null, email: null },
    token: null,
    isLogged: false,

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
      });
  },
});

export const authReducer = authSlice.reducer;
