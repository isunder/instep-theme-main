import { createSlice } from "@reduxjs/toolkit";
import { createprofile } from "../action/profileaction";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const profileslice = createSlice({
  name: "profile",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(createprofile.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(createprofile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(createprofile.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default profileslice.reducer;
