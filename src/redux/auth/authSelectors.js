export const isLogin = state => state.auth.isLogin;

export const getUserName = state => state.auth.user.username;

export const getUserId = store => {
  // if(!store.auth.user.user.id) {
  //   return store.auth.user.id
  // }
  return store.auth.user.user.id;
};

export const isSid = state => state.auth.sid;