export const isLogin = state => state.auth.isLogin;

export const getUserName = state => {
  return state?.auth?.user?.user?.username || state?.auth?.user?.username;
};

export const getUserId = store => {
  return store.auth.user.user.id;
};

export const isSid = state => state.auth.sid;
