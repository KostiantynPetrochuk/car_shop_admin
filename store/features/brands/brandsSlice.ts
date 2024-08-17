import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../";

type Brand = {
  id: string;
  brand_name: string;
  file_name: string;
};

const initialState: Brand[] = [];

export const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {
    setBrands: (state, action: PayloadAction<any>) => {
      return action.payload;
    },
  },
});

export const { setBrands } = brandsSlice.actions;

export const selectBrands = (state: RootState) => state.brands;

export default brandsSlice.reducer;
