import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import modalReducer from './modal/modal-slice';

import { persistReducer } from 'redux-persist';
import summaryReducer from './summary/summary-slice';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['accessToken', 'refreshToken', 'sid'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedReducer,
  summary: summaryReducer,
  modal: modalReducer,
});

export default rootReducer;
