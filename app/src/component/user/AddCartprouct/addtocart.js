// components/ProductDetails.js

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "../../../Redux/action/addToCartAction";

const AddToCartProductFile = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state?.addToCartFile?.listdata);
  console.log(cart, "rrr");

  const handleClick = () => {
    dispatch(addToCartAction());
  };

  return (
    <>
      <div>
        <button onClick={handleClick}>Add to Cart</button>
      </div>
    </>
  );
};
export default AddToCartProductFile;
