import { createSlice } from '@reduxjs/toolkit';

import { register, login, refresh, getUser, getLogout } from './authOperations';
import { pending, rejected } from '../../shared/utils/pendingRejected';

const initialState = {
  user: {},
  isLogin: false,
  loading: false,
  error: null,
  accessToken: '',
  refreshToken: '',
  sid: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: store => {
      store.loading = true;
      store.error = null;
    },

    [register.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload;
    },

    [register.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [login.pending]: store => {
      store.loading = true;
      store.error = null;
    },

    [login.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.isLogin = true;
      store.user = payload.user;
      store.sid = payload.sid;
      store.accessToken = payload.accessToken;
      store.refreshToken = payload.refreshToken;
    },

    [login.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [getLogout.pending]: pending,
    [getLogout.rejected]: rejected,
    [getLogout.fulfilled]: () => initialState,

    [refresh.pending]: store => {
      store.loading = true;
      store.error = null;
    },

    [refresh.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.isLogin = true;
      store.sid = payload.sid;
      store.accessToken = payload.newAccessToken;
      store.refreshToken = payload.newRefreshToken;
    },

    [refresh.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [getUser.pending]: store => {
      store.loading = true;
      store.error = null;
    },

    [getUser.fulfilled]: (store, { payload }) => {
      store.isLogin = true;
      store.loading = false;
      store.user = payload;
    },

    [getUser.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default authSlice.reducer;