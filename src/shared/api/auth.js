import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://slimmom-backend.goit.global',
});

const setToken = (token = '') => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

export const getRegister = async user => {
  const { data } = await instance.post('/auth/register', user);
  instance.defaults.headers.authorization = `Bearer ${data.accessToken}`;
  return data;
};

export const getLogin = async user => {
  const { data } = await instance.post('/auth/login', user);
  instance.defaults.headers.authorization = `Bearer ${data.accessToken}`;
  return data;
};

export const getCurrentUser = async token => {
  setToken(token);
  try {
    const { data } = await instance.get('/user');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};


export const logoutFromAPI = async token => {
  const { data } = await instance.post('/auth/logout', token);
  setToken();

  return data;
};


