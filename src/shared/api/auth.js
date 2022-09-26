import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://slimmom-backend.goit.global',
});

const setToken = (token = '') => {
  if (token) {
    return (instance.defaults.headers.Authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.Authorization = '';
};

export const getRegister = async user => {
  const { data } = await instance.post('/auth/register', user);
  instance.defaults.headers.Authorization = `Bearer ${data.accessToken}`;
  return data;
};

export const getLogin = async user => {
  const { data } = await instance.post('/auth/login', user);
  instance.defaults.headers.Authorization = `Bearer ${data.accessToken}`;
  return data;
};

export const getRefresh = async (sid, refreshToken) => {
  instance.defaults.headers.Authorization = `Bearer ${refreshToken}`;
  const { data } = await instance.post('/auth/refresh', sid);
  return data;
};

export const getCurrentUser = async accessToken => {
  instance.defaults.headers.Authorization = `Bearer ${accessToken}`;
  const { data } = await instance.get('/user');
  return data;
};


export const logoutFromAPI = async token => {
  const { data } = await instance.post('/auth/logout', token);
  setToken();

  return data;
};