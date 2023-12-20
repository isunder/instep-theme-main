import { createSlice } from "@reduxjs/toolkit";
import { wishlistget } from "../action/wishlistAction";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const getWishlistData = createSlice({
  name: "joblisting",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(wishlistget.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(wishlistget.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(wishlistget.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default getWishlistData.reducer;
