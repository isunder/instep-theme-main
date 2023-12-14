import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBasePath } from "../config/Config";

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
});



export const adminPostheading = createAsyncThunk(
  "adminPostheading",
  async (payload) => {
    return axiosInstance.post("/headerpost", payload);
  }
);
