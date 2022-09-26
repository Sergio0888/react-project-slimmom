export const isLogin = state => state.auth.isLogin;

export const getUserName = state => {
  return state?.auth?.user?.user?.username || state?.auth?.user?.username 
}

export const getUserId = store => {
  console.log(store.auth.user.id)
  // if(!store.auth.user.user.id) {
  //   return store.auth.user.id
  // }
  return store.auth.user.id;
};

export const isSid = state => state.auth.sid;