import axios from 'axios';
import { toast } from 'react-toastify';
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
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
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

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.patch('/update', credentials);
      console.log(response.data.user);
      return response.data.user;
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
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
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
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
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const resendVerifyUserEmail = createAsyncThunk(
  'auth/resendVerifyEmail',
  async (_, thunkAPI) => {
    try {
      await axios.get(`/verify`);

      return;
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sendEmailAdminPermission = createAsyncThunk(
  'auth/emailAdminPermission',
  async (_, thunkAPI) => {
    try {
      await axios.get(`/accessed`);

      toast.success('Your request has been successfully sent!', {
        position: toast.POSITION.TOP_RIGHT,
      });

      return;
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
