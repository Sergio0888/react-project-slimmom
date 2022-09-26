export const getProducts = (store) => {
  return store.summary;
};
export const summary = (store) => {
  console.log();
  return store.auth.user.todaySummary;
};
export const getdate = (store) => {
  return store.summary.date;
};
export const getErrorLoadingSummary = (store) => {
  return { loading: store.summary.loading, error: store.summary.error };
};

export const getFoodNotRecommended = (store) => {
  return store.auth?.user?.userData?.notAllowedProducts;
};

export const getDayKcal = (store) => {
  return store.summary.summary
}