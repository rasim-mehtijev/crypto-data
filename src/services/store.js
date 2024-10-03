import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";
import { currencies } from "../constants";

const initalState = {
  selectedCurrency: currencies[0],
  errorMessage: null,
};

export const setSelectedCurrency = createAction("setSelectedCurrency");
export const setErrorMessage = createAction("setErrorMessage");

const appReducer = createReducer(initalState, (builder) => {
  builder
    .addCase(setSelectedCurrency, (state, action) => {
      state.selectedCurrency = action.payload;
    })
    .addCase(setErrorMessage, (state, action) => {
      state.errorMessage = action.payload;
    });
});

export const store = configureStore({
  reducer: appReducer,
});
