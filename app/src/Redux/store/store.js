import { configureStore } from "@reduxjs/toolkit";
import registrationDataReducer from "../reducer/reducer";
import sliceviewReducer from "../reducer/sliceapicard";
import registerDataReducer from "../reducer/registerReducer";
import liginDataReducer from "../reducer/loginReducer";
import ProductDetailReducer from "../reducer/productDetailSlice";
import getProductActionReducer from "../reducer/getProductReducer";
import PostProductDataReducer from "../reducer/adminPostProductReducer";
import GetAdminProductListDataReducer from "../reducer/getProductAdminListReducer";
import FilterDataByCategoryReducer from "../reducer/getCategoryReducer";
import deleteProductReducer from "../reducer/deleteProductReducer";
import updateProductReducer from "../reducer/updateProductReducer";

export const store = configureStore({
  reducer: {
    register: registrationDataReducer,
    slicedetails: sliceviewReducer,
    registerdetail: registerDataReducer,
    logindatacheck: liginDataReducer,
    productdetaildata: ProductDetailReducer,
    getproductdata: getProductActionReducer,
    postproductAdmindata: PostProductDataReducer,
    GetAdminProductAllListData: GetAdminProductListDataReducer,
    filtercategoryData: FilterDataByCategoryReducer,
    deleteProduct: deleteProductReducer,
    updateProductData: updateProductReducer,
  },
});
