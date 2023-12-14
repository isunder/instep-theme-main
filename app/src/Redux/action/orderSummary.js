import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBasePath } from "../config/Config";

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
  headers: {
    "Content-Type": "application/json",
  },
});

export const Afterorder = createAsyncThunk("orderSummary", async (payload) => {
  return axiosInstance.post(`/orderSummary`, payload);
});

// export const adminPostslider = createAsyncThunk(
//   "adminPostslider",
//   async (payload) => {
//     return axiosInstance.post("/orderSummary", payload);
//   }
// );
