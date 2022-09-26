import { createSlice } from "@reduxjs/toolkit";

import initialState from "./summary-initialState";
import { pending, rejected } from "../../shared/other/pendReject";
import { getUser } from "../auth/authOperations";
import { addProduct, dayInfo, removeProduct } from "./summary-operations";
import { makeRandomProducts } from "../../pages/CalculatorPage/CalculatorPage";


const summarySlice = createSlice({
  name: "summary",
  initialState,
  reducers: {
    setNewDate: (store, { payload }) => {
      store.date = payload.date;
    },

    updateSummaryAndnotAllowedProducts: (store, { payload }) => {
      store.notAllowedProducts = makeRandomProducts(payload.notAllowedProducts);
      const { summaries } = payload;
      if (summaries.length > 0) {
        const newSummary = summaries[summaries.length - 1];
        store.summary = {
          kcalLeft: newSummary.kcalLeft,
          kcalConsumed: newSummary.kcalConsumed,
          dailyRate: newSummary.dailyRate,
          percentsOfDailyRate: newSummary.percentsOfDailyRate,
        };
      }
    },
  },
  extraReducers: {
    [getUser.fulfilled]: (store, { payload }) => {
      const products = makeRandomProducts(payload.userData.notAllowedProducts);
      return {
        ...store,
        loading: false,
        notAllowedProducts: products,
      };
    },
    
    [dayInfo.pending]: pending,
    [dayInfo.rejected]: rejected,
    [dayInfo.fulfilled]: (store, { payload }) => {
      if (payload.daySummary) {
        return {
          ...store,
          loading: false,
          dayId: payload.id,
          date: payload.date,
          eatenProducts: [...payload.eatenProducts],
          summary: {
            kcalLeft: payload.daySummary.kcalLeft,
            kcalConsumed: payload.daySummary.kcalConsumed,
            dailyRate: payload.daySummary.dailyRate,
            percentsOfDailyRate: payload.daySummary.percentsOfDailyRate,
          },
        };
      }
      if (payload.kcalLeft) {
        const { kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate } =
          payload;
        return {
          ...store,
          loading: false,
          summary: {
            kcalLeft,
            kcalConsumed,
            dailyRate,
            percentsOfDailyRate,
          },
          eatenProducts: [],
        };
      }
      return {
        ...store,
        loading: false,
      };
    },

    [addProduct.pending]: pending,
    [addProduct.rejected]: rejected,
    [addProduct.fulfilled]: (store, { payload }) => {
      const { eatenProducts } = payload?.day || payload?.newDay;
      const summary = payload?.newSummary || payload?.daySummary;
      const newDayId = payload?.newDay?.id || store.dayId;
      const { kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate } =
        summary;
      return {
        ...store,
        dayId: newDayId,
        loading: false,
        eatenProducts,
        summary: { kcalConsumed, kcalLeft, dailyRate, percentsOfDailyRate },
      };
    },

    [removeProduct.pending]: pending,
    [removeProduct.rejected]: rejected,
    [removeProduct.fulfilled]: (store, { payload }) => {
      const {
        deletedProductId,
        newDaySummary: {
          kcalLeft,
          kcalConsumed,
          dailyRate,
          percentsOfDailyRate,
        },
      } = payload;
      return {
        ...store,
        loading: false,
        summary: {
          kcalLeft,
          kcalConsumed,
          dailyRate,
          percentsOfDailyRate,
        },
        eatenProducts: store.eatenProducts.filter(
          (el) => el.id !== deletedProductId
        ),
      };
    },
  },
});

export const {
  setNewDate,
  updateEatenProducts,
  updateSummaryAndnotAllowedProducts,
} = summarySlice.actions;

export default summarySlice.reducer;
