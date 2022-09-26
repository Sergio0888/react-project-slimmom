import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModalRedux: (store) => {
      store.isOpen = !store.isOpen;
    },
  },
});

export const { toggleModalRedux } = modalSlice.actions;

export default modalSlice.reducer;
