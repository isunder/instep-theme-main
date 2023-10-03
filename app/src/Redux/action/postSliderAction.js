import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBasePath } from "../config/Config";

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
  headers: {
    // "Content-Type": "application/json",
  },
});

// export const adminPostslider = createAsyncThunk("adminPostslider",
//   async (payload) => {
//     const data1 = await axiosInstance.post(`/sliderpost`, payload);
//     return data1.data;
//   }
// );

export const adminPostslider = createAsyncThunk(
  "adminPostslider",
  async (payload) => {
    return axiosInstance.post("/sliderpost", payload);
  }
);
