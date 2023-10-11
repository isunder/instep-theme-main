import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBasePath } from "../config/Config";

export const axiosInstance = axios.create({
    baseURL: apiBasePath,
    headers: {
        "Content-Type": "application/json",
    },
});


export const typesubcategorypost = createAsyncThunk("typesubcategorypost", async (payload) => {
    return axiosInstance.post("/addtypesubcategory", payload);
}
);


export const typesubcategoryget = createAsyncThunk("typesubcategoryget", async (payload) => {
    return axiosInstance.post("/gettypesubcategory", payload);
}
);