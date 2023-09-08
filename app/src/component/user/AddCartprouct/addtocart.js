import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { myCartList } from "../../../Redux/action/getProductDetailAction";
import { getUserId } from "../../../utils/auth";
import { cartinfo } from "../../../Redux/action/usercartinfo";

const AddToCartProduct = () => {
  const userData = getUserId();
  const userLogin = localStorage.getItem("token");
  const dispatch = useDispatch();
  const myCartL = useSelector((state) => state?.addToCartFile?.mycart);
  console.log(myCartL, "hello");

  const productClick = (_id) => {
    console.log(_id, "hh/ddhhjjjjjjjjjjj");
    // dispatch(updateProduct({ _id }));
  };

  useEffect(() => {
    if (userData && userData.id) dispatch(myCartList({ userid: userData.id }));
    // dispatch(myCartList);
    // dispatch(cartinfo());
  }, []);

  return (
    <>
      <div>
        {myCartL &&
          myCartL?.map((e) => {
            if (e.image) {
              // console.log(e,'jjjjjjjjjjjjjj')
            }
            return (
              <Link
                className="card_deco"
                to={`/productdetail/${e._id}`}
                onClick={() => productClick(e?._id)}
              >
                <Card className="shopping_card">
                  <div className="img_div">
                    <Card.Img
                      variant="top"
                      src={
                        e?.image
                          ? e?.image
                          : e?.thumbnail.split(":").length > 1
                          ? e?.thumbnail
                          : ""
                        // `http://localhost:5000/uploads/${e.thumbnail}`
                      }
                    />
                  </div>
                  <Card.Body>
                    <div className="item_rating">
                      <p className="homerating_cat"> {e?.rating}</p>
                      <p className="homerating_cat"> {e?.category}</p>
                    </div>
                    <Card.Title className="crad_text">{e?.title}</Card.Title>
                    <Card.Text className="crad_text">
                      {e?.description}\
                    </Card.Text>
                    <Card.Text className="crad_text">
                      <h5> ₹ {e?.price}</h5>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            );
          })}
        {/* <button onClick={handleClick}>Add to Cart</button> */}
      </div>
    </>
  );
};
export default AddToCartProduct;
