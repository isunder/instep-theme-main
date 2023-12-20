import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Accordion, Card, Col, Container, Row } from "react-bootstrap";
// import Subcaregoryfilter from "./SubcaregoryMobilefilter";
// import SubCategoryfilter from "./subCategoryfilter";
import { BsFillHeartFill } from "react-icons/bs";
import Spinner from "../loader/spinner";
import {
  wishlistget,
  wishlistremove,
} from "../../../Redux/action/wishlistAction";
import { getUserId } from "../../../utils/auth";

const Wishlistinform = () => {
  const dispatch = useDispatch();
  const userData = getUserId();

  console.log(userData, "userData");

  const data = useSelector(
    (state) => state?.getwishlisdData?.listdata?.data?.data
  );
  console.log(data, "dadadadada");

  const handleWishlistClick = (wishlistId) => {
    console.log(wishlistId, "sdfghjk");
    if (wishlistId) {
      //Delete API
      dispatch(wishlistremove({ tableid: wishlistId }));
    }
  };

  useEffect(
    (e) => {
      dispatch(wishlistget({ userId: userData?.id }));
    },
    [""]
  );

  return (
    <>
      <Row>
        {data &&
          data?.map((item) => {
            return (
              <>
                <Link
                  className="carddecorationnone_cat text_edit"
                  reloadDocumen={true}
                  to={`/productdetail/${item?.items[0]?._id}`}
                >
                  <div className="subcatkitechenmaindiv row margin_bottom">
                    <Col lg={4} md={4} sm={4}>
                      <div className="d-flex justify-content-end mt-2 mx-2">
                        <BsFillHeartFill
                          style={{ color: "#FF0000" }}
                          onClick={() => handleWishlistClick(item?._id)}
                        />
                      </div>
                      <div>
                        <img
                          className="subcatkitchen_image"
                          variant="top"
                          // src={item?.image || item?.thumbnail}
                          src={
                            item.items[0]?.image
                              ? item.items[0]?.image
                              : item.items[0]?.thumbnail?.split(":")?.length > 1
                              ? item.items[0]?.thumbnail
                              : `http://localhost:5000/uploads/${item?.items[0]?.thumbnail}`
                          }
                          alt=""
                        />
                      </div>
                    </Col>
                    <Col lg={6} md={6} sm={6}>
                      <div className="p-4">
                        <div className="subcatitem_cont">
                          {" "}
                          {item?.items[0]?.title}aaaaaaa
                        </div>
                        <div className="descripmob">
                          {" "}
                          {item?.items[0]?.description}
                        </div>
                        <div className="kit_homestarticon">
                          {item?.items[0]?.rating}
                        </div>
                      </div>
                    </Col>
                    <Col lg={2} md={2} sm={2}>
                      <div className="p-4">
                        <h5> ₹{item?.items[0]?.price}</h5>
                      </div>
                    </Col>
                  </div>
                </Link>
              </>
            );
          })}
      </Row>
    </>
  );
};

export default Wishlistinform;
