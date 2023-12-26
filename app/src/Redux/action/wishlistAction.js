import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBasePath } from "../config/Config";

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
  headers: {
    "Content-Type": "application/json",
  },
});

export const wishlistremove = createAsyncThunk(
  "deletewishlist",
  async (payload) => {
    return axiosInstance.post("/wishlist/remove", payload);
  }
);

export const wishlistadd = createAsyncThunk(
  "wishlistadd",
  async (payload) => {
    return axiosInstance.post("/wishlist/add", payload);
  }
);

export const wishlistget = createAsyncThunk(
  "wishlistget",
  async (payload) => {
    return axiosInstance.post("/wishlist/get", payload);
  }
);
