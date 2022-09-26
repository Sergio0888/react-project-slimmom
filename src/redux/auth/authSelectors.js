export const isLogin = state => state.auth.isLogin;

export const getUserName = state => {
  if (isLogin) {
    return state.auth.user.user.username;
  }
  return;
};

export const getUserId = store => {
  return store.auth.user.user.id;
};

export const isSid = state => state.auth.sid;
