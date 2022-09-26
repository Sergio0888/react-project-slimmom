import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  postEatenProduct,
  getInfoForDay,
  deleteProductItem,
} from "../../shared/api/diary";


export const addProduct = createAsyncThunk(
  "summary/add/product",
  async (data, { rejectWithValue }) => {
    try {
      const result = await postEatenProduct(data);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
  );

  export const removeProduct = createAsyncThunk(
  "summary/remove/product",
  async (data, { rejectWithValue }) => {
    try {
      return await deleteProductItem(data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
  );
  
  export const dayInfo = createAsyncThunk(
    "summary/get/dayInfo",
    async (data, { rejectWithValue }) => {
      try {
        return await getInfoForDay(data);
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );