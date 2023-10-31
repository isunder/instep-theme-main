import { createSlice } from "@reduxjs/toolkit";
import { deliveryaddress } from "../action/deliveryAddress";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const deliverAddress = createSlice({
  name: "deliveryAddress",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(deliveryaddress.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(deliveryaddress.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(deliveryaddress.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default deliverAddress.reducer;
