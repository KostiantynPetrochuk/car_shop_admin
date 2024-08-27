import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../..";

const initialState: any = [];

export const featuresSlice = createSlice({
  name: "features",
  initialState,
  reducers: {
    setFeatures: (state, action: PayloadAction<any>) => {
      return action.payload;
    },
  },
});

export const { setFeatures } = featuresSlice.actions;

export const selectFeatures = (state: RootState) => state.features;

export default featuresSlice.reducer;
