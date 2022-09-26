import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import * as api from '../../shared/api/auth';

export const register = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.getRegister(data);
      Notiflix.Notify.success(
        `Hi ${data.username} ! You have successfully registered`
      );
      return response;
    } catch (error) {
      Notiflix.Notify.failure(
        `The user with email "${data.email}" is already registered, please enter another email.`
      );
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.getLogin(data);
      Notiflix.Notify.success(`Hi! Welcome to your account.`);

      return response;
    } catch (error) {
      Notiflix.Notify.warning(
       ` Sorry you didn't sign in. Please check your "${data.email}" or password "${data.password}`
      );
      return rejectWithValue(error.message);
    }
  }
);

export const getUser = createAsyncThunk(
  'auth/get/user',
  async (accessToken, { rejectWithValue }) => {
    try {
      const data = await api.getCurrentUser(accessToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (sid, { rejectWithValue, getState, dispatch }) => {
    const {
      auth: { refreshToken },
    } = getState();

    try {
      const response = await api.getRefresh(sid, refreshToken);
      const { newAccessToken } = response;
      dispatch(getUser(newAccessToken));
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.sid) {
        return false;
      }
    },
  }
);


export const getLogout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      await api.logoutFromAPI(auth.accessToken);
      return;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);