import { createSlice } from "@reduxjs/toolkit";
import { addToCartAction } from "../action/addToCartAction";

const initialState = {
  isLoading: false,
  listdata: [],
  error: "",
};
const AddToCartFile = createSlice({
  name: "Productdata",
  initialState,

  extraReducers: (bulider) => {
    bulider.addCase(addToCartAction.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    bulider.addCase(addToCartAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listdata = action?.payload;
      state.error = "";
    });
    bulider.addCase(addToCartAction.rejected, (state, action) => {
      state.error = "";
      state.isLoading = false;
    });
  },
});

export default AddToCartFile.reducer;

// reducers/cartReducer.js

// const initialState = {
//   cartItems: [],
// };

// const AddToCartFile = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       return {
//         ...state,
//         cartItems: [...state.cartItems, action.payload],
//       };
//     // Handle other actions...
//     default:
//       return state;
//   }
// };

// export default AddToCartFile.reducer;
