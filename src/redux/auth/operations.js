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
  'user/register',
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
  'user/login',
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
