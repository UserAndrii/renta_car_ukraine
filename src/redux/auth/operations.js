import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://renta-car-ukraine-api.onrender.com/users';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const userRegistration = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/register', credentials);
      token.set(data.token);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const userLogin = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/login', credentials);
      token.set(data.token);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('There is no logged in user');
    }

    token.set(persistedToken);

    try {
      const { data } = await axios.get('/current');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userLogOut = createAsyncThunk(
  'auth/logOut',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/logout', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const toggleUsersFavoriteCar = createAsyncThunk(
  'auth/favoriteCars',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/favorite', id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getVerifyEmailUser = createAsyncThunk(
  'auth/getVerifyEmail',
  async (verifyToken, thunkAPI) => {
    try {
      const response = await axios.get(`/verify/${verifyToken}`);

      return response.data.verify;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
