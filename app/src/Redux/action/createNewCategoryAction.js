import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBasePath } from "../config/Config";

export const axiosInstance = axios.create({
  baseURL: apiBasePath,
});

// export const addcategory = createAsyncThunk("categoryadd", async (payload) => {
//   const data1 = await axiosInstance.post(`/addcategory`, payload);
//   return data1.data;
// });

export const addcategory = createAsyncThunk(
  "addcategory/addcategory",
  async (payload) => {
    return axiosInstance.post("/addcategory", payload);
  }
);

export const deleteCategory = createAsyncThunk(
  "pospadminproduct",
  async (payload, id) => {
    console.log(payload, id, "gggggggggggggggggggg");
    const data1 = await axiosInstance
      .post(`/productsdlt`, payload)
      .then((res) => res);
    console.log(data1, "data1data1");
    return data1.data;
  }
);

