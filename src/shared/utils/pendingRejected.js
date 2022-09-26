export const pending = (store) => ({
  ...store,
  loading: true,
  error: null,
});

export const rejected = (store, { payload }) => ({
  ...store,
  loading: false,
  error: {
    message: payload.response.data.message,
    status: payload.response.status,
  },
});
